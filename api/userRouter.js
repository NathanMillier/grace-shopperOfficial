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
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    // console.log(user);
    res.send({ user, token });
  } catch (error) {
    res.status(400).send({ error });
  }
});

userRouter.post("/login", async (req, res, next) => {
  const user = await getUser(req.body);
  try {
    if (user.error) {
      res.send(user);
    } else {
      const token = jwt.sign(user, process.env.JWT_SECRET);

      res.send({ token });
    }
  } catch (error) {
    console.log("error");
    next(error);
  }
});

userRouter.get("/me", async (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: "no user" });
  }
  res.send(req.user);
});

module.exports = userRouter;
