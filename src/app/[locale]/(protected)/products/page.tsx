import ProductCard from "../../../components/ProductCard";
import { fetchProducts } from "@/src/lib/data-service";
import Link from "next/link";
import { Product } from "@/src/types/types";

export const metadata = {
  title: "Products",
};

interface ProductsProps {
  params: {
    locale: "en" | "ka";
  };
  searchParams?: Record<string, string | string[] | undefined>;
}

export default async function Products({
  params,
  searchParams,
}: ProductsProps) {
  const { locale } = await params;
  const products: Product[] = await fetchProducts();

  return (
    <section className="relative max-w-screen-xl mx-auto flex flex-col justify-center">
      <button className="absolute right-0 top-0 w-[200px] shadow-lg flex items-center justify-center p-2 my-6 text-xl text-white rounded-lg bg-emerald-500 hover:bg-emerald-600">
        <Link
          href={`/${locale}/create-product`}
          className="w-full"
          data-cy="create-product-link"
        >
          Create a product
        </Link>
      </button>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-28 mb-24">
        {products
          .slice()
          .reverse()
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </ul>
    </section>
  );
}
