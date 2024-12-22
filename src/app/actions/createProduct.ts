"use server";

import Stripe from "stripe";
import { createClient } from "@/src/utils/supabase/server";

export async function createProduct(formData: FormData) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    const supabase = await createClient();

    const name = formData.get("name") as string;
    const price = Number(formData.get("price"));

    if (!name) {
        throw new Error("Product name is required.");
    }
    if (!price || isNaN(price) || price <= 0) {
        throw new Error("Valid price is required.");
    }

    try {
        const stripeProduct = await stripe.products.create({ name });
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
                user_id: userId,
                stripe_product_id: stripeProduct.id,
                stripe_price_id: stripePrice.id,
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
