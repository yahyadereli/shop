const express = require("express");
const app = express();
const webpack = require("webpack");
const devMiddleware = require("webpack-dev-middleware");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const fs = require("fs");

const HOST = "0.0.0.0";
const PORT = 8080;

app.get("/api/users", (req, res) => {
  fs.readFile("./src/users.json", "utf8", function(err, data) {
    if (err) {
      console.log("err");
    }
    const users = data;
    const user = JSON.parse(users);
    res.json(user);
  });
});

app.use(
  devMiddleware(
    webpack({
      entry: "./src/main.js",
      mode: "development",
      module: {
        rules: [
          { test: /\.vue$/, use: "vue-loader" },
          {
            test: /\.(eot|jpe?g|png|svg|pdf|ttf|woff2?|wasm)$/,
            use: [
              {
                loader: "file-loader",
                options: { name: "s/[name].[ext]", esModule: false }
              }
            ]
          },
          {
            test: /\.css$/,
            use: ["vue-style-loader", "css-loader"]
          }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          inject: false,
          template: "./src/index.html"
        }),
        new VueLoaderPlugin()
      ]
    }),
    {
      logLevel: "error",
      stats: "errors-only"
    }
  )
);

app.listen(PORT, HOST, () => {
  console.log(`Node version is ${process.version}`);
  console.log(`Server running at http://${HOST}:${PORT}/`);
});
