const express = require("express");
const { getAllOrders } = require("../db/orders");

const orderRouter = express.Router();

orderRouter.get("/", async (req, res) => {
  try {
    const orders = await getAllOrders();
    res.send({ orders });
  } catch (error) {
    throw error;
  }
});

module.exports = orderRouter;
