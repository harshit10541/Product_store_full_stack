import mongoose from "mongoose";
import { router } from "../routes/product.route.js";
import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
    try{
        const products = await Product.find({});
        res.status(200).json({success: true, data: products});

    }catch(error){
        res.status(404).json({success: false, message: "error"})
    }
}

export const deleteProduct = async(req, res) => {
    const {id} = req.params;
    console.log("id: ", id);

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Invalid Product Id"});
    }
    
    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "product deleted"});
    }catch(error){
        res.status(404).json({success: false, message: "product not deleted"});
    }
}

export const updateProduct = async(req, res) => {
    const {id} = req.params;
        const product = req.body;
        if (!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({success: false, message: "Invalid Product Id"});
        }
    try{
        
         updatedProduct = await Product.findByIdAndUpdate(id, product, {new: true});
         res.status(200).json({success: true, data: updatedProduct});

    }catch(error){
        res.status(500).json({success: false, message:"Product not updated"})
    }
}

export const saveProduct = async (req, res) => {
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
}