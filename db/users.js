const bcrypt = require("bcrypt");
const client = require("./index");

const createUser = async ({ email, password, isAdmin = false }) => {
  try {
    const hashPassword = await bcrypt.hash(password, 10);

    const response = await client.query(
      `
        INSERT INTO users (email, password, "isAdmin") VALUES ($1, $2, $3)
        RETURNING *;
        `,
      [email, hashPassword, isAdmin]
    );

    delete response.rows[0].password;

    return response.rows[0];
  } catch (err) {
    throw { name: "signupError", message: "User already exists" };
  }
};

const getUserById = async (userId) => {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
        SELECT id, email, "isAdmin"
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
        WHERE email = $1;
    `,
      [email]
    );
    if (!user.rows.length) {
      return { name: "noUser", message: "User does not exists" };
    } else {
      const hashPassword = user.rows[0].password;
      const passwordsMatch = await bcrypt.compare(password, hashPassword);
      if (passwordsMatch) {
        delete user.rows[0].password;
        return user.rows[0];
      } else {
        return { name: "loginError", message: "Incorrect credentials" };
      }
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

const getallUsers = async () => {
  try {
    const user = await client.query(`SELECT id,email FROM users;`);

    return user.rows;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createUser,
  getUser,
  getUserById,
  getUserByEmail,
  getallUsers,
};
