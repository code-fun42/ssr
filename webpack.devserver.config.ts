import path from "node:path";

import type {Configuration as WebpackConfiguration} from "webpack";
import type {Configuration as WebpackDevServerConfiguration} from "webpack-dev-server";

import {TsconfigPathsPlugin} from "tsconfig-paths-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import WebpackBar from "webpackbar";

const devServer: WebpackDevServerConfiguration = {
   compress: true,
   client: {
      progress: true,
      overlay: true,
   },
   port: 4010,
   http2: true,
   hot: true,
};

const config: WebpackConfiguration = {
   devtool: false,
   mode: "development",

   entry: "./src/index.tsx",

   cache: {
      type: 'filesystem',
      allowCollectingMemory: true,
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
            test: /\.css$/i,
            // type: "asset/resource",
            use: ["style-loader", "css-loader"],
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

      new WebpackBar({
         color: "#9f9b00"
      }),
   ],

   devServer,
};

export default config;
