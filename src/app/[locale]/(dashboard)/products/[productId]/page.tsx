import { notFound } from "next/navigation";
import { supabase } from "../../../../../lib/supabase";
import { fetchProduct } from "@/src/lib/data-service";
import Link from "next/link";

interface ProductPageProps {
  params: {
    locale: "en" | "ka";
    productId: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { locale, productId } = await params;
  const product = await fetchProduct(productId);

  // AI recommended to write this instead of this: const product = await fetchProduct(productId);
  // Fetch the product by ID
  // const product: Product | null = await fetchProduct(productId);
  // Handle invalid product
  // if (!product) {
  //   notFound();
  // }

  // If the product with the ID was not found in the database.
  if (!product) {
    return (
      <div className="w-full h-full flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="border p-4 shadow-lg text-3xl">
            The Product With This ID Could Not Be Found!{" "}
            <Link className="text-blue-700" href={`/${locale}/products`}>
              Please Go Back To The Products Page!
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-screen-lg mx-auto flex-1 grid grid-cols-2 gap-x-10 items-center justify-items-center mt-16">
      <div>
        <img
          className="w-full h-[45rem] object-contain"
          src={product.image || "/images/products-placeholder.png"}
          alt={product.name}
        />
      </div>
      <div className="flex flex-col gap-10">
        <h3 className="text-4xl">
          {locale === "ka" ? product.name : product.name}
        </h3>
        <p className="leading-8">
          {locale === "ka" ? product.description : product.description}
        </p>
        <span className="text-4xl">$ {product.price}</span>
        <button className="inline-block text-2xl py-4 px-8 self-start border border-solid  border-purple-950 visited:bg-purple-950 transition-all duration-300 ease-in-out mt-auto rounded-md text-purple-950 hover:border-purple-800 hover:text-purple-800 active:border-purple-800 dark:border-purple-200  dark:text-purple-200 dark:hover:border-purple-300 dark:hover:text-purple-300">
          {locale === "ka" ? "კალათაში დამატება" : "Add to cart"}
        </button>
      </div>
    </div>
  );
}
