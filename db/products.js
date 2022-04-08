const client = require("./");

const getProducts = async () => {
  const response = await client.query(`
    SELECT * FROM products;
    `);
  return response.rows;
};

getProductsById = async (productId) => {
  const response = await client.query(`
  SELECT * FROM products WHERE id =$1;`)
  return response.rows;
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
};
