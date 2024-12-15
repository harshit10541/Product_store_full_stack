import express from "express";
import mongoose from "mongoose";
import Product from "../models/product.model.js";
import { deleteProduct, getProducts, saveProduct, updateProduct } from "../controllers/product.controller.js";

export const router = express.Router();



router.post("/", saveProduct)
      .get("/", getProducts)
    .delete("/:id", deleteProduct)


    .put("/:id", updateProduct)

 



export default router;