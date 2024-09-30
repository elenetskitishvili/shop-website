import React from "react";
import "./ProductCard.css";

function ProductCard({ productObj }) {
  return (
    <li className="product">
      <img
        className="product__img"
        src={productObj.image}
        alt={productObj.name}
      />
      <div className="product__details">
        <h3 className="heading-tertiary">{productObj.name}</h3>
        <p className="product__description">{productObj.description}</p>
        <a href="/" className="btn btn-cta">
          Add to Cart
        </a>
      </div>
    </li>
  );
}

export default ProductCard;
