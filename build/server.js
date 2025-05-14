"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const database_1 = __importDefault(require("./config/database"));
const users_router_1 = __importDefault(require("./routes/users-router"));
const products_router_1 = __importDefault(require("./routes/products-router"));
const reviews_router_1 = __importDefault(require("./routes/reviews-router"));
const cors_1 = __importDefault(require("cors"));
const path = require("path");
// import multer  = require('multer');
// import upload = multer();
(0, database_1.default)();
const app = (0, express_1.default)();
//conditionally assigning a value to port
const PORT = process.env.PORT || 3001;
//to get req.body whenever data submitted from forms
var bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api", users_router_1.default);
app.use("/api", products_router_1.default);
// app.use(upload.array());
app.use("/api", reviews_router_1.default);
app.use("/images", express_1.default.static(path.join(__dirname, 'public/images')));
app.get("/", (req, res) => {
    res.send("Welcome to the RevuHub - API");
});
app.listen(PORT, () => {
    console.log(`🚀 Server is listening on PORT: http://localhost:${PORT}`);
});
