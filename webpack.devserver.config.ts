import path from "node:path";

import webpack from "webpack";
import type {Configuration as WebpackConfiguration} from "webpack";
import type {Configuration as WebpackDevServerConfiguration} from "webpack-dev-server";

import {TsconfigPathsPlugin} from "tsconfig-paths-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import WebpackBar from "webpackbar";

const devServer: WebpackDevServerConfiguration = {
	static: "vendor",
	historyApiFallback: true,
	http2: true,
	hot: true,
};

const config: WebpackConfiguration = {
	devtool: false,
	mode: "development",

	entry: "./src/index.tsx",

	cache: {
		type: 'filesystem',
		// allowCollectingMemory: true,
	},

	output: {
		filename: "[name].[contenthash].js",
	},

	module: {
		rules: [
			{
				test: /\.ts(x|)$/,
				exclude: /node_modules/,
				loader: "ts-loader",
				options: {
					transpileOnly: true,
				}
			},

			{
				test: /\.p?css$/i,
				// type: "asset/resource",
				// use: [
				// 	{
				// 		loader: 'style-loader',
				// 	},
				// 	{
				// 		loader: 'css-loader',
				// 		options: {
				// 			importLoaders: 1,
				// 		}
				// 	},
				// 	{
				// 		loader: 'postcss-loader'
				// 	}
				// ],
				use: [
					"style-loader",
					"css-loader",
					"postcss-loader"
				],
			},
		]
	},

	resolve: {
		extensions: [".tsx", ".ts", ".jsx", ".js"],

		plugins: [
			new TsconfigPathsPlugin(),
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "src", "index.html"),
		}),

		new webpack.DllReferencePlugin({
			manifest: require('./vendor/main-manifest.json')
		}),

		new WebpackBar({
			color: "#9f9b00"
		}),
	],

	devServer,
};

export default config;
