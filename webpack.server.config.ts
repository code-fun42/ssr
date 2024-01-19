import path from "node:path";

import type {Configuration as WebpackConfiguration} from "webpack";

import MiniCssExtractPlugin from "mini-css-extract-plugin";
import WebpackBar from "webpackbar";

const config: WebpackConfiguration = {
	extends: path.resolve(__dirname, "webpack.common.config.ts"),

	target: "node",

	entry: {
		server: {
			import: "./server/index.tsx",
		}
	},

	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "dist", "server"),
		clean: true,
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
