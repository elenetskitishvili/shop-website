import "./product-details.css";

async function fetchProduct(productId) {
  const res = await fetch(`https://dummyjson.com/products/${productId}`);
  return res.json();
}

export default async function ProductPage({ params }) {
  const { productId } = params;
  const product = await fetchProduct(productId);

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
