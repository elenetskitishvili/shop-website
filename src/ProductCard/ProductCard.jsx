import React from "react";
import "./ProductCard.css";

function ProductCard({ name, description, image }) {
  return (
    <li className="product">
      <img className="product__img" src={image} alt={name} />
      <div className="product__details">
        <h3 className="product__name">{name}</h3>
        <p className="product__description">{description}</p>
        <a href="#" className="btn-cta">
          Add to Cart
        </a>
      </div>
    </li>
  );
}

export default ProductCard;
