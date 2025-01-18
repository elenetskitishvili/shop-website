import { notFound } from "next/navigation";
import { supabase } from "@/src/lib/supabase";
import { fetchProduct } from "@/src/lib/data-service";
import Link from "next/link";
import Image from "next/image";

interface ProductPageProps {
  params: {
    locale: "en" | "ka";
    productId: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { locale, productId } = await params;
  const product = await fetchProduct(productId);

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
    <div className="max-w-screen-lg mx-auto flex-1 grid grid-cols-2 gap-x-10 items-center justify-items-center mt-24">
      <div>
        <img
          className="w-full h-96 object-contain"
          src={product.image || "/images/products-placeholder.png"}
          alt={product.name}
        />
      </div>
      <div className="flex flex-col gap-6">
        <h3 className="text-xl">
          {locale === "ka" ? product.name : product.name}
        </h3>
        <p className="leading-6 text-base">
          {locale === "ka" ? product.description : product.description}
        </p>
        <span className="text-xl">$ {product.price / 100}</span>
      </div>
    </div>
  );
}
