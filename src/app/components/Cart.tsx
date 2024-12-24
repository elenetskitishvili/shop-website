import CartSvg from "@/public/svgs/CartSvg";
import { Link } from "@/src/i18n/routing";
import React from "react";

export default function Cart() {
  return (
    <Link href={`/cart`} className="relative inline-block">
      <span className="absolute -top-1 -right-1 flex items-center justify-center font-semibold text-sm bg-red-600 rounded-full w-6 h-6 text-white">
        0
      </span>

      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition">
        <CartSvg className="w-10 h-10 text-gray-700" />
      </div>
    </Link>
  );
}
