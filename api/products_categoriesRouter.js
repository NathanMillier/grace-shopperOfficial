//working on this one tomorrow (4/13/2022) additional review needed -Wells

const express = require("express");
const {
  getProductsByCategory,
  addProductToCategory,
} = require("../db/products_categories");
const { getAllCategories } = require("./categoriesRouter");

const products_categoriesRouter = express.Router();

products_categoriesRouter.use((req, res, next) => {
  console.log("A request is being made to /products_categories");
  next();
});

products_categoriesRouter.get("/", async (req, res) => {
  const categories = await getAllCategories;
});

products_categoriesRouter.delete("/", async (req, res) => {
    const 
})

module.exports = products_categoriesRouter;