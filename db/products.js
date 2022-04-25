const client = require("./index");

const getProducts = async () => {
  const response = await client.query(`
    SELECT * FROM products;
    `);
  return response.rows;
};

const getProductPrice = async ({ productId }) => {
  try {
    const response = await client.query(
      `
      SELECT price FROM products
      WHERE id = $1;
    `,
      [productId]
    );
    return response.rows[0].price;
  } catch (error) {
    throw error;
  }
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

const createProduct = async ({ title, description, imgurl, stock, price }) => {
  try {
    const {
      rows: [products],
    } = await client.query(
      `
    INSERT INTO products(title, description,imgurl, stock, price)
    VALUES ($1, $2, $3, $4,$5)
    RETURNING *;
    `,
      [title, description, imgurl, stock, price]
    );
    return products;
  } catch (error) {
    throw error;
  }
};

const updateProduct = async ({
  id,
  title,
  description,
  imgurl,
  stock,
  price,
}) => {
  try {
    if (id != undefined) {
      if (title) {
        await client.query(
          `
          UPDATE products
          SET "title" = $1
          WHERE id = $2;
        `,
          [title, id]
        );
      }
      if (description) {
        await client.query(
          `
          UPDATE products
          SET description = $1
          WHERE id = $2;
        `,
          [description, id]
        );
      }
      if (stock) {
        await client.query(
          `
          UPDATE products
          SET stock = $1
          WHERE id = $2;
        `,
          [stock, id]
        );
      }
      if (price) {
        await client.query(
          `
        UPDATE products
        SET price = $1 
        WHERE id = $2
        `,
          [price, id]
        );
      }
      if (imgurl) {
        await client.query(
          `UPDATE products
         SET imgurl = $1
          WHERE id = $2`,
          [imgurl, id]
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

    return response;
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
  getProductPrice,
};
