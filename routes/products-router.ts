import express from "express";
import multer from "multer";
import * as productController from "../controllers/product-controller";

import { authenticateToken } from "../middleware/auth-middleware";


const upload = multer({ dest: "uploads/" });
const productRouter = express.Router();

productRouter.get(
  "/product/categories/",
  productController.getCategories
);
productRouter.get(
  "/product/",
  authenticateToken,
  productController.getProducts
);
productRouter.get(
  "/product/:id",
  authenticateToken,
  productController.getProductsById
);
productRouter.post(
  "/product/",
  authenticateToken,
  upload.single("image"),
  productController.createProduct
);
productRouter.put(
  "/product/:id",
  authenticateToken,
  upload.single("image"),
  productController.updateProduct
);
productRouter.delete(
  "/product/:id",
  authenticateToken,
  productController.deleteProductById
);
export default productRouter;
