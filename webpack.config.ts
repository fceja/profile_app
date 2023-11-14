import CopyWebpackPlugin from "copy-webpack-plugin";
import Dotenv from "dotenv-webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

const projectRoot = ".";

module.exports = {
  mode: "development",
  entry: `${projectRoot}/src/ts/index.tsx`,
  // set bundle output
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, `${projectRoot}/dist`),
    publicPath: "/",
  },
  // set dev settings
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 8080,
    historyApiFallback: true,
  },
  // files to process
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  // files to resolve
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    // set env vars
    new Dotenv({
      path: "./.env",
    }),

    // set html index
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),

    // copy neccessary files
    new CopyWebpackPlugin({
      patterns: [
        { from: "public/images/favicon.ico", to: "favicon.ico" },
        { from: "public/manifest.json", to: "manifest.json" },
      ],
    }),
  ],
};
