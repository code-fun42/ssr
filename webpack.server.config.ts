import path from "node:path";

import type {Configuration as WebpackConfiguration} from "webpack";

import {TsconfigPathsPlugin} from "tsconfig-paths-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import WebpackBar from "webpackbar";

const config: WebpackConfiguration = {
	devtool: false,
	mode: "production",

	target: "node",

	entry: {
		server: {
			import: "./server/index.tsx",
		}
	},

	cache: {
		type: 'filesystem',
		allowCollectingMemory: true,
	},

	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "dist", "server"),
		clean: true,
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
				test: /\.css$/i,
				exclude: /node_modules/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader"
				]
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
		new MiniCssExtractPlugin({
			filename: "[name].css"
		}),

		new WebpackBar({
			color: "#59188c"
		})
	],
};

export default config;
