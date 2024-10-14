import Link from "next/link";
import "./ProductCard.css";

function ProductCard({ productsObj }) {
  return (
    <li className="product">
      <img
        className="product__img"
        src={productsObj.images[0]}
        alt={productsObj.title}
      />
      <div className="product__details">
        <h3 className="heading-tertiary">{productsObj.title}</h3>
        <p className="product__description">{productsObj.description}</p>
        <span>$ {productsObj.price}</span>
        <Link href={`/products/${productsObj.id}`} className="btn btn-cta">
          Product Details
        </Link>
      </div>
    </li>
  );
}

export default ProductCard;
