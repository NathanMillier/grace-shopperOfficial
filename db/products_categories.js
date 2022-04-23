const client = require("./index");

const getProductsByCategory = async ({ categoryId }) => {
  try {
    const {
      rows: [products_categories],
    } = await client.query(
      `
    SELECT * FROM products 
    JOIN products_categories ON products.id = products_categories."productId"
    WHERE products_categories."categoryId" = $1;

    `,
      [categoryId]
    );
  } catch (error) {
    throw error;
  }
}; //incomplete -Wells

const addProductToCategory = async ({ categoryId, productId }) => {
  try {
    const {
      rows: [products_categories],
    } = await client.query(
      `
    INSERT INTO products_categories ( "categoryId", "productId")
    VALUES ($1, $2)
    ON CONFLICT ("categoryId", "productId") DO NOTHING
    RETURNING *;
      `,
      [categoryId, productId]
    );
  } catch (error) {
    throw error;
  }
};

const deleteProductFromCategory = async ({ categoryId, productId }) => {
  try {
    const {
      rows: [products_categories],
    } = await client.query(
      `DELETE FROM product_categories ("categoryId", "productId")
      VALUES ($1, $2)
      ON CONFLICT ("categoryId", "productId") DO NOTHING
      RETURNING *;
      `,
      [categoryId, productId]
    );
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addProductToCategory,
  getProductsByCategory,
  deleteProductFromCategory,
};
