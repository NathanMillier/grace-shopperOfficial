const client = require("./");

const getProducts = async () => {
  const response = await client.query(`
    SELECT * FROM products;
    `);
  return response.rows;
};

getProductsById = async () => {
  const response = await client.query(`
  SELECT * FROM products WHERE id =$1;`)
}

const createProduct = () => {
const response = await client.query(`
INSERT INTO products()
`)
}

getProductsByCategory()



module.exports = {
  getProducts,
};
