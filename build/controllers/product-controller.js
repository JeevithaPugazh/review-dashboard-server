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
exports.getProducts = getProducts;
exports.getProductsById = getProductsById;
exports.createProduct = createProduct;
exports.deleteProductById = deleteProductById;
exports.updateProduct = updateProduct;
exports.getCategories = getCategories;
const cloudinary_1 = require("../services/cloudinary");
const data_model_1 = require("../models/data-model");
const mongoose_1 = __importDefault(require("mongoose"));
function getProducts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!req.userId) {
                res.redirect("/login");
                return;
            }
            const products = yield data_model_1.Product.find({
                userId: req.userId,
            });
            res.status(200).json(products);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    });
}
function getProductsById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const products = yield data_model_1.Product.findById(id);
            res.status(200).json(products);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    });
}
function getCategories(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            res.status(200).json(data_model_1.categoryServiceMap);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    });
}
function createProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let imageUrl = "";
            let imagePublicId = "";
            const { name, location, description, category, services } = req.body;
            const image = req.file;
            if (image === null || image === void 0 ? void 0 : image.path) {
                const result = yield (0, cloudinary_1.uploadToCloudinary)(image.path, "products");
                if (result) {
                    imageUrl = result.url;
                    imagePublicId = result.public_id;
                }
            }
            const product = yield data_model_1.Product.create({
                name,
                location,
                description,
                category,
                services: JSON.parse(services),
                userId: req.userId,
                imageUrl,
                imagePublicId,
            });
            res.status(201).json(product);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    });
}
function deleteProductById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
                res
                    .status(400)
                    .json({ error: "Invalid user ID format" });
                return;
            }
            const deleteProduct = yield data_model_1.Product.findByIdAndDelete(id);
            if (!deleteProduct) {
                res.status(404).json({ error: "Product not found" });
                return;
            }
            if (deleteProduct.imagePublicId) {
                yield (0, cloudinary_1.removeFromCloudinary)(deleteProduct.imagePublicId);
            }
            res.status(200).json({
                message: `Product ${deleteProduct.name} deleted successfully`,
            });
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    });
}
function updateProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let imageUrl = "";
            let imagePublicId = "";
            const { id } = req.params;
            const { name, location, description, category, services } = req.body;
            const image = req.file;
            if (image === null || image === void 0 ? void 0 : image.path) {
                const result = yield (0, cloudinary_1.uploadToCloudinary)(image.path, "products");
                if (result) {
                    imageUrl = result.url;
                    imagePublicId = result.public_id;
                }
            }
            const updatedProduct = yield data_model_1.Product.findByIdAndUpdate(id, {
                $set: {
                    name,
                    location,
                    description,
                    category,
                    services: JSON.parse(services),
                    imageUrl,
                    imagePublicId,
                },
            }, { new: true });
            if (!updatedProduct) {
                res.status(404).json({ error: "Product not found" });
            }
            res.status(200).json(updatedProduct);
        }
        catch (error) {
            console.log(error);
            res.status(400).json({ error: error.message });
        }
    });
}
