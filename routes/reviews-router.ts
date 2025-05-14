import express from "express";
import * as reviewsController from "../controllers/reviews-controller";

const reviewRouter = express.Router();

reviewRouter.get(
  "/review/:id",
  reviewsController.getReviews
);
reviewRouter.post(
  "/review/",
  reviewsController.createReview
);
reviewRouter.put(
  "/review/:id",
  reviewsController.updateReview
);
reviewRouter.delete(
  "/review/:id",
  reviewsController.deleteReviewById
);
export default reviewRouter;
