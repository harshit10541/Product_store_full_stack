import React from "react";
import { useProductStore } from "../store/product";

// eslint-disable-next-line react/prop-types
const ProductCard = ({ product }) => {

    const {deleteProduct} = useProductStore();
    const handleDeleteProduct = async(pid) => {
        const {success, message} = await deleteProduct(pid)
        console.log(success);
        console.log(message);
    }
  return (
    <div>
        
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <p>name: {product.name} </p>
        <p>__Price: {product.price}</p>
        <p>__image: {product.image}</p>
        <button onClick={() => {handleDeleteProduct(product._id)}}>Delete</button>
        <button>update</button>
      </div>
    </div>
  );
};

export default ProductCard;
