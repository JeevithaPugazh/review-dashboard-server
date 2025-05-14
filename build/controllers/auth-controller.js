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
exports.loginUser = loginUser;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const data_model_1 = require("../models/data-model");
function generateToken(user) {
    return jsonwebtoken_1.default.sign(user, process.env.JWT_SECRET, {
        expiresIn: "1h",
    });
}
function loginUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Login route hit", req.body);
        const { email, password } = req.body;
        try {
            const user = yield data_model_1.User.findOne({ email });
            if (!user) {
                res.status(401).json({ error: "Invalid email" });
                return;
            }
            else {
                // If you are storing hashed passwords, use bcrypt.compare
                if (password != user.password) {
                    res.status(401).json({ error: "Invalid password" });
                    return;
                }
                const token = generateToken(user.toObject());
                res.status(200).json({ token, user });
            }
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
}
