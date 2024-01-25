import type {Configuration as WebpackConfiguration} from "webpack";

import webpack from "webpack";
import {TsconfigPathsPlugin} from "tsconfig-paths-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import TerserPlugin from "terser-webpack-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

const config: WebpackConfiguration = {
   devtool: false,
   mode: "development",

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
               "css-loader",
               "postcss-loader"
            ]
         },
      ]
   },

   resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],

      plugins: [
         new TsconfigPathsPlugin(),
      ]
   },

   optimization: {
      splitChunks: {
         chunks: "all",
         cacheGroups: {
            react: {
               test: /[/\\]node_modules[/\\]react/,
               filename: 'react.[contenthash].js'
            }
         }
      },
      // minimize: true,
      // minimizer: [
      // new TerserPlugin(),
      // new CssMinimizerPlugin()
      // ],
   },
};

export default config;
