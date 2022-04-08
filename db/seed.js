require("dotenv").config();
const client = require("./");
const { createUser, getUser, getUserById, getUserByEmail } = require("./users");

const seedDB = async () => {
  await dropTables();
  await createTables();
  await createInitialUsers();
};

const dropTables = async () => {
  console.log("Starting to drop tables");
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
  console.log("Starting to create tables");
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

async function createInitialUsers() {
  console.log("Starting to create users...");
  try {
    const usersToCreate = [
      { email: "albert@gmail.com", password: "bertie99" },
      { email: "sandra@gmail.com", password: "sandra123" },
      { email: "glamgal@hotmail.com", password: "glamgal123" },
    ];
    const users = await Promise.all(usersToCreate.map(createUser));

    console.log("Finished creating users!");
  } catch (error) {
    console.error("Error creating users!");
    throw error;
  }
}

async function createInitialOrders() {
  try {
    console.log("starting to create orders...");

    const ordersToCreate = [
      {
        creatorId: 2,
        isPublic: false,
        order: "Air Jordan 1 Retro",
        color: "Red/White",
        quantity: 1,
        price: 160,
      },
      {
        creatorId: 2,
        isPublic: false,
        order: "Yeezy 350",
        color: "Cinder",
        quantity: 1,
        price: 215,
      },
      {
        creatorId: 2,
        isPublic: false,
        order: "Air Jordan 4 Retro",
        color: "Black/Cement",
        quantity: 1,
        price: 160,
      },
      {
        creatorId: 2,
        isPublic: false,
        order: "WaveRunner 5000",
        color: "Blue/White",
        quantity: 1,
        price: 160,
      },
    ];
    const orders = await Proimse.all(
      ordersToCreate.map((orders) => createOrder(orders))
    );
    console.log("Finished creating orders.");
  } catch (err) {
    throw err;
  }
}

seedDB();
