const client = require("./");

const getAllOrders = async () => {
  const res = await client.query(`
    SELECT * FROM orders;
    `);
  return res.rows;
};

const getAllOrdersById = async () => {
  try {
  } catch (error) {
    throw error;
  }
};

const updateOrder = async () => {
  try {
  } catch (error) {
    throw error;
  }
};

const checkoutOrder = async () => {
  try {
  } catch (error) {
    throw error;
  }
};

const cancelOrder = async () => {
  try {
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllOrders,
};
