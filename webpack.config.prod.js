const webpack = require("webpack");
const path = require("path");
const FtpOutputPlugin = require("ftp-output-webpack-plugin");
const ftpOptions = require("./ftpOptions");

module.exports = {
  debug: true,
  devtool: "inline-source-map",
  noInfo: false,
  entry: [
    "eventsource-polyfill", // necessary for hot reloading with IE
    "webpack-hot-middleware/client?reload=true", //note that it reloads the page if hot module reloading fails.
    path.resolve(__dirname, "src/index"),
  ],
  target: "web",
  output: {
    path: "/guitar", // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: "/",
    filename: "bundle.js",
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new FtpOutputPlugin(ftpOptions), // ftpOptions see as above description
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, "src"),
        loaders: ["babel"],
      },
      { test: /\.(jpg|png)$/, loaders: ["file"] },
      { test: /(\.less)$/, loaders: ["style", "css", "less"] },
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
      { test: /\.json$/, loader: "json-loader" },
    ],
  },
  node: {
    net: "empty",
    fs: "empty",
    tls: "empty",
  },
};
