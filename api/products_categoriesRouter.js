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

<<<<<<< HEAD
<<<<<<< HEAD
products_categoriesRouter.delete("/", async (req, res) => {
    const 
})
=======
>>>>>>> 51ba120aabcf115b5c0c824109419611438543e2

products_categoriesRouter.delete("/", async (req, res) => {});
module.exports = products_categoriesRouter;
<<<<<<< HEAD
=======
products_categoriesRouter.delete("/", async (req, res) => {});
>>>>>>> c0fff46606701ee6ebc848ed67ccdadb83d95599
=======



>>>>>>> 51ba120aabcf115b5c0c824109419611438543e2
