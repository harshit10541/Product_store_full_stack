/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useProductStore } from "../store/product";

const ProductCard = ({ product }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const [isOpen, setIsOpen] = useState(false);
  const { deleteProduct, updateProduct } = useProductStore();
  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    console.log(success);
    console.log(message);
  };
  const handleUpdateProduct = async (pid, updatedProduct) => {
    const { success, message } = await updateProduct(pid, updatedProduct);
    setIsOpen(false);
    console.log(success);
    console.log(message);
  };
  return (
    <>
      <div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p>name: {product.name} </p>
          <p>__Price: {product.price}</p>
          <p>__image: {product.image}</p>
          <button
            onClick={() => {
              handleDeleteProduct(product._id);
            }}
          >
            Delete
          </button>
          <button
            onClick={() => {
              setIsOpen(true);
            }}
          >
            update
          </button>
        </div>
      </div>
      {isOpen && (
        <div>
          <h2>Update Product</h2>
          <input
            type="text"
            name="name"
            value={updatedProduct.name}
            onChange={(e) =>
              setUpdatedProduct({ ...updatedProduct, name: e.target.value })
            }
            placeholder="name"
          />
          <input
            type="number"
            name="price"
            value={updatedProduct.price}
            onChange={(e) =>
              setUpdatedProduct({ ...updatedProduct, price: e.target.value })
            }
            placeholder="price"
          />
          <input
            type="text"
            name="image"
            value={updatedProduct.image}
            onChange={(e) =>
              setUpdatedProduct({ ...updatedProduct, image: e.target.value })
            }
            placeholder="image"
          />
          <button
            onClick={() => {
              handleUpdateProduct(product._id, updatedProduct);
            }}
          >
            Submit
          </button>
          <button onClick = {() => {
            setIsOpen(false);
          }} >Close</button>
        </div>
      )}
    </>
  );
};

export default ProductCard;
