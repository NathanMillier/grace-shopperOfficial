const express = require("express");
const { UNSAFE_NavigationContext } = require("react-router-dom");
const { getAllOrders, getAllOrdersById, updateOrder } = require("../db/orders");
const { getProductPrice } = require("../db/products");
const {
  addItemToOrder,
  removeSingleItem,
  updateItemQuantity,
} = require("../db/order_items");

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

orderRouter.post("/cart", async (req, res, next) => {
  try {
    const { orderId, productId, price, quantity } = req.body;
    const itemToAdd = await addItemToOrder({
      orderId,
      productId,
      price,
      quantity,
    });
    res.send(itemToAdd);
  } catch (error) {
    next(error);
  }
});

orderRouter.delete("/deleteItem", async (req, res, next) => {
  try {
    const { orderId, productId } = req.body;
    console.log(orderId, productId);
    const itemToDelete = await removeSingleItem({ orderId, productId });
    res.send(itemToDelete);
  } catch (error) {
    next(error);
  }
});

orderRouter.patch("/updateCartItem", async (req, res, next) => {
  try {
    const { orderId, productId } = req.body;
    const productPrice = await getProductPrice({ productId });
    const itemToUpdate = await updateItemQuantity({
      orderId,
      productId,
      productPrice,
    });
    res.send(itemToUpdate);
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
