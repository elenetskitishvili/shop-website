"use client";
import { useState, useEffect } from "react";
import "./product.css";

function ProductDetails({ params }) {
  const { productId } = params;
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(productId);
  useEffect(() => {
    setIsLoading(true);

    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong with fetching Products");
        }
        return res.json();
      })
      .then((data) => {
        if (data.Response === "False") {
          throw new Error("Products not found!");
        }

        setProduct(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [productId]);

  return (
    <>
      <div className="product__wrapper">
        {console.log(product.images)}

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
            Add to Cart
          </a>
        </div>
      </div>
    </>
  );
}
export default ProductDetails;
