import ProductCard from "../../../components/ProductCard";
import { supabase } from "../../../../lib/supabase";
import { fetchProducts } from "@/src/lib/data-service";

export const metadata = {
  title: "Products",
};

export default async function Products({ params, searchParams }) {
  const { locale } = params;
  const products = await fetchProducts();
  return (
    <section>
      <ul className="max-w-screen-xl mx-auto grid grid-cols-[repeat(auto-fit,minmax(22.5rem,1fr))] gap-20 mt-16 mb-24">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} locale={locale} />
        ))}
      </ul>
    </section>
  );
}
