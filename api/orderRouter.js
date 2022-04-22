const express = require("express");
const { UNSAFE_NavigationContext } = require("react-router-dom");
const { getAllOrders, getAllOrdersById, updateOrder } = require("../db/orders");

const orderRouter = express.Router();

orderRouter.get("/", async (req, res, next) => {
  try {
    const orders = await getAllOrders();
    res.send({ orders });
  } catch (error) {
    next(error);
  }
});

orderRouter.get("/:id", async (req, res, next) => {
  try {
    const orders = await getAllOrdersById({ orderId: req.params.id });
    res.send({ orders });
  } catch (error) {
    next(error);
  }
});

// orderRouter.patch("/:id", async (req, res) => {
//   const creatorId = req.body.creatorId;
//   try {
//     const response = await updateOrder({ id: id, creatorId: creatorId });
//     res.send(response);
//   } catch (error) {
//     throw error;
//   }
// });

module.exports = orderRouter;
