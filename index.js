require("dotenv").config();
const express = require("express");
const apiRouter = require("./api");
const JWT = require("jsonwebtoken");
const morgan = require("morgan");
let PORT = process.env.PORT || 3001;
const { getUserById } = require("./db/users");
const { getCartByUserId } = require("./db/orders");

const cors = require("cors");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use(async (req, res, next) => {
  if (!req.headers.authorization) {
    return next();
  }
  const auth = req.headers.authorization.split(" ")[1];
  const _user = await JWT.decode(auth, process.env.JWT_SECRET);
  if (!_user) {
    return next();
  }
  const user = await getUserById(_user.id);
  req.user = user;
  req.user.cart = await getCartByUserId(user.id);
  // req.user;
  console.log(user);
  next();
});

app.use("/api", apiRouter);

app.use(express.static("build"));

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});

app.use(({ name, message }, req, res, next) => {
  res.status(400).send({ name, message });
});

app.listen(PORT, () => {
  console.log("Server is up on port: " + PORT);
});
