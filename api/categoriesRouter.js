const express = require("express");
const {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  getCategoryById,
} = require("../db/categories");
const { getProductsByCategory } = require("../db/products_categories");

const categoriesRouter = express.Router();

categoriesRouter.use((req, res, next) => {
  console.log("A request is being made to /categories");
  next();
});

categoriesRouter.get("/", async (req, res) => {
  const categories = await getAllCategories();
  res.send({ categories });
});

categoriesRouter.post("/", async (req, res, next) => {
  console.log(req.body);
  try {
    const { id, name } = req.body;
    // if (!req.user.isAdmin) {
    //   next({
    //     name: "missing name",
    //     message: "Please enter username and description",
    //   });
    //   return;
    // }
    const newCategory = await createCategory(req.body);
    res.send(newCategory);
  } catch (err) {
    next(err);
  }
});

categoriesRouter.patch("/:categoryId", async (req, res, next) => {
  const { categoryId: id } = req.params;
  const { name } = req.body;

  const updateFields = { id, name };
  console.log(req.body);
  try {
    const category = await updateCategory(updateFields);
    res.send(category);
  } catch (err) {
    throw err;
  }
});

categoriesRouter.delete("/", async (req, res) => {
  console.log(req.body);
  try {
    const response = await deleteCategory(req.body);
    console.log(response);
    res.send(response);
  } catch (err) {
    throw err;
  }
});

// categoriesRouter.get("/:categoryId/products", async (req, res, next) => {
//   const categories = await getCategoryById({
//     id: req.params.categoryId,
//   });
//   try {
//     res.send(categories);
//   } catch (err) {
//     throw err;
//   }
// });

module.exports = categoriesRouter;
