import { Link } from "@/src/i18n/routing";
import { Product } from "@/src/types/types";
import { addToCartHandler } from "../actions/addToCart";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <li className="flex flex-col bg-zinc-50 transition-all duration-300 ease-in-out dark:bg-zinc-900 ">
      <Link
        href={`/products/${product.id}`}
        className="block w-full"
        data-cy="product-card"
      >
        <img
          className="w-full h-72 object-cover"
          src={product.image || "/images/products-placeholder.png"}
          alt={product.name}
        />
      </Link>
      <div className="flex flex-col h-42 justify-between gap-6 py-10 px-5 text-base">
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
                className="inline-block text-lg py-2 px-4 self-start border border-solid border-green-600 bg-green-600 text-white rounded-md transition-all duration-300 ease-in-out mt-auto hover:bg-green-700 hover:border-green-700 focus:ring-4 focus:ring-green-500 active:bg-green-800  dark:border-green-500 dark:bg-green-500 dark:text-green-200 dark:hover:bg-green-600 dark:focus:ring-green-300"
                data-cy="add-to-cart-button"
              >
                Add to cart
              </button>
            </form>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ProductCard;
