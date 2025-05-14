import { Request, Response } from "express";
import { Review } from "../models/data-model";
import mongoose from "mongoose";
import { AuthRequest } from "../middleware/auth-middleware";

async function getReviews(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { id: productId } = req.params;
    console.log("Product id ", productId);
    if (productId) {
      const review = await Review.find({ productId });
      res.status(200).json(review);
    } else {
      res.status(501).json({ error: "Product Id missing" });
    }
    const review = await Review.find({});
    res.status(200).json(review);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

async function createReview(
  req: AuthRequest,
  res: Response
): Promise<void> {
  try {
    const review = await Review.create({
      ...req.body,
      userId: req.userId,
    });
    res.status(201).json(review);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

async function deleteReviewById(
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

    const deleteReview = await Review.findByIdAndDelete(id);
    if (!deleteReview) {
      res.status(404).json({ error: "Product not found" });
      return;
    }

    res.status(200).json({
      message: `User ${deleteReview.name} deleted successfully`,
    });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

async function updateReview(
  req: AuthRequest,
  res: Response
): Promise<void> {
  try {
    const { id } = req.params;
    const updatedReview = await Review.findByIdAndUpdate(
      id,
      req.body
    );

    if (!updatedReview) {
      res.status(404).json({ error: "Review not found" });
    }

    res.status(200).json(updatedReview);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export {
  getReviews,
  createReview,
  deleteReviewById,
  updateReview,
};
