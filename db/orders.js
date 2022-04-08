const client = require("./");

const getAllOrders = async () => {
  const res = await client.query(`
    SELECT * FROM orders;
    `);
  return res.rows;
};

// const getAllOrdersById= ();


// const updateOrder();

// const createOrder();


// const updateOrder();


// const deleteOrder();

module.exports = {
  getAllOrders,
};
