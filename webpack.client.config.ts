import path from "node:path";

import type {Configuration as WebpackConfiguration} from "webpack";

import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import WebpackBar from "webpackbar";

const config: WebpackConfiguration = {
   extends: path.resolve(__dirname, "webpack.common.config.ts"),

   entry: "./src/client.tsx",

   output: {
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "dist", "client"),
      assetModuleFilename: "[name][ext]",
      clean: true,
   },

   plugins: [
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, "src", "templates", "client.html"),
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
