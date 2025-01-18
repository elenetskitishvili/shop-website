"use client";

import { useEffect, useState } from "react";
import { getCartProducts } from "@/src/app/actions/getCartProducts";
import { removeFromCartHandler } from "@/src/app/actions/removeFromCart";
import { Product } from "@/src/types/types";
import CheckoutFormCart from "@/src/app/components/CheckoutFormCart";
import Image from "next/image";

const CartPage = () => {
  const locale = "en";
  const [products, setProducts] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getCartProducts();
        const fetchedProducts = data.props.products;
        setProducts(fetchedProducts);

        const calculatedTotalPrice = fetchedProducts.reduce(
          (total: number, product: Product) => total + product.price,
          0
        );
        setTotalPrice(calculatedTotalPrice / 100);
      } catch (error) {
        console.error("Failed to fetch cart products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleRemoveFromCart = async (productId: string) => {
    try {
      const result = await removeFromCartHandler({ productId });

      if (result.success) {
        setProducts(result.products);

        const updatedTotalPrice = result.products.reduce(
          (total: number, product: Product) => total + product.price,
          0
        );
        setTotalPrice(updatedTotalPrice / 100);
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center space-x-4 mt-8">
        <div className="w-8 h-8 border-4 border-t-4 border-green-500 border-solid rounded-full animate-spin"></div>
        <p className="text-lg font-semibold text-gray-600">
          Loading your cart...
        </p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center">
        <p className="text-lg font-semibold mt-4 text-gray-500">
          Your cart is empty
        </p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
          alt="Your cart is empty"
          className="mx-auto mb-4 w-1/3"
        />
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Cart</h1>
      <div className="space-y-6">
        {products.map((product: Product) => (
          <div
            key={product.id}
            className="flex justify-between items-center bg-white shadow-md px-4 py-2 rounded-lg"
          >
            <div className="flex items-center space-x-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  {product.name}
                </h3>
                <p className="text-lg font-semibold text-gray-900">
                  ${(product.price / 100).toFixed(2)}
                </p>
              </div>
            </div>
            <button
              onClick={() => handleRemoveFromCart(product.id.toString())}
              className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center bg-gray-50 shadow-md p-6 rounded-lg mt-8">
        <h2 className="text-xl font-semibold text-gray-800">Total</h2>
        <p className="text-2xl font-semibold text-gray-900">
          ${totalPrice.toFixed(2)}
        </p>
      </div>

      <div className="mt-6 flex justify-end">
        <CheckoutFormCart
          uiMode={"hosted"}
          locale={locale}
          products={products}
        />
      </div>
    </div>
  );
};

export default CartPage;
