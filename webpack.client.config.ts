import path from "node:path";

import type {Configuration as WebpackConfiguration} from "webpack";

import {TsconfigPathsPlugin} from "tsconfig-paths-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import WebpackBar from "webpackbar";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";

const config: WebpackConfiguration = {
   devtool: false,
   mode: "production",

   entry: {
      vendor: ["react", "react-dom", "react-router-dom"],

      client: {
         import: "./src/client.tsx",
         dependOn: "vendor",
      }
   },

   cache: {
      type: 'filesystem',
      allowCollectingMemory: true,
   },

   output: {
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "dist", "client"),
      assetModuleFilename: "[name][ext]",
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

   optimization: {
      minimize: true,
      minimizer: [
         new TerserPlugin(),
         new CssMinimizerPlugin()
      ],
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

      new MiniCssExtractPlugin({
         filename: "[name].[contenthash].css"
      }),

      new WebpackBar({
         color: "#185870"
      })
   ],
};

module.exports = config;
