import express from "express";
import { config } from "dotenv";
config();
import connectDB from "./config/database";
import userRouter from "./routes/users-router";
import productRouter from "./routes/products-router";
import reviewRouter from "./routes/reviews-router";
connectDB();
const app = express();
//conditionally assigning a value to port
const PORT = process.env.PORT || 3001;

//to get req.body whenever data submitted from forms
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", userRouter);
app.use("/api", productRouter);
app.use("/api", reviewRouter);
app.get("/", (req, res) => {
  res.send("Welcome to the RevuHub - API");
});

app.listen(PORT, () => {
  console.log(
    `🚀 Server is listening on PORT: http://localhost:${PORT}`
  );
});
