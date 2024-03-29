const webpack = require("webpack");
const path = require("path");
const FtpOutputPlugin = require("ftp-output-webpack-plugin");
// const ftpOptions = require("./ftpOptions");

module.exports = {
  mode: "production",
  devtool: "inline-source-map",
  entry: [
    "eventsource-polyfill", // necessary for hot reloading with IE
    "webpack-hot-middleware/client?reload=true", //note that it reloads the page if hot module reloading fails.
    "./src/index",
  ],
  target: "web",
  output: {
    path: "/guitar", // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: "/",
    filename: "bundle.js",
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new FtpOutputPlugin(ftpOptions), // ftpOptions see as above description
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, "src"),
        use: ["babel-loader"],
      },
      { test: /\.(jpg|png)$/, use: ["file"] },
      {
        test: /(\.less)$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000" },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream",
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml",
      },
      //font-awesome
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&minetype=application/font-woff",
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader",
      },
    ],
  },
};
