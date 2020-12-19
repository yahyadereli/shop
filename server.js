const express = require("express");
const app = express();
const webpack = require("webpack");
const devMiddleware = require("webpack-dev-middleware");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const fs = require("fs");
const bodyParser = require("body-parser");

const urlencodedParser = bodyParser.urlencoded({ extended: true });
const jsonParser = bodyParser.json();

const HOST = "0.0.0.0";
const PORT = 8080;

// New User Entry

app.post("/user", jsonParser, async (req, res) => {
  const postUser = {
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password
  };
  const usersData = await bringUsersData();
  // for (let i = 0; i < usersData.length; i++) {
  //   if (postUser.email == usersData[i].email) {
  //     console.log("OK!");
  //     res.send(false);
  //     return;
  //   }
  // }

  if (usersData.filter(user => user.email == postUser.email).length > 0) {
    res.send(false);
    return;
  };


  usersData.push(postUser);
  const data = JSON.stringify(usersData, null, 2);
  fs.writeFile("./src/users.json", data, function (hata) {
    if (hata) {
      console.log(hata);
      res.send(false);
    } else {
      res.send(true);
      console.log("WARN!");
    }
  });

    // if (postUser.email == usersData[i].email) {
    //   res.json(false);
    // } else {
    //   usersData.push(postUser);
    //   const data = JSON.stringify(usersData);
    //   fs.writeFile("./src/users.json", data, function(err) {
    //     if (err) {
    //       console.log("Error");
    //     } else {
    //       console.log('OK!')
    //     }
    //   });
    //   res.json(true);
    // }
  }
});

// Login Control

app.post("/logincontrol", jsonParser, async (req, res) => {
  const logUser = {
    email: req.body.email,
    password: req.body.password
  };
  const usersData = await bringUsersData();
  for (let i = 0; i < usersData.length; i++) {
    if (
      logUser.email == usersData[i].email &&
      logUser.password == usersData[i].password
    ) {
      res.send(true);
    } else {
      res.send(false);
    }
  }
});

//  Users Information

function bringUsersData() {
  return new Promise((resolve, reject) => {
    fs.readFile("./src/users.json", "utf8", function(err, data) {
      if (err) reject(err);
      else {
        resolve(JSON.parse(data));
      }
    });
  });
}

// Products

app.get("/api/products", (req, res) => {
  fs.readFile("./src/product.json", "utf8", function(err, data) {
    if (err) {
      console.log("err");
    }
    const products = JSON.parse(data);
    res.json(products);
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
