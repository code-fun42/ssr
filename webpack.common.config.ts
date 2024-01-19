import type {Configuration as WebpackConfiguration} from "webpack";

import {TsconfigPathsPlugin} from "tsconfig-paths-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import TerserPlugin from "terser-webpack-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

const config: WebpackConfiguration = {
	devtool: false,
	mode: "production",

	cache: {
		type: 'filesystem',
		allowCollectingMemory: true,
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

	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin(),
			new CssMinimizerPlugin()
		],
	},
};

export default config;
