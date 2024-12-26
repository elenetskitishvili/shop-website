import { createClient } from "@/src/utils/supabase/client";
import { Product } from "@/src/types/types";

interface RemoveFromCartProps {
  productId: string;
}

export async function removeFromCartHandler({
  productId,
}: RemoveFromCartProps) {
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

  if (cartError) {
    console.error("Error fetching cart:", cartError);
    return { success: false, message: "Failed to fetch cart" };
  }

  const productIdNumber = parseInt(productId, 10);

  const updatedProducts = existingCart.products.filter(
    (item: Product) => item.id !== productIdNumber
  );

  if (updatedProducts.length === existingCart.products.length) {
    return {
      success: false,
      message: "Product not found in the cart",
      products: existingCart.products,
    };
  }

  const { error: updateError } = await supabase
    .from("user_cart")
    .update({ products: updatedProducts })
    .eq("id", existingCart.id);

  if (updateError) {
    console.error("Error updating cart:", updateError);
    return { success: false, message: "Failed to update cart" };
  }

  return {
    success: true,
    message: "Product removed from cart successfully",
    products: updatedProducts,
  };
}
