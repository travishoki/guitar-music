import path from 'path';
import { fileURLToPath } from 'url';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
	mode: 'production',
	devtool: 'source-map',
	entry: ['./src/index'],
	target: 'web',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		filename: 'bundle.js',
		clean: true,
	},
	optimization: {
		minimizer: [
			new TerserPlugin({
				// Escape all non-ASCII characters (e.g. lodash's accent map and
				// smart quotes) to \uXXXX so the bundle can't be corrupted by a
				// server charset or a text-mode upload during deploy.
				terserOptions: {
					format: {
						ascii_only: true,
					},
				},
			}),
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			// index.html already hard-codes <script src="/bundle.js">, so let the
			// template through verbatim instead of injecting a second tag.
			inject: false,
			template: './src/index.html',
		}),
	],
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		alias: {
			'~svg': path.resolve(__dirname, 'src/svg'),
		},
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.js$/,
				include: path.join(__dirname, 'src'),
				use: ['babel-loader'],
			},
			{
				test: /\.less$/,
				use: ['style-loader', 'css-loader', 'less-loader'],
			},
			{
				test: /\.(woff|woff2|ttf|eot|svg)$/,
				type: 'asset/inline',
			},
			{
				test: /\.(jpg|png)$/,
				type: 'asset/resource',
				// Emit images into an images/ subfolder (rather than alongside
				// index.html) to keep the deploy directory tidy for FTP.
				generator: {
					filename: 'images/[hash][ext]',
				},
			},
		],
	},
};
