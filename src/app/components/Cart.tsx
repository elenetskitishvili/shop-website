"use client";

import CartSvg from "@/public/svgs/CartSvg";
import { Link } from "@/src/i18n/routing";
import { useEffect, useState } from "react";
import { createClient } from "@/src/utils/supabase/client";

export default function Cart() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const supabase = createClient();

    async function fetchCartData() {
      try {
        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();
        if (userError || !user) {
          console.error("User error:", userError);
          return;
        }

        const { data: existingCart, error: cartError } = await supabase
          .from("user_cart")
          .select("products")
          .eq("user_id", user.id)
          .single();

        if (cartError) {
          console.error("Cart error:", cartError);
          return;
        }

        if (existingCart && existingCart.products) {
          setCartCount(existingCart.products.length);
        } else {
          setCartCount(0);
        }

        // Add realtime subscription for the user_cart table
        const channel = supabase
          .channel("cart-changes")
          .on(
            "postgres_changes",
            {
              event: "*", // Listen for any insert, update, or delete events
              schema: "public",
              table: "user_cart",
              filter: `user_id=eq.${user.id}`,
            },
            (payload) => {
              // Fetch the latest cart data when a change occurs
              fetchCartData();
            }
          )
          .subscribe();

        // Cleanup subscription on unmount
        return () => {
          supabase.removeChannel(channel);
        };
      } catch (error) {
        console.error("An unexpected error occurred:", error);
      }
    }

    fetchCartData();
  }, []);

  return (
    <Link href={`/cart`} className="relative inline-block">
      <span className="absolute -top-1 -right-1 flex items-center justify-center font-semibold text-sm bg-red-600 rounded-full w-6 h-6 text-white">
        {cartCount}
      </span>

      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition">
        <CartSvg className="w-10 h-10 text-gray-700" />
      </div>
    </Link>
  );
}
