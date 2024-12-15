import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import Product from "./models/product.model.js";
import productRoutes from "./routes/product.route.js"

dotenv.config();


const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("server is ready");
})

app.use("/api/products", productRoutes)







console.log(process.env.MONGO_URI);

app.listen(5000, () => {
    connectDB();
  console.log(`Servser started at 5000`);
});

//MONGO_URI='mongodb+srv://harshit10541:xom11TVDQ2twhxpZ@cluster0.g8u8j.mongodb.net/travel_agency?retryWrites=true&w=majority&appName=Cluster0'
