import Link from "next/link";

function ProductCard({ productsObj }) {
  return (
    <li className="flex flex-col justify-between h-full bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300 ease-in-out hover:shadow-md">
      <img
        className="w-full h-96 object-contain"
        src={productsObj.images[0]}
        alt={productsObj.title}
      />
      <div className="flex flex-col grow gap-7 py-10 px-14">
        <h3 className="heading-tertiary">{productsObj.title}</h3>
        <p className="text-2xl mb-auto">{productsObj.description}</p>
        <span>$ {productsObj.price}</span>
        <Link
          href={`/products/${productsObj.id}`}
          className="inline-block text-2xl py-5 px-10 self-start  bg-emerald-500 visited:bg-emerald-500 transition-all duration-300 ease-in-out mt-auto rounded-xl text-white hover:bg-emerald-600 active:bg-emerald-600"
        >
          Product Details
        </Link>
      </div>
    </li>
  );
}

export default ProductCard;
