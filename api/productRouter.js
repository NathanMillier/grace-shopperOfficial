const express = require("express");
const {
  getProducts,
  createProduct,
  updateProduct,
  destroyProduct,
  getProductById,
} = require("../db/products");

const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  const products = await getProducts();
  res.send(products);
});

productRouter.post("/", async (req, res) => {
  try {
    const response = await createProduct(req.body);
    res.send(response);
  } catch (error) {
    throw error;
  }
});

productRouter.patch("/", async (req, res) => {
  console.log(req.body, "WWWWWWWWWWWWWWWW");
  try {
    const response = await updateProduct(req.body);
    console.log(response);
    res.send(response);
  } catch (error) {
    throw error;
  }
});

productRouter.delete("/", async (req, res) => {
  console.log(req.body, "test");
  try {
    const response = await destroyProduct(req.body);
    console.log(response);
    res.send(response);
  } catch (error) {
    throw error;
  }
});

productRouter.get("/:productId", async (req, res) => {
  try {
    const response = await getProductById({ productId: req.params.productId });
    console.log(response);
    res.send(response);
  } catch (error) {
    throw error;
  }
});

module.exports = productRouter;
