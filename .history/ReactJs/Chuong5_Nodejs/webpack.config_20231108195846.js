const path = require("path");

console.log("__dirname", __dirname);
c

module.exports = {
  mode: "development",
  entry: {
    app: path.resolve("src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, dist),
  },
};