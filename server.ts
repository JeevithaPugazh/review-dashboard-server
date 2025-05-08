import express from "express";
import { config } from "dotenv";
config();
import connectDB from "./config/database";

connectDB();

const app = express();
app.use(express.json());

app.listen(5000, () =>
  console.log("Server running on port 5000")
);
