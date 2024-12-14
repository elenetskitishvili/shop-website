import Link from "next/link";

function ProductCard({ product, locale }) {
  return (
    <li>
      <Link
        href={`/${locale}/products/${product.id}`}
        className="flex flex-col  bg-zinc-50  transition-all duration-300 ease-in-out  dark:bg-zinc-900"
      >
        <img
          className="w-full h-[30rem] object-cover"
          src={product.img}
          alt={product.title_en}
        />
        <div className="flex flex-col h-64 justify-between gap-6 py-10 px-5 text-[1.6rem]">
          <h4 className="">
            {locale === "ka" ? product.title_ka : product.title_en}
          </h4>
          <div className="">
            <span className="block mb-2">$ {product.price}</span>
            <button className="inline-block text-2xl py-4 px-8 self-start border border-solid  border-purple-950 visited:bg-purple-950 transition-all duration-300 ease-in-out mt-auto rounded-md text-purple-950 hover:border-purple-800 hover:text-purple-800 active:border-purple-800 dark:border-purple-200  dark:text-purple-200 dark:hover:border-purple-300 dark:hover:text-purple-300">
              {locale === "ka" ? "კალათაში დამატება" : "Add to cart"}
            </button>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default ProductCard;
