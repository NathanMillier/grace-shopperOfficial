const client = require("./index");

const getProducts = async () => {
  const response = await client.query(`
    SELECT * FROM products;
    `);
  return response.rows;
};

const getProductById = async ({ productId }) => {
  try {
    const response = await client.query(
      `
    SELECT * FROM products
    WHERE id = $1
    ;
    `,
      [productId]
    );
    return response.rows;
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

const updateProduct = async ({ id, title, description, stock, price }) => {
  try {
    if (id != undefined) {
      if (title) {
        client.query(
          `
          UPDATE products
          SET "title" = $1
          WHERE id = $2;
        `,
          [title, id]
        );
      }
      if (description) {
        client.query(
          `
          UPDATE products
          SET description = $1
          WHERE id = $2;
        `,
          [description, id]
        );
      }
      if (stock) {
        client.query(
          `
          UPDATE products
          SET stock = $1
          WHERE id = $2;
        `,
          [stock, id]
        );
      }
      if (price) {
        client.query(
          `
        UPDATE products
        SET price = $1 
        WHERE id = $2
        `,
          [price, id]
        );
      }
    }

    const response = await client.query(
      `
      SELECT * FROM products
      WHERE id = $1;
    `,
      [id]
    );

    return response.rows;
  } catch (err) {
    throw err;
  }
};

const destroyProduct = async ({ productId }) => {
  try {
    await client.query(
      `
      DELETE FROM products_categories pc
      WHERE pc."productId" = $1;
    `,
      [productId]
    );

    const response = await client.query(
      `
      DELETE FROM products
      WHERE id = $1
      RETURNING *;
    `,
      [productId]
    );

    return response.rows;
  } catch (err) {
    throw err;
  }
};

// getProductsByCategory();

module.exports = {
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
  destroyProduct,
};
