const client = require("./index");

const getProducts = async () => {
  const response = await client.query(`
    SELECT * FROM products;
    `);
  return response.rows;
};

getProductById = async (productId) => {
  try {
    const { rows } = await client.query(`
    SELECT id FROM products
    WHERE id = $1;
    `, [productId])
    return rows;
  } catch (error) {
    throw error
  }
}

const createProduct = ({productId, productName, productDescription }) => {
  try {
    const { rows: [products] } = await client.query(`
    INSERT INTO products(productId, productName, productDescripion)
    VALUES ($1, $2, $3)
    RETURNING *;
    `[productId, productName, productDescription]
    );
    return products;
  } catch (error) {
    throw error
  }
}

getProductsByCategory()



module.exports = {
  getProducts,
  createProduct,
  getProductById
};
