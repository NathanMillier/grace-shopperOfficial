const client = require("./index");

const addItemToOrder = async ({ orderId, productId, price, quantity }) => {
  try {
    const order_items = await client.query(
      `
    INSERT INTO order_items("orderId", "productId", price, quantity)
    VALUES($1, $2, $3, $4)
    RETURNING*;
    `,
      [orderId, productId, price, quantity]
    );
    return order_items.rows[0];
  } catch (error) {
    throw error;
  }
};

const removeSingleItem = async ({ orderId, productId }) => {
  try {
    const response = await client.query(
      `
    DELETE FROM order_items
    WHERE "orderId" = $1 AND
    "productId" = $2
    RETURNING *;`,
      [orderId, productId]
    );
    return response.rows[0];
  } catch (error) {
    throw error;
  }
};

const updateItemQuantity = async ({ productPrice, orderId, productId }) => {
  try {
    const response = await client.query(
      `
    UPDATE order_items SET quantity = quantity + 1, price = price + $1
    WHERE "orderId" = $2 AND
    "productId" = $3
    RETURNING *;`,
      [productPrice, orderId, productId]
    );
    return response.rows[0];
  } catch (error) {
    throw error;
  }
};

const getOrderByProductId = async (productId) => {
  try {
    const response = await client.query(
      `
      SELECT * FROM order_items
      WHERE "productId" = $1
    `,
      [productId]
    );
    return response.rows[0];
  } catch (error) {
    throw error;
  }
};

module.exports = {
  updateItemQuantity,
  removeSingleItem,
  addItemToOrder,
  getOrderByProductId,
};
