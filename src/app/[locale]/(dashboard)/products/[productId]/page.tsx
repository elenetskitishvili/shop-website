import { notFound } from "next/navigation";
import { supabase } from "../../../../../lib/supabase";
import { fetchProduct } from "@/src/lib/data-service";

interface Product {
  id: number;
  created_at: string;
  title_en: string;
  img: string;
  price: number;
  rating: number;
  collection: string;
  description_en: string;
  skin_type_en: string;
  concern: string;
  use_en: string;
  description_ka: string;
  title_ka: string;
  skin_type_ka: string;
  use_ka: string;
}

interface ProductPageProps {
  params: {
    locale: "en" | "ka";
    productId: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { locale, productId } = params;
  const product = await fetchProduct(productId);

  // AI recommended to write this instead of this: const product = await fetchProduct(productId);
  // Fetch the product by ID
  // const product: Product | null = await fetchProduct(productId);
  // Handle invalid product
  // if (!product) {
  //   notFound();
  // }

  return (
    <div className="max-w-screen-lg mx-auto flex-1 grid grid-cols-2 gap-x-10 items-center justify-items-center mt-16">
      <div>
        <img
          className="w-full h-[45rem] object-contain"
          src={product.img}
          alt={product.title_en}
        />
      </div>
      <div className="flex flex-col gap-10">
        <h3 className="text-4xl">
          {locale === "ka" ? product.title_ka : product.title_en}
        </h3>
        <p className="leading-8">
          {locale === "ka" ? product.description_ka : product.description_en}
        </p>
        <span className="text-4xl">$ {product.price}</span>
        <button className="inline-block text-2xl py-4 px-8 self-start border border-solid  border-purple-950 visited:bg-purple-950 transition-all duration-300 ease-in-out mt-auto rounded-md text-purple-950 hover:border-purple-800 hover:text-purple-800 active:border-purple-800 dark:border-purple-200  dark:text-purple-200 dark:hover:border-purple-300 dark:hover:text-purple-300">
          {locale === "ka" ? "კალათაში დამატება" : "Add to cart"}
        </button>
      </div>
    </div>
  );
}
