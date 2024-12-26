import { createClient } from "@/src/utils/supabase/server";

interface OrderMetadata {
  productId?: string;
  created_at?: string;
  user_id?: string;
  stripe_product_id?: string;
  stripe_price_id?: string;
  description?: string;
  name?: string;
  stripe_purchase_id?: string;
  price: number;
}

export async function createOrderInSupabase(metadata: OrderMetadata) {
  const supabase = await createClient();

  const {
    productId,
    created_at,
    user_id,
    stripe_product_id,
    stripe_price_id,
    description,
    stripe_purchase_id,
    price,
  } = metadata;

  if (!productId || !user_id || !stripe_purchase_id || price === undefined) {
    const missingFields = [];
    if (!productId) missingFields.push("productId");
    if (!user_id) missingFields.push("user_id");
    if (!stripe_purchase_id) missingFields.push("stripe_purchase_id");
    if (price === undefined) missingFields.push("price");
    throw new Error(`Missing required order data: ${missingFields.join(", ")}`);
  }

  try {
    // Log the data to be inserted into Supabase
    console.log("Sending the following order data to Supabase:", {
      product_id: productId,
      user_id,
      stripe_product_id,
      stripe_price_id,
      description,
      created_at,
      stripe_purchase_id,
      price,
    });

    const { data, error } = await supabase
      .from("orders")
      .insert({
        product_id: productId,
        user_id,
        stripe_product_id,
        stripe_price_id,
        description,
        created_at,
        stripe_purchase_id,
        price,
      })
      .single();

    if (error) {
      throw new Error(`Failed to insert order into Supabase: ${error.message}`);
    }

    return data;
  } catch (error) {
    console.error("Error creating order in Supabase:", error);
    throw error;
  }
}
