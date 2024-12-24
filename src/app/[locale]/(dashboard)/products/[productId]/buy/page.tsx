import { fetchProduct } from "@/src/lib/data-service";
import { ProductClient } from "@/src/app/components/ProductClient";
import "./page.css";

type Params = {
  productId: string;
};

export default async function BuyNowPage({ params }: { params: Params }) {
  const productId = params.productId;

  const product = await fetchProduct(productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="buy-now-container">
      <div className="buy-now-left">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="buy-now-right">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p className="price">${(product.price / 100).toFixed(2)}</p>
        <div className="buy-button">
          <ProductClient productId={productId} />
        </div>
      </div>
    </div>
  );
}
