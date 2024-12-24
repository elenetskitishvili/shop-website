import Link from "next/link";
import { Product } from "@/src/types/types";

interface ProductCardProps {
  product: Product;
  locale: "en" | "ka";
}

function ProductCard({ product, locale }: ProductCardProps) {
  return (
    <li className="flex flex-col bg-zinc-50 transition-all duration-300 ease-in-out dark:bg-zinc-900">
      <Link href={`/${locale}/products/${product.id}`} className="block w-full">
        <img
          className="w-full h-[30rem] object-cover"
          src={product.image || "/images/products-placeholder.png"}
          alt={product.name}
        />
      </Link>
      <div className="flex flex-col h-64 justify-between gap-6 py-10 px-5 text-[1.6rem]">
        <h4>{locale === "ka" ? product.name : product.name}</h4>
        <div>
          <span className="block mb-2">$ {product.price / 100}</span>
          <div className="flex gap-4">
            <button
              // href={`/${locale}/products/${product.id}`}
              className="inline-block text-2xl py-4 px-8 self-start border border-solid border-purple-950 visited:bg-purple-950 transition-all duration-300 ease-in-out mt-auto rounded-md text-purple-950 hover:border-purple-800 hover:text-purple-800 active:border-purple-800 dark:border-purple-200 dark:text-purple-200 dark:hover:border-purple-300 dark:hover:text-purple-300"
            >
              {locale === "ka" ? "კალათაში დამატება" : "Add to cart"}
            </button>
            <Link
              href={`/${locale}/products/${product.id}/buy`}
              className="inline-block text-2xl py-4 px-8 self-start border border-solid border-purple-950 visited:bg-purple-950 transition-all duration-300 ease-in-out mt-auto rounded-md text-purple-950 hover:border-purple-800 hover:text-purple-800 active:border-purple-800 dark:border-purple-200 dark:text-purple-200 dark:hover:border-purple-300 dark:hover:text-purple-300"
            >
              {locale === "ka" ? "იყიდე ახლა" : "Buy Now"}
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ProductCard;
