"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Product = exports.Review = exports.categoryServiceMap = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        lowercase: true,
        index: true,
        minlength: [
            3,
            "Username must be at least 3 characters long",
        ],
        maxlength: [
            30,
            "Username must be at most 30 characters long",
        ],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        match: [
            /.+@.+\..+/,
            "Please enter a valid email address",
        ],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [
            8,
            "Password must be at least 8 characters long",
        ],
    },
}, { timestamps: true });
const reviewSchema = new mongoose_1.default.Schema({
    productId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
        index: true,
    },
    name: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        require: true,
        min: 1,
        max: 5,
    },
    serviceRatings: (Map),
    sentiment: {
        type: String,
        enum: ["positive", "neutral", "negative"],
    },
    createdAt: { type: String, default: Date.now },
});
exports.categoryServiceMap = {
    restaurant: [
        "Dine-in",
        "Cleanliness",
        "Customer Service",
        "Food Quality",
    ],
    retail: [
        "Customer Support",
        "Product Availability",
        "Billing",
        "Staff Behavior",
    ],
    electronics: [
        "Tech Support",
        "Warranty Service",
        "Product Quality",
    ],
    healthcare: [
        "Staff Friendliness",
        "Cleanliness",
        "Wait Time",
        "Doctor Interaction",
    ],
    education: [
        "Teaching Quality",
        "Infrastructure",
        "Communication",
        "Support Services",
    ],
};
const productSchema = new mongoose_1.default.Schema({
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true,
    },
    category: {
        type: String,
        enum: Object.keys(exports.categoryServiceMap),
        required: true,
    },
    name: {
        type: String,
        require: true,
    },
    imageUrl: {
        type: String,
        required: false
    },
    imagePublicId: { type: String, default: null },
    location: { type: String },
    description: { type: String },
    services: [{ type: String }],
}, { timestamps: true });
productSchema.pre("save", function (next) {
    const product = this;
    if (!product.services || product.services.length === 0) {
        product.services =
            exports.categoryServiceMap[product.category] || [];
    }
    next();
});
const Product = mongoose_1.default.model("Product", productSchema);
exports.Product = Product;
const Review = mongoose_1.default.model("Review", reviewSchema);
exports.Review = Review;
const User = mongoose_1.default.model("User", userSchema);
exports.User = User;
