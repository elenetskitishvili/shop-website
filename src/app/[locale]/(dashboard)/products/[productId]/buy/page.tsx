// BuyNowPage.tsx
import { fetchProduct } from "@/src/lib/data-service";
import { ProductClient } from "@/src/app/components/ProductClient";

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
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} className="product-image" />
      <p>${(product.price / 100).toFixed(2)}</p>

      {/* Pass the productId to ProductClient */}
      <ProductClient productId={productId} />
    </div>
  );
}
