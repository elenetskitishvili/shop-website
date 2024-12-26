"use server";

import Stripe from "stripe";
import { createClient } from "@/src/utils/supabase/server";

export async function createProduct(formData: FormData) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const supabase = await createClient();

  const name = formData.get("name") as string;
  const price = Number(formData.get("price")) * 100;
  const description = formData.get("description") as string;
  const image = formData.get("image") as File | null;

  if (!name) throw new Error("Product name is required.");
  if (!price || isNaN(price) || price <= 0)
    throw new Error("Valid price is required.");
  if (!description) throw new Error("Product description is required.");
  if (!image) throw new Error("Valid product image is required.");

  let imageUrl: string | null = null;
  let stripeProduct = null;
  let stripePrice = null;

  try {
    // Upload image to Supabase storage
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("product-image")
      .upload(`products/${Date.now()}_${image.name}`, image);

    if (uploadError) throw new Error("Failed to upload image to Supabase.");

    const { data: publicUrlData } = supabase.storage
      .from("product-image")
      .getPublicUrl(uploadData.path);

    imageUrl = publicUrlData.publicUrl;

    // Create product in Stripe
    stripeProduct = await stripe.products.create({
      name,
      description,
      images: imageUrl ? [imageUrl] : [],
    });

    // Create price in Stripe
    stripePrice = await stripe.prices.create({
      product: stripeProduct.id,
      unit_amount: price,
      currency: "usd",
    });
  } catch (error) {
    console.error("Error during product setup:", error);
    // Clean up Stripe product if created but failed later
    if (stripeProduct) {
      await stripe.products.del(stripeProduct.id);
    }
    throw error; // Rethrow the error to prevent further execution
  }

  try {
    // Get authenticated user
    const userResponse = await supabase.auth.getUser();
    const userId = userResponse.data.user?.id;

    if (!userId) throw new Error("User not authenticated.");

    // Insert product into Supabase
    const { data, error } = await supabase
      .from("products")
      .insert({
        name,
        price,
        description,
        user_id: userId,
        stripe_product_id: stripeProduct.id,
        stripe_price_id: stripePrice.id,
        image: imageUrl || null,
      })
      .single();

    if (error) {
      throw new Error("Failed to create product in Supabase.");
    }

    return data;
  } catch (error) {
    console.error("Error creating product in Supabase:", error);

    // Cleanup Stripe resources on failure
    if (stripeProduct) {
      await stripe.products.del(stripeProduct.id);
    }

    throw error; // Ensure React doesn't proceed
  }
}
