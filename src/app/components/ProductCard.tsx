import { Link } from "@/src/i18n/routing";
import { Product } from "@/src/types/types";
import { addToCartHandler } from "../actions/addToCart";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <li className="flex flex-col bg-zinc-50 transition-all duration-300 ease-in-out dark:bg-zinc-900">
      <Link href={`/products/${product.id}`} className="block w-full">
        <img
          className="w-full h-[30rem] object-cover"
          src={product.image || "/images/products-placeholder.png"}
          alt={product.name}
        />
      </Link>
      <div className="flex flex-col h-64 justify-between gap-6 py-10 px-5 text-[1.6rem]">
        <h4>{product.name}</h4>
        <div>
          <span className="block mb-2">$ {product.price / 100}</span>
          <div className="flex gap-4">
            <form>
              <button
                type="submit"
                formAction={async () => {
                  "use server";
                  addToCartHandler({ product });
                }}
                className="inline-block text-2xl py-4 px-8 self-start border border-solid border-purple-950 visited:bg-purple-950 transition-all duration-300 ease-in-out mt-auto rounded-md text-purple-950 hover:border-purple-800 hover:text-purple-800 active:border-purple-800 dark:border-purple-200 dark:text-purple-200 dark:hover:border-purple-300 dark:hover:text-purple-300"
              >
                Add to cart
              </button>
            </form>

            <Link
              href={`/products/${product.id}/buy`}
              className="inline-block text-2xl py-4 px-8 self-start border border-solid border-purple-950 visited:bg-purple-950 transition-all duration-300 ease-in-out mt-auto rounded-md text-purple-950 hover:border-purple-800 hover:text-purple-800 active:border-purple-800 dark:border-purple-200 dark:text-purple-200 dark:hover:border-purple-300 dark:hover:text-purple-300"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ProductCard;
