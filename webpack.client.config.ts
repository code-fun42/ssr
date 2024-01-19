import path from "node:path";

import type {Configuration as WebpackConfiguration} from "webpack";

import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import WebpackBar from "webpackbar";

const config: WebpackConfiguration = {
	extends: path.resolve(__dirname, "webpack.common.config.ts"),

	target: ["web", "es6"],

	entry: {
		vendor: ["react", "react-dom", "react-router-dom"],

		client: {
			import: "./src/client.tsx",
			dependOn: "vendor",
		}
	},

	output: {
		filename: "[name].[contenthash].js",
		path: path.resolve(__dirname, "dist", "client"),
		assetModuleFilename: "[name][ext]",
		clean: true,
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "src", "index.html"),
		}),

		new MiniCssExtractPlugin({
			filename: "[name].[contenthash].css"
		}),

		new WebpackBar({
			color: "#185870"
		})
	],
};

export default config;
