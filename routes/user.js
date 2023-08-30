const express = require("express");
const userController = require("../controller/user");
const router = express.Router();
router
  .get("/", userController.getAllProducts)
  .get("/:id", userController.getProducts)
  .post("/", userController.createProduct)
  .put("/:id", userController.replaceProduct)
  .patch("/:id", userController.updateProduct)
  .delete("/:id", userController.deleteProduct);


exports.router = router;
