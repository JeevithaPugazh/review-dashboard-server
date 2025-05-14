"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReviews = getReviews;
exports.createReview = createReview;
exports.deleteReviewById = deleteReviewById;
exports.updateReview = updateReview;
const data_model_1 = require("../models/data-model");
const mongoose_1 = __importDefault(require("mongoose"));
function getReviews(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id: productId } = req.params;
            console.log("Product id ", productId);
            if (productId) {
                const review = yield data_model_1.Review.find({ productId });
                res.status(200).json(review);
            }
            else {
                res.status(501).json({ error: "Product Id missing" });
            }
            const review = yield data_model_1.Review.find({});
            res.status(200).json(review);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    });
}
function createReview(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const review = yield data_model_1.Review.create(Object.assign(Object.assign({}, req.body), { userId: req.userId }));
            res.status(201).json(review);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    });
}
function deleteReviewById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
                res
                    .status(400)
                    .json({ error: "Invalid user ID format" });
                return;
            }
            const deleteReview = yield data_model_1.Review.findByIdAndDelete(id);
            if (!deleteReview) {
                res.status(404).json({ error: "Product not found" });
                return;
            }
            res.status(200).json({
                message: `User ${deleteReview.name} deleted successfully`,
            });
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    });
}
function updateReview(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const updatedReview = yield data_model_1.Review.findByIdAndUpdate(id, req.body);
            if (!updatedReview) {
                res.status(404).json({ error: "Review not found" });
            }
            res.status(200).json(updatedReview);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    });
}
