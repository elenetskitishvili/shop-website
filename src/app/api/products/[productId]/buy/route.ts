import { NextRequest, NextResponse } from "next/server";
import { fetchProduct } from "@/src/lib/data-service"; // Assuming this fetches your product details
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-11-20.acacia",
});

export async function POST(
  request: NextRequest,
  { params }: { params: { productId: string } }
) {
  const { productId } = params;

  // Extract the locale from the request headers or the URL
  const locale = request.nextUrl.locale || "en"; // Default to 'en' if locale is not provided

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

    // Create a Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: product.name,
            },
            unit_amount: product.price,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}/products/result?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}/products/result/canceled`,
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
