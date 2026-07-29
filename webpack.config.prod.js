import path from 'path';
import { fileURLToPath } from 'url';

import HtmlWebpackPlugin from 'html-webpack-plugin';

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
			},
		],
	},
};
