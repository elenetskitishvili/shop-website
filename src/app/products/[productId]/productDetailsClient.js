"use client";
import { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./product.css";

function ProductDetails({ params }) {
  const { productId } = params;
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(productId);
  useEffect(() => {
    setIsLoading(true); // Start loading

    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong with fetching Products");
        }
        return res.json(); // Parse JSON if response is okay
      })
      .then((data) => {
        // Assuming the API returns a boolean response
        if (data.Response === "False") {
          throw new Error("Products not found!");
        }

        setProduct(data); // Set the product data
      })
      .catch((err) => {
        setError(err.message); // Set the error message if an error occurs
      })
      .finally(() => {
        setIsLoading(false); // End loading
      });
  }, [productId]);

  return (
    <>
      <div className="product__wrapper">
        <ProductCard productsObj={product} />
      </div>
    </>
  );
}
export default ProductDetails;
