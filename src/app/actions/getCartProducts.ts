import { createClient } from "@/src/utils/supabase/server";
export async function getCartProducts() {
  const supabase = await createClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return {
      props: {
        products: [],
      },
    };
  }

  const { data: existingCart, error: cartError } = await supabase
    .from("user_cart")
    .select("products")
    .eq("user_id", user.id)
    .single();

  if (cartError) {
    // console.error("Error fetching cart:", cartError);
    return {
      props: {
        products: [],
      },
    };
  }

  if (!existingCart || !existingCart.products) {
    return {
      props: {
        products: [],
      },
    };
  }

  return {
    props: {
      products: existingCart.products,
    },
  };
}
