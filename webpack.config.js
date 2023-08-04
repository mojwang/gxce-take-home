"use strict";

const path = require("path");
const webpack = require("webpack");

module.exports = ["server", "client"].map((file) => ({
  entry: {
    [file]: path.resolve(`./src/${file}`),
  },
  devtool: "inline-source-map",
  target: file === "server" ? "node" : "web",
  stats: {
    // errorDetails: true,
  },
  resolve: {
    mainFields: ["browser", "main", "module"],
    symlinks: false,
  },
  module: {
    // shimming dist bundle
    rules: [
      {
        test: /(\.jsx|\.tsx|\.ts|\.js)?$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
    ],
  },
  output: {
    path: path.resolve("build"),
    publicPath: "/js/",
  },
  optimization: {
    // splitChunks: { chunks: 'all' }
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
    // new CleanWebpackPlugin(),
    // new ChunksPlugin({
    //     generateChunksManifest: true,
    //     generateChunksFiles: false
    // })
  ],
}));
