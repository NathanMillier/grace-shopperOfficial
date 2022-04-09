const client = require("./");

const getAllOrders = async () => {
  try {
    const res = await client.query(`
    SELECT * FROM orders;
    `);
    return res.rows;
  } catch (error) {
    throw error;
  }
};

// const getAllOrdersById= ();
const getAllOrdersById = async (Orderid) => {
  try {
    const res = await client.query(
      `
      SELECT * FROM orders WHERE id = 1$
      `,
      [id]
    );
    return res.rows;
  } catch (error) {
    throw error;
  }
};

// const updateOrder();

// const createOrder();
const createOrder = async () => {
  const res = await client.query(`
    INSERT INTO ORDER
    `);
  return res.rows;
};

// const updateOrder();

// const deleteOrder();

module.exports = {
  getAllOrders,
  getAllOrdersById,
};
