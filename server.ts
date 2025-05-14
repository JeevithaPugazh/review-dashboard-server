import express from "express";
import { config } from "dotenv";
config();
import connectDB from "./config/database";
import userRouter from "./routes/users-router";
import productRouter from "./routes/products-router";
import reviewRouter from "./routes/reviews-router";
import cors from "cors"
import path = require("path");
// import multer  = require('multer');
// import upload = multer();
connectDB();
const app = express();
//conditionally assigning a value to port
const PORT = process.env.PORT || 3001;

//to get req.body whenever data submitted from forms
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
app.use("/api", userRouter);
app.use("/api", productRouter);

// app.use(upload.array());
app.use("/api", reviewRouter);
app.use("/images",express.static(path.join(__dirname,'public/images')))

app.get("/", (req, res) => {
  res.send("Welcome to the RevuHub - API");
});

app.listen(PORT, () => {
  console.log(
    `🚀 Server is listening on PORT: http://localhost:${PORT}`
  );
});
