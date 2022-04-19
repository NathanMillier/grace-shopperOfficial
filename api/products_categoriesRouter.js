const express = require("express");
const {
  getProductsByCategory,
  addProductToCategory,
} = require("../db/products_categories");
const categoriesRouter = require("./categoriesRouter");
const { getAllCategories } = require("./categoriesRouter");

const products_categoriesRouter = express.Router();

products_categoriesRouter.use((req, res, next) => {
  console.log("A request is being made to /products_categories");
  next();
});

products_categoriesRouter.get("/", async (req, res) => {
  const categories = await getAllCategories;
});

products_categoriesRouter.delete("/", async (req, res) => {});

module.exports = categoriesRouter;
