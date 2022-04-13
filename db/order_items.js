const client = require("pg/lib/native/client");

const addItemToOrder = async ({ productId, orderID, price, quantity }) => {
  try {
    const order_items = await client.query(
      `
    INSERT INTO order_items("productId", "orderID", price, quantity)
    VALUES($1, $2, $3, $4)
    RETURNING*;
    `,
      [productId, orderID, price, quantity]
    );
    return order_items.rows[0];
  } catch (error) {
    throw error;
  }
};

const removeSingleItem = async ({ productId, orderId }) => {
  try {
    const response = await client.query(
      `
    DELETE FROM order_items
    WHERE "orderId" = $1 AND
    "productid" = $2
    RETURNING *;`,
      [orderId, productId]
    );
    return response.rows[0];
  } catch (error) {
    throw error;
  }
};

const updateItemQuantity = async ({ productId, orderId }) => {
  try {
    const response = await client.query(
      `
    UPDATE order_items SET quantity = $1
    WHERE "orderId" = $1 AND
    "productid" = $2
    RETURNING *;`,
      [orderId, productId]
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
};
