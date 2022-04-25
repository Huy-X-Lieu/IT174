"use strict";
const express = require("express");
const data = require("./data");

const app = express();
app.set("port", process.env.PORT || 3000);
app.use(express.static("./public"));
app.use(express.urlencoded());

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home", {
    products: data.getAllWithGeneralInfo(),
  });
});

app.get("/detail", (req, res) => {
  const product = getProductFromQuery(req.url);

  if (product) {
    res.render("detail", { product });
  } else {
    res.render("detail", { error: "product not found" });
  }
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.use((req, res) => {
  res.type("text/plain");
  res.status(404);
  res.send("404 - Not found");
});

app.listen(app.get("port"), () => {
  console.log("Express started");
});

// const http = require("http");

// const processUrl = (req, res) => {
//   const path = req.url.toLowerCase().split("?")[0];
//   if (path === "/") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end(stringOfItemsWithGeneralInfo());
//   } else if (path === "/about") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.sendFile("./public/about.html");
//   } else if (path === "/detail") {
//     const product = getProductFromQuery(req.url);

//     if (product) {
//       res.writeHead(200, { "Content-Type": "text/plain" });
//       res.end(stringOfAnItemWithDetailedInfo(product));
//     } else {
//       res.writeHead(404, { "Content-Type": "text/plain" });
//       res.end("Product not found");
//     }
//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end(`404 Not Found \n ${path}`);
//   }
// };

// const server = http.createServer(processUrl);
// server.listen(process.env.PORT || 3000);

const stringOfItemsWithGeneralInfo = () => {
  let stringOfItems = "";
  data.getAll().forEach((product) => {
    stringOfItems += stringOfAnItemWithGeneralInfo(product);
    stringOfItems += "\n\n";
  });
  return stringOfItems;
};

const stringOfAnItemWithGeneralInfo = (item) => {
  let stringOfAnItem = "[\n";
  for (let key in Object.keys(item)) {
    stringOfAnItem += `\t${Object.keys(item)[key]}: ${
      Object.values(item)[key]
    }\n`;
  }
  stringOfAnItem += `\tURL: ${createURLForProductName(item.name)}\n`;
  stringOfAnItem += "]";
  return stringOfAnItem;
};

const getProductFromQuery = (url) => {
  const name = url.split("?")[1].split("=")[1];
  return data.getItem(name);
};

const stringOfAnItemWithDetailedInfo = (item) => {
  let stringOfAnItem = "";
  for (let key in Object.keys(item)) {
    stringOfAnItem += `\t${Object.keys(item)[key]}: ${
      Object.values(item)[key]
    }\n`;
  }
  stringOfAnItem += "";
  return stringOfAnItem;
};

const createURLForProductName = (name) => {
  return `href="http://localhost:3000/detail?name=${name
    .toLowerCase()
    .split(" ")
    .join("-")}"`;
};
