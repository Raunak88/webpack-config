var path = require("path");
module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./bundle.js",
    publicPath: "/dist",
  },
  module: {
    rules: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["es2015"] },
          },
        ],
      },
    ],
  },
};
