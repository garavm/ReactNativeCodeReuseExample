const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    filename: "web/js/bundle.js",
    sourceMapFilename: "web/js/bundle.map"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
