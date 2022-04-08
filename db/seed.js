require("dotenv").config();
const client = require("./");

const seedDB = async () => {
  await dropTables();
  await createTables();
  await createInitialOrders();
};

const dropTables = async () => {
  await client.query(`
  
    DROP TABLE IF EXISTS products_categories;
    DROP TABLE IF EXISTS orders;
    DROP TABLE IF EXISTS categories;
    DROP TABLE IF EXISTS products;
    DROP TABLE IF EXISTS users;

  `);
  console.log("Tables dropped...");
};

const createTables = async () => {
  await client.query(`

    CREATE TABLE users(
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL
    );

    CREATE TABLE products(
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) UNIQUE NOT NULL,
      description TEXT NOT NULL,
      stock INTEGER NOT NULL,
      color TEXT NOT NULL,
      price INTEGER NOT NULL
    );

    CREATE TABLE categories(
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) UNIQUE NOT NULL
    );

    CREATE TABLE products_categories(
      id SERIAL PRIMARY KEY,
      "productId" INTEGER REFERENCES products(id),
      "categoryId" INTEGER REFERENCES categories(id)
    );

    CREATE TABLE orders(
      id SERIAL PRIMARY KEY,
      "creatorId" INTEGER REFERENCES users(id),
      "isPublic" BOOLEAN DEFAULT false,
      order VARCHAR(255) UNIQUE NOT NULL,
      color TEXT NOT NULL,
      quantity INTEGER NOT NULL,
      price INTEGER NOT NULL
    );

    `);

  console.log("Tables created...");
};

async function createInitialOrders() {
  try {
    console.log("starting to create orders...");

    const ordersToCreate = [
      {
        creatorId: 2,
        isPublic: false,
        Order: "Air Jordan 1 Retro",
        Color: "Red/White",
        Quantity: 1,
        Price: 160,
      },
      {
        creatorId: 2,
        isPublic: false,
        Order: "Yeezy 350",
        Color: "Cinder",
        Quantity: 1,
        Price: 215,
      },
      {
        creatorId: 2,
        isPublic: false,
        Order: "Air Jordan 4 Retro",
        Color: "Black/Cement",
        Quantity: 1,
        Price: 160,
      },
      {
        creatorId: 2,
        isPublic: false,
        Order: "WaveRunner 5000",
        Color: "Blue/White",
        Quantity: 1,
        Price: 160,
      },
    ];
    const orders = await Proimse.all(
      ordersToCreate.map((orders) => createInitialOrders(orders))
    );
    console.log("Finished creating orders.");
  } catch (err) {
    throw err;
  }
}

seedDB();
