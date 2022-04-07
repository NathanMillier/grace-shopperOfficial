const client = require('./client');

const getAllOrders = async () => {
    try {
        const {rows: orders} = await client.query(`
        SELECT orders.*, users.username AS "creatorName"
        FROM ordersJOIN users ON users.id = orders."creatorId";
        
        `);

    }

};

const getAllOrdersById= ();

const updateOrder();

const createOrder();

const deleteOrder();