const bcrypt = require("bcrypt");
const client = require("./index");

const createUser = async ({ email, password }) => {
  try {
    const hashPassword = await bcrypt.hash(password, 10);
    const response = await client.query(
      `
        INSERT INTO users (email, password) VALUES ($1, $2)
        RETURNING *;
        `,
      [email, hashPassword]
    );
    delete response.rows[0].password;
    return response.rows[0];
  } catch (err) {
    throw err;
  }
};

const getUserById = async (userId) => {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
        SELECT id, email
        FROM users
        WHERE id = $1
      `,
      [userId]
    );
    return user;
  } catch (error) {
    throw error;
  }
};

const getUser = async ({ email, password }) => {
  try {
    const user = await client.query(
      `
        SELECT * FROM users
        WHERE email = $1
    `,
      [email]
    );
    const hashPassword = user.rows[0].password;
    const passwordsMatch = await bcrypt.compare(password, hashPassword);
    if (passwordsMatch) {
      delete user.rows[0].password;
      return user.rows[0];
    } else {
      return null;
    }
  } catch (error) {
    throw error;
  }
};

const getUserByEmail = async (email) => {
  try {
    const user = await client.query(`SELECT * FROM users WHERE email = $1`, [
      email,
    ]);

    return user.rows[0];
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createUser,
  getUser,
  getUserById,
  getUserByEmail,
};
