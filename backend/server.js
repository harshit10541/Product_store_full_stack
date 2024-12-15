import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
    res.send("server is ready");
})

app.post("/products", async (req, res) => {
    const product = req.body;
    if (!product.name || !product.price || !product.image){
        return res.status(400).json({success: false, message: "Please provide all fields"});
    }
    const newProduct = new Product(product)
    try{
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct})
    }catch(error){
        res.status(500).json({success: false, message: "Server Error"});
    }
});

app.delete("/products/:id", async(req, res) => {
    
})


console.log(process.env.MONGO_URI);

app.listen(5000, () => {
    connectDB();
  console.log(`Server started at 5000`);
});

//MONGO_URI='mongodb+srv://harshit10541:xom11TVDQ2twhxpZ@cluster0.g8u8j.mongodb.net/travel_agency?retryWrites=true&w=majority&appName=Cluster0'
