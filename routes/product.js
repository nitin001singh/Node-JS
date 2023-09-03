const express = require("express");
const productController = require("../controller/product");
const router = express.Router();
router
  .get("/", productController.getAllProducts)
  .get("/ssr", productController.getAllProductsSSR)
  .get("/:id", productController.getProducts)
  .post("/", productController.createProduct)
  .put("/:id", productController.replaceProduct)
  .patch("/:id", productController.updateProduct)
  .delete("/:id", productController.deleteProduct)
  ;


exports.router = router;
