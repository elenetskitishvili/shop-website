import ProductCard from "../../../components/ProductCard";
import { supabase } from "../../../lib/supabase";

export const metadata = {
  title: "Products",
};

const fetchProducts = async function () {
  try {
    const { data: caudalie, error } = await supabase
      .from("caudalie")
      .select("*");
    if (error) {
      throw new Error(`Error fetching products: ${error.message}`);
    }
    return caudalie;
  } catch (err) {
    console.error(err.message);
    return [];
  }
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
