const path = require("path");
const rootDir = require("../util/path");
const adminData = require("./admin")

const express = require("express");
const router = express.Router();

// as we are using 'get' instead of 'use', express applies a exact path to '/'
router.get("/", (req, res, next) => {
  //res.send('<h1>Hello from express!</h1>')
  //res.sendFile(path.join(rootDir, "views", "shop.html")); //dont use / because path.join concatenate

  const products = adminData.products;
  res.render("shop", { prods: products, pageTitle: "Shop", path: '/' });
});

module.exports = router;
