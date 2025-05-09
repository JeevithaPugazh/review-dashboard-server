import express from "express";
import * as productController from "../controllers/product-controller";

import { authenticateToken } from "../middleware/auth-middleware";
const productRouter = express.Router();


productRouter.get("/product/",authenticateToken, productController.getProducts);
productRouter.post("/product/",authenticateToken, productController.createProduct);
productRouter.put("/product/",authenticateToken, productController.updateProduct);
productRouter.delete("/product/",authenticateToken, productController.deleteProductById);
export default productRouter