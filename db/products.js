const client = require("./");

const getProducts = async () => {
  const response = await client.query(`
    SELECT * FROM products;
    `);
  return response.rows;
};

const getProductById = async (productId) => {
  try {
    const { rows } = await client.query(
      `
    SELECT id FROM products
    WHERE id = $1;
    `,
      [productId]
    );
    return rows;
  } catch (error) {
    throw error;
  }
};

const createProduct = async ({
  productName,
  productDescription,
  stock,
  price,
}) => {
  try {
    const {
      rows: [products],
    } = await client.query(
      `
    INSERT INTO products(title, description, stock, price)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
    `,
      [productName, productDescription, stock, price]
    );
    return products;
  } catch (error) {
    throw error;
  }
};

// getProductsByCategory();

module.exports = {
  getProducts,
  createProduct,
  getProductById,
};
