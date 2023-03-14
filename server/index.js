import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";

const app = express();
dotenv.config();
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongo db");
  } catch (err) {
    console.log("mongoose connection failed", err);
  }
};

// middleware
app.use(express.json());
app.use("/api/auth", authRoute);

app.listen(8000, () => {
  connect();
  console.log("connected to backend");
});
