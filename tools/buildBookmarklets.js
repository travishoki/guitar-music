// Bundles each entry in /scripts (following its imports of const.js and
// helpers.ts) and writes two files per entry into scripts/dist:
//
//   <name>.js           - the bundle, paste-able into the browser console
//   <name>-bookmarklet  - the same bundle as a `javascript:` URL, paste-able
//                         into the URL field of a new bookmark
import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';
import colors from 'colors';

/*eslint-disable no-console */

const SOURCE_DIR = 'scripts';
const OUTPUT_DIR = 'scripts/dist';

// Entry points. const.js and helpers.ts are pulled in by import, not listed.
const SCRIPTS = ['ultimate-guitar-lyrics.js', 'ultimate-guitar-print.js'];

const config = {
	mode: 'production',
	entry: Object.fromEntries(
		SCRIPTS.map((file) => [
			path.basename(file, '.js'),
			path.resolve(SOURCE_DIR, file),
		]),
	),
	output: {
		path: path.resolve(OUTPUT_DIR),
		filename: '[name].js',
		// Wrap in an IIFE so the top-level consts stay out of the page's global
		// scope - a bookmarklet runs there, and re-clicking it would otherwise fail
		// with "has already been declared".
		iife: true,
	},
	optimization: {
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					// Escape non-ASCII rather than emitting it raw - the result has to
					// survive being stored as a URL in a bookmark.
					format: { ascii_only: true },
				},
			}),
		],
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	target: 'web',
	devtool: false,
};

const bundle = () =>
	new Promise((resolve, reject) => {
		webpack(config, (err, stats) => {
			if (err) return reject(err);
			if (stats.hasErrors()) return reject(new Error(stats.toString('errors-only')));
			return resolve(stats);
		});
	});

const run = async () => {
	await bundle();

	SCRIPTS.forEach((file) => {
		const name = path.basename(file, '.js');
		const bundlePath = path.join(OUTPUT_DIR, `${name}.js`);
		const code = fs.readFileSync(bundlePath, 'utf8');
		const url = `javascript:${encodeURIComponent(code)}`;
		const urlPath = path.join(OUTPUT_DIR, `${name}-bookmarklet`);

		fs.writeFileSync(urlPath, url, 'utf8');
		console.log(`${bundlePath} written (${code.length} chars)`.green);
		console.log(`${urlPath} written (${url.length} chars)`.green);
	});
};

run().catch((err) => {
	console.log(String(err).red);
	process.exitCode = 1;
});
