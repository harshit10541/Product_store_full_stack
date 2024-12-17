import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import Product from "./models/product.model.js";
import productRoutes from "./routes/product.route.js";
import cors from "cors";
import path from "path";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());



const __dirname = path.resolve();


app.use("/api/products", productRoutes);

if (process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "/frontend/dist")));  
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  })
}

console.log(process.env.MONGO_URI);

app.listen(5000, () => {
  connectDB();
  console.log(`Servser started at 5000`);
});
