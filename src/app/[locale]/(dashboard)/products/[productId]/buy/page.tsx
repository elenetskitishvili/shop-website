// src/app/[locale]/(dashboard)/products/[productId]/buy/page.tsx
import { fetchProduct } from "@/src/lib/data-service";
import BuyNowButton from "@/src/app/components/BuyNowButton";

export async function generateMetadata({
  params,
}: {
  params: { productId: string };
}) {
  const product = await fetchProduct(params.productId);

  if (!product) {
    return {
      title: "Product not found",
    };
  }

  return {
    title: `Buy ${product.name}`,
  };
}

export default async function BuyPage({
  params,
}: {
  params: { productId: string };
}) {
  const product = await fetchProduct(params.productId);

  if (!product) {
    return <div>Product not found</div>; // Or another fallback UI
  }

  return (
    <section className="product-buy-page">
      <h1>Buy {product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price / 100}</p>

      {/* Using the client-side button component */}
      <BuyNowButton productId={product.id.toString()} />
    </section>
  );
}
