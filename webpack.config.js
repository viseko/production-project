const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "build"),
    clean: true
  },
  plugins: [

  ],
  resolve: {
    extensions: [
      ".js"
    ]
  }
};