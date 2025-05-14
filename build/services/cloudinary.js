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
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeFromCloudinary = exports.uploadToCloudinary = void 0;
// cloudinary.ts
const cloudinary_1 = require("cloudinary");
// Set up configuration
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});
// Upload function with proper typing
const uploadToCloudinary = (path, folder) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield cloudinary_1.v2.uploader.upload(path, { folder });
        return { url: data.secure_url, public_id: data.public_id };
    }
    catch (error) {
        console.error("Cloudinary upload error:", error);
    }
});
exports.uploadToCloudinary = uploadToCloudinary;
// Remove function with proper typing
const removeFromCloudinary = (public_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield cloudinary_1.v2.uploader.destroy(public_id);
        console.log("Cloudinary deletion result:", result);
    }
    catch (error) {
        console.error("Cloudinary deletion error:", error);
    }
});
exports.removeFromCloudinary = removeFromCloudinary;
