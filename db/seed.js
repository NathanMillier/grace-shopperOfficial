require("dotenv").config();
const client = require("./");

const seedDB = async () => {
  await dropTables();
  await createTables();
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
      "creatorId" INTEGER REFERENCES users(id)
    );

    `);

  console.log("Tables created...");
};

seedDB();
