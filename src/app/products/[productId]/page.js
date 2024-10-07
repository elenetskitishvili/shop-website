import ProductDetailsClient from "./productDetailsClient";

export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  const products = data.products;
  return products.map((product) => ({
    productId: product.id.toString(),
  }));
}

export default function productDetails({ params }) {
  return <ProductDetailsClient params={params} />;
}
