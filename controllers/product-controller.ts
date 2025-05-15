import { Request, Response } from "express";
import {
  uploadToCloudinary,
  removeFromCloudinary,
} from "../services/cloudinary";
import {
  Product,
  Review,
  categoryServiceMap,
} from "../models/data-model";
import { AuthRequest } from "../middleware/auth-middleware";
import mongoose from "mongoose";
import { getReviewMockData } from "../utils/MockData";

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

async function getProductsById(
  req: AuthRequest,
  res: Response
): Promise<void> {
  try {
    const { id } = req.params;
    const products = await Product.findById(id);
    res.status(200).json(products);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

async function getCategories(
  req: Request,
  res: Response
): Promise<void> {
  try {
    res.status(200).json(categoryServiceMap);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

async function createProduct(
  req: AuthRequest,
  res: Response
): Promise<void> {
  try {
    let imageUrl = "";
    let imagePublicId = "";
    const {
      name,
      location,
      description,
      category,
      services,
    } = req.body;
    const image = req.file;
    if (image?.path) {
      const result = await uploadToCloudinary(
        image.path,
        "products"
      );
      if (result) {
        imageUrl = result.url;
        imagePublicId = result.public_id;
      }
    }

    const product = await Product.create({
      name,
      location,
      description,
      category,
      services: JSON.parse(services),
      userId: req.userId,
      imageUrl,
      imagePublicId,
    });

    //Adding mock review
    const reviews = getReviewMockData(
      category,
      product._id
    );
    if (reviews) {
      await Review.create(reviews);
    }
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

    if (deleteProduct.imagePublicId) {
      await removeFromCloudinary(
        deleteProduct.imagePublicId
      );
    }

    res.status(200).json({
      message: `Product ${deleteProduct.name} deleted successfully`,
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
    let imageUrl = "";
    let imagePublicId = "";
    const { id } = req.params;
    const {
      name,
      location,
      description,
      category,
      services,
    } = req.body;
    const image = req.file;

    if (image?.path) {
      const result = await uploadToCloudinary(
        image.path,
        "products"
      );
      if (result) {
        imageUrl = result.url;
        imagePublicId = result.public_id;
      }
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        $set: {
          name,
          location,
          description,
          category,
          services: JSON.parse(services),
          imageUrl,
          imagePublicId,
        },
      },
      { new: true }
    );

    if (!updatedProduct) {
      res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(updatedProduct);
  } catch (error: any) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
}

export {
  getProducts,
  getProductsById,
  createProduct,
  deleteProductById,
  updateProduct,
  getCategories,
};
