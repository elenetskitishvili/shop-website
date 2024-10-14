"use client";
import { useEffect, useState } from "react";
import "./product-details.css";

export default function ProductPage({ params }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/${params.productId}`
        );
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError("Failed to fetch product.");
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [params.productId]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!product) {
    return <div className="error">Product not found</div>;
  }

  return (
    <div className="product__wrapper">
      <div>
        {product.images && (
          <img
            className="product__img--big"
            src={product.images[0]}
            alt={product.title}
          />
        )}
      </div>
      <div className="product-details">
        <h3 className="heading-tertiary">{product.title}</h3>
        <p className="product__description">{product.description}</p>
        <span className="product__price">$ {product.price}</span>
        <a href={`/products/${product.id}`} className="btn btn-cta">
          Add to Cart
        </a>
      </div>
    </div>
  );
}
