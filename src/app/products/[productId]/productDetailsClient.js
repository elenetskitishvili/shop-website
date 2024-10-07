"use client";
import { useState, useEffect } from "react";
import "./product.css";

function ProductDetails({ params }) {
  const { productId } = params;
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${productId}`
        );
        if (!response.ok) {
          throw new Error("Something went wrong with fetching Products");
        }
        const data = await response.json();
        if (data.Response === "False") {
          throw new Error("Products not found!");
        }
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  return (
    <>
      <div className="product__wrapper">
        <div>
          {product && product.images && (
            <img
              className="product__img--big"
              src={product.images[0]}
              alt={product.title}
            />
          )}
        </div>
        <div className="product__details">
          <h3 className="heading-tertiary">{product.title}</h3>
          <p className="product__description">{product.description}</p>
          <span>$ {product.price}</span>
          <a href={`/products/${product.id}`} className="btn btn-cta">
            Product Details
          </a>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
