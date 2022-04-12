const express = require("express");
const productRouter = require("./productRouter");

const userRouter = require("./userRouter");

const categoriesRouter = require("./categoriesRouter");

const apiRouter = express.Router();

apiRouter.use("/products", productRouter);
apiRouter.use("/user", userRouter);

apiRouter.use("/categories", categoriesRouter);

apiRouter.get("/", (req, res) => {
  res.send("api router working");
});

module.exports = apiRouter;
