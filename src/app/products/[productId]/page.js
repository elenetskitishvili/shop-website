import "./product.css";

export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  const products = data.products;
  return products.map((product) => ({
    productId: product.id.toString(),
  }));
}

export default async function Page({ params }) {
  const res = await fetch(`https://dummyjson.com/products/${params.productId}`);
  const product = await res.json();

  return (
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
