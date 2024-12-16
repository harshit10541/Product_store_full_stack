import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product.js";
import ProductCard from "../components/ProductCard.jsx";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("products", products);

  return (
    <div>
      <h1> Current Products </h1>
      <div>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <div>
        {products.length === 0 && (
          <>
            <p>No Products found</p>
            <Link to={"/create"}>
              <p>Create a Product</p>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
