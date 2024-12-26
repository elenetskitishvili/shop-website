import { createClient } from "@/src/utils/supabase/server";
import { Product } from "@/src/types/types";

interface ProductProps {
  product: Product;
}

export async function addToCartHandler({ product }: ProductProps) {
  const supabase = await createClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) {
    console.error("Error fetching user:", userError);
    return { success: false, message: "User not authenticated" };
  }

  if (!user) {
    return { success: false, message: "No user found" };
  }

  const { data: existingCart, error: cartError } = await supabase
    .from("user_cart")
    .select("id, products")
    .eq("user_id", user.id)
    .single();

  if (cartError && cartError.code !== "PGRST116") {
    console.error("Error fetching cart:", cartError);
    return { success: false, message: "Failed to fetch cart" };
  }

  let updatedProducts: Product[] = [];

  if (existingCart) {
    const productExists = existingCart.products.some(
      (item: Product) => item.id === product.id
    );

    if (productExists) {
      return {
        success: false,
        message: "Product is already in the cart",
        products: existingCart.products,
      };
    }

    updatedProducts = [product, ...existingCart.products];

    const { error: updateError } = await supabase
      .from("user_cart")
      .update({ products: updatedProducts })
      .eq("id", existingCart.id);

    if (updateError) {
      console.error("Error updating cart:", updateError);
      return { success: false, message: "Failed to update cart" };
    }
  } else {
    updatedProducts = [product];
    const { error: insertError } = await supabase.from("user_cart").insert([
      {
        user_id: user.id,
        products: updatedProducts,
      },
    ]);

    if (insertError) {
      console.error("Error creating cart:", insertError);
      return { success: false, message: "Failed to create cart" };
    }
  }

  return {
    success: true,
    message: "Product added to cart successfully",
    products: updatedProducts,
  };
}
