const client = require("./");

const getAllOrders = async () => {
  const res = await client.query(`
    SELECT * FROM orders;
    `);
  return res.rows;
};

// const getAllOrdersById= ();

// const updateOrder();

const createOrder = async ({
  creatorId,
  isPublic,
  order,
  color,
  quantity,
  price,
}) => {
  try {
    const { rows: orders } = await client.query(
      `INSERT INTO routines ("creatorId", "isPublic", order, color, quantit, price)
         VALUES ($1, $2, $3, $4 $5, $6)
         RETURNING *;`,
      [creatorId, isPublic, order, color, quantity, price]
    );

    return orders[0];
  } catch (error) {
    throw error;
  }
};

// const deleteOrder();

module.exports = {
  getAllOrders,
  createOrder,
};
