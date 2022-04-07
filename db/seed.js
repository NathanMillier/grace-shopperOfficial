require("dotenv").config();
const client = require("./");

const seedDB = async () => {
  await client.query(`
    DROP TABLE IF EXISTS products;

    CREATE TABLE products (id SERIAL PRIMARY KEY, title VARCHAR(255) UNIQUE);

    INSERT INTO products (title) VALUES ('Acer Nitro 5 Laptop');
    `);

  console.log("DB SEEDED.");
};

const createTables = async () => {
  await client.query(`
    CREATE TABLE products (id SERIAL PRIMARY KEY, title VARCHAR(255) UNIQUE);
    CREATE TABLE users (id SERIAL PRIMARY KEY, username VARCHAR(255) UNIQUE NOT NULL, password VARCHAR(255) NOT NULL)
    
    `);
};

seedDB();
