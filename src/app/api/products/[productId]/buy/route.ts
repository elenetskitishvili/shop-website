import { NextRequest, NextResponse } from "next/server";
import { fetchProduct } from "@/src/lib/data-service";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-11-20.acacia",
});

export async function POST(
  request: NextRequest,
  { params }: { params: { productId: string } }
) {
  const { productId } = params;

  const locale = request.nextUrl.locale || "en";

  if (!productId) {
    return NextResponse.json(
      { message: "Product ID is required" },
      { status: 400 }
    );
  }

  try {
    const product = await fetchProduct(productId);
    if (!product) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    const {
      id,
      created_at,
      name,
      price,
      user_id,
      stripe_product_id,
      stripe_price_id,
      description,
      image,
    } = product;

    // Create a Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name,
              description,
              images: [image],
            },
            unit_amount: price,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}/products/result?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}/products/result/canceled`,
      metadata: {
        productId: id,
        created_at,
        user_id,
        stripe_product_id,
        stripe_price_id,
        description,
      },
    });

    return NextResponse.json({ url: session.url }, { status: 200 });
  } catch (error) {
    console.error("Error during checkout session creation:", error);
    return NextResponse.json(
      { message: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
