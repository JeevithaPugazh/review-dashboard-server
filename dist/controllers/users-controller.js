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
exports.getUsers = getUsers;
exports.createUser = createUser;
exports.deleteUserById = deleteUserById;
exports.updateUser = updateUser;
const mongoose_1 = __importDefault(require("mongoose"));
const data_model_1 = require("../models/data-model");
function getUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield data_model_1.User.find({});
            res.status(200).json(users);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    });
}
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield data_model_1.User.create(req.body);
            res.status(201).json(users);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    });
}
function deleteUserById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
                res
                    .status(400)
                    .json({ error: "Invalid user ID format" });
                return;
            }
            const deleteUser = yield data_model_1.User.findByIdAndDelete(id);
            if (!deleteUser) {
                res.status(404).json({ error: "User not found" });
                return;
            }
            res.status(200).json({
                message: `User ${deleteUser.username} deleted successfully`,
            });
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    });
}
function updateUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const updatedUser = yield data_model_1.User.findByIdAndUpdate(id, req.body);
            if (!updatedUser) {
                res.status(404).json({ error: "User not found" });
            }
            res.status(200).json(updatedUser);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    });
}
