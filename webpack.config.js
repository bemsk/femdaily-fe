const fs = require("fs");
const path = require("path");
const webpack = require("webpack");

const projectRootDirectory = fs.realpathSync(process.cwd());
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const plugins = [
  new HtmlWebpackPlugin({
    template: path.resolve(projectRootDirectory, "public/index.html"),
  }),

  new CopyPlugin({
    patterns: [
      { from: "public/styles", to: "styles/" },
      { from: "public/images", to: "images/" },
    ],
  }),
];

const jsRule = {
  test: /\.(js|jsx)$/,
  include: path.resolve(projectRootDirectory, "src/"),
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env", "@babel/preset-react"],
    },
  },
};

const cssRule = {
  test: /\.css$/,
  use: ["style-loader", "css-loader"],
};

const imgRule = {
  test: /\.(bmp|jpe?g|png|svg|gif)$/,
  use: {
    loader: "file-loader",
    options: {
      name: "assets/[name].[ext]",
    },
  },
};

module.exports = {
  mode: "development",
  entry: path.resolve(projectRootDirectory, "src/index.js"),
  output: {
    filename: "[name].[contenthash:8].js",
    path: path.resolve(projectRootDirectory, "dist"),
    clean: true,
  },
  resolve: {
    extensions: [".jsx", "..."],
  },
  devServer: {
    port: "8080",
  },
  plugins: plugins,
  module: {
    rules: [jsRule, cssRule, imgRule],
  },
};
