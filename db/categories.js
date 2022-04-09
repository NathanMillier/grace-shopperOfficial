const client = require("./index");

const getAllCategories = async () => {
  try {
    const res = await client.query(`
    SELECT * FROM categories;
    `);
    return res.rows;
  } catch (error) {
    throw error;
  }
};

const createCategory = async ({ name }) => {
  try {
    const {
      rows: [categories],
    } = await client.query(
      `
      INSERT INTO categories(name)
      VALUES ($1)
      RETURNING *;
      `,
      [name]
    );
    return categories;
  } catch (error) {
    throw error;
  }
};

const updateCategory = async ({ id, name }) => {
  try {
    if (id != undefined) {
      if (name) {
        client.query(
          `UPDATE categories
            SET "name" = $1
            WHERE id = $2;
     `,
          [name, id]
        );
      }
    }
    const res = await client.query(
      `
        SELECT * FROM categories
        WHERE id = $1;
      `,
      [id]
    );
    console.log(res.rows[0]);
    return res.rows;
  } catch (err) {
    throw err;
  }
};

const deleteCategory = async (categoryId) => {
  try {
    await client.query(
      `
        DELETE FROM products_categories pc
        WHERE pc."productId" = $1;
      `,
      [routineId]
    );

    const {
      rows: [deletedCategory],
    } = await client.query(
      `
        DELETE FROM categories c
        WHERE c.id = $1
        RETURNING *;
      `,
      [categoryId]
    );

    return deletedCategory;
  } catch (err) {
    throw err;
  }
};

const getCategoryById = async (categoryId) => {
  try {
    const { rows } = await client.query(
      `SELECT id FROM categories
        WHERE id = $1;
        
        `,
      [categoryId]
    );
    return rows;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  getCategoryById,
};
