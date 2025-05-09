import express from "express";
import * as reviewsController from "../controllers/reviews-controller";

import { authenticateToken } from "../middleware/auth-middleware";
const reviewRouter = express.Router();


reviewRouter.get("/review/",authenticateToken, reviewsController.getReviews);
reviewRouter.post("/review/",authenticateToken, reviewsController.createReview);
reviewRouter.put("/review/",authenticateToken, reviewsController.updateReview);
reviewRouter.delete("/review/",authenticateToken, reviewsController.deleteReviewById);
export default reviewRouter