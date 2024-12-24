import { NextRequest, NextResponse } from "next/server";
import { fetchProduct } from "@/src/lib/data-service"; // Assuming this fetches your product details
import Stripe from "stripe"; // Import Stripe instance

// Initialize the Stripe instance with your secret key (store this in your environment variables)
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-11-20.acacia",
});

export async function GET(
  request: NextRequest,
  { params }: { params: { productId: string } }
) {
  const { productId } = params;

  try {
    const product = await fetchProduct(productId);

    if (!product) {
      throw new Error("Product not found");
    }

    return NextResponse.json({ product });
  } catch {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }
}

// Add POST method for creating Stripe Checkout session
export async function POST(
  request: NextRequest,
  { params }: { params: { productId: string } }
) {
  const { productId } = params;

  // Fetch product details using your existing method
  const product = await fetchProduct(productId);

  if (!product) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  try {
    // Create a Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd", // Change currency as needed
            product_data: {
              name: product.name,
            },
            unit_amount: product.price, // Product price in cents (e.g., $10 = 1000 cents)
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
    });

    // Return the URL to the frontend for redirecting to Stripe's checkout page
    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe Checkout Session creation failed:", error);
    return NextResponse.json(
      { message: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
