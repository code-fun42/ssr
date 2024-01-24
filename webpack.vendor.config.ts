import path from "node:path";

import webpack from "webpack";
import type {Configuration as WebpackConfiguration} from "webpack";

const config: WebpackConfiguration = {
	devtool: false,
	mode: "development",

	entry: ["react", "react-dom", "react-router-dom"],

	output: {
		path: path.join(__dirname, "vendor"),
		filename: "vendor.[name].js",
		library: '[name]_[fullhash]',
	},

	plugins: [
		new webpack.DllPlugin({
			name: "[name]_[fullhash]",
			path: path.join(__dirname, "vendor", "[name]-manifest.json")
		}),
	]
};

export default config;
