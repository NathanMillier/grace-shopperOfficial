const client = require("./index");

const addItemToOrder = async ({ productId, orderID, price, quantity }) => {
  try {
    const order_items = await client.query(
      `
    INSERT INTO order_items("productId", price, quantity)
    VALUES($1, $2, $3) WHERE "orderID" = $4
    RETURNING*;
    `,
      [productId, quantity, price, orderID]
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
