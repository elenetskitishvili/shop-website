import Link from "next/link";

function ProductCard({ product, locale }) {
  return (
    <li className="flex flex-col justify-between h-full bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300 ease-in-out hover:shadow-md dark:bg-zinc-900">
      <img
        className="w-full h-96 object-contain"
        src={product.img}
        alt={product.title_en}
      />
      <div className="flex flex-col grow gap-7 py-10 px-14">
        <h3 className="heading-tertiary">{product.title_en}</h3>
        <p className="text-2xl mb-auto">{product.description_en}</p>
        <span>$ {product.price}</span>
        <Link
          href={`/${locale}/products/${product.id}`}
          className="inline-block text-2xl py-5 px-10 self-start  bg-emerald-500 visited:bg-emerald-500 transition-all duration-300 ease-in-out mt-auto rounded-xl text-white hover:bg-emerald-600 active:bg-emerald-600 dark:bg-emerald-800  dark:hover:bg-emerald-700"
        >
          Product Details
        </Link>
      </div>
    </li>
  );
}

export default ProductCard;
