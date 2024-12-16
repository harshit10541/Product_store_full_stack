import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import Product from "./models/product.model.js";
import productRoutes from "./routes/product.route.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("server is ready");
});

app.use("/products", productRoutes);

console.log(process.env.MONGO_URI);

app.listen(5000, () => {
  connectDB();
  console.log(`Servser started at 5000`);
});
