import { Request, Response } from "express";
import { Product } from "../models/data-model";
import { AuthRequest } from "../middleware/auth-middleware";
import mongoose from "mongoose";

async function getProducts(
  req: AuthRequest,
  res: Response
): Promise<void> {
  try {
    if (!req.userId) {
      res.redirect("/login");
      return;
    }
    const products = await Product.find({
      userId: req.userId,
    });
    res.status(200).json(products);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

async function createProduct(
  req: AuthRequest,
  res: Response
): Promise<void> {
  try {
    const product = await Product.create({
      ...req.body,
      userId: req.userId,
    });
    res.status(201).json(product);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

async function deleteProductById(
  req: AuthRequest,
  res: Response
): Promise<void> {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res
        .status(400)
        .json({ error: "Invalid user ID format" });
      return;
    }

    const deleteProduct = await Product.findByIdAndDelete(
      id
    );
    if (!deleteProduct) {
      res.status(404).json({ error: "Product not found" });
      return;
    }

    res.status(200).json({
      message: `User ${deleteProduct.name} deleted successfully`,
    });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

async function updateProduct(
  req: AuthRequest,
  res: Response
): Promise<void> {
  try {
    const { id } = req.params;
    console.log(id)
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    if (!updatedProduct) {
      res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(updatedProduct);
  } catch (error: any) {
    console.log(error)
    res.status(400).json({ error: error.message });
  }
}

export {
  getProducts,
  createProduct,
  deleteProductById,
  updateProduct,
};
