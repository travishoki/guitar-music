// Turns each script in /scripts into a `javascript:` bookmarklet, written to
// scripts/dist/<name>-bookmarklet. Paste a file's contents into the URL field of a
// new bookmark, then click it while on an Ultimate Guitar tab page.
import fs from 'fs';
import path from 'path';
import { minify } from 'terser';
import colors from 'colors';

/*eslint-disable no-console */

const SOURCE_DIR = 'scripts';
const OUTPUT_DIR = 'scripts/dist';

// Scripts to build
const SCRIPTS = ['ultimate-guitar-lyrics.js', 'ultimate-guitar-print.js'];

const build = async (file) => {
	const source = fs.readFileSync(path.join(SOURCE_DIR, file), 'utf8');

	// The IIFE keeps the top-level `const`s out of the page's global scope, so
	// clicking the bookmarklet twice can't fail with "already been declared".
	const wrapped = `(() => {\n${source}\n})();`;

	const { code } = await minify(wrapped, {
		compress: true,
		mangle: true,
		// Escape non-ASCII rather than emitting it raw - the result has to survive
		// being stored as a URL in a bookmark.
		format: { ascii_only: true },
	});

	return `javascript:${encodeURIComponent(code)}`;
};

const run = async () => {
	fs.mkdirSync(OUTPUT_DIR, { recursive: true });

	for (const file of SCRIPTS) {
		const url = await build(file);
		const output = path.join(OUTPUT_DIR, `${path.basename(file, '.js')}-bookmarklet`);

		fs.writeFileSync(output, url, 'utf8');
		console.log(`${output} written (${url.length} chars)`.green);
	}
};

run().catch((err) => {
	console.log(String(err).red);
	process.exitCode = 1;
});
