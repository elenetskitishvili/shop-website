"use server";

import Stripe from "stripe";
import { createClient } from "@/src/utils/supabase/server";

export async function createProduct(formData: FormData) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const supabase = await createClient();

  const name = formData.get("name") as string;
  const price = Number(formData.get("price"));
  const description = formData.get("description") as string;
  const image = formData.get("image") as File | null;

  if (!name) {
    throw new Error("Product name is required.");
  }
  if (!price || isNaN(price) || price <= 0) {
    throw new Error("Valid price is required.");
  }
  if (!description) {
    throw new Error("Product description is required.");
  }
  if (!image) {
    throw new Error("Product image is required.");
  }

  try {
    let imageUrl = null;

    if (image) {
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("product-image")
        .upload(`products/${Date.now()}_${image.name}`, image);

      if (uploadError) {
        throw new Error("Failed to upload image to Supabase.");
      }

      const { data: publicUrlData } = supabase.storage
        .from("product-image")
        .getPublicUrl(uploadData.path);

      imageUrl = publicUrlData.publicUrl;
    }

    const stripeProduct = await stripe.products.create({
      name,
      description,
      images: imageUrl ? [imageUrl] : [],
    });
    const stripePrice = await stripe.prices.create({
      product: stripeProduct.id,
      unit_amount: price,
      currency: "usd",
    });

    const userResponse = await supabase.auth.getUser();
    const userId = userResponse.data.user?.id;

    if (!userId) {
      throw new Error("User not authenticated.");
    }

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
      await stripe.products.del(stripeProduct.id);
      throw new Error("Failed to create product in Supabase.");
    }

    return data;
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
}
