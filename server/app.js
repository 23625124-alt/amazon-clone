import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import productRoutes from "./routes/productRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Amazon Clone Backend Running");
});

export default app;