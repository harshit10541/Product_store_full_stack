import React, { useState } from "react";
import { useProductStore } from "../store/product";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const {createProduct} = useProductStore();
  const handleAddProduct = async () => {
    const {success, message} = await createProduct(newProduct);
    console.log("Success:", success);
    console.log("Message:", message);
    setNewProduct({name: "", price:"", image:""});
  };
  return (
    <div>
      <h1>CreatePage</h1>
      <input
        placeholder="product name"
        name="name"
        value={newProduct.name}
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
      />
      <input
        placeholder="product price"
        name="price"
        value={newProduct.price}
        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
      />
      <input
        placeholder="product image"
        name="image"
        value={newProduct.image}
        onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
      />
      <button onClick={handleAddProduct}>Click ME!!</button>
    </div>
  );
};

export default CreatePage;
