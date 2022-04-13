const express = require("express");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");

const { createUser, getUser } = require("../db/users");

userRouter.use((req, res, next) => {
  console.log("A request is being made to /users...");
  next();
});

userRouter.post("/register", async (req, res, next) => {
  try {
    if (req.body.password.length < 8) {
      throw new Error("Password is too short, must be at least 8 characters");
    }
    const user = await createUser(req.body);
    // console.log(user);
    res.send({ user });
  } catch (error) {
    res.status(400).send({ error });
  }
});

userRouter.post("/login", async (req, res) => {
  const user = await getUser(req.body);
  try {
    if (!user) {
      throw new Error("Incorrect login");
    }
    const token = jwt.sign(user, process.env.JWT_SECRET);
    res.send({ token });
  } catch (error) {
    throw error;
  }
});

userRouter.get("/me", async (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: "no user" });
  }
  res.send(req.user);
});

module.exports = userRouter;
