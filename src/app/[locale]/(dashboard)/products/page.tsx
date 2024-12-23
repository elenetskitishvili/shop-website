import ProductCard from "../../../components/ProductCard";
import { supabase } from "../../../../lib/supabase";
import { fetchProducts } from "@/src/lib/data-service";
import Link from "next/link";

export const metadata = {
  title: "Products",
};

interface Product {
  id: number;
  created_at: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  collection: string;
  description_en: string;
  skin_type_en: string;
  concern: string;
  use_en: string;
  description: string;
  title_ka: string;
  skin_type_ka: string;
  use_ka: string;
}

interface ProductsProps {
  params: {
    locale: "en" | "ka";
  };
  searchParams?: Record<string, string | string[] | undefined>; // Optional query parameters
}

export default async function Products({
  params,
  searchParams,
}: ProductsProps) {
  const { locale } = await params;
  const products: Product[] = await fetchProducts();

  return (
    <section className="relative max-w-screen-xl flex flex-col justify-center">
      <button className="absolute right-0 top-0 w-[200px] shadow-lg flex p-2 my-6 text-3xl text-emerald-500 hover:text-emerald-700">
        <Link href={`/${locale}/create-product`} className="w-full">
          Create A Product
        </Link>
      </button>{" "}
      <ul className="mx-auto grid grid-cols-[repeat(auto-fit,minmax(22.5rem,1fr))] gap-20 mt-28 mb-24">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} locale={locale} />
        ))}
      </ul>
    </section>
  );
}
