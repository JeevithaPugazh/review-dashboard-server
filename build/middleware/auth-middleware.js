"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken")); //used to verify token
//middleware function
const authenticateToken = (req, res, next) => {
    //token extraction
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1]; // Bearer <token>
    if (!token) {
        res.status(401).json({ error: "Token required" });
        return;
    }
    jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            res.status(403).json({ error: "Invalid token" });
            return;
        }
        req.userId = user._id; // add userId to request
        next();
    });
};
exports.authenticateToken = authenticateToken;
