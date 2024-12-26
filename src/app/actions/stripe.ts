"use server";

import type { Stripe } from "stripe";
import { headers } from "next/headers";
import { stripe } from "@/src/lib/stripe";

export async function createCheckoutSession(
  data: FormData
): Promise<{ client_secret: string | null; url: string | null }> {
  const ui_mode = data.get(
    "uiMode"
  ) as Stripe.Checkout.SessionCreateParams.UiMode;

  const origin: string =
    (await headers()).get("origin") || process.env.NEXT_PUBLIC_SITE_URL!;
  const locale = data.get("locale") || "en";

  const purchaseType = data.get("purchaseType") as "subscription" | "cart";
  if (!["subscription", "cart"].includes(purchaseType)) {
    throw new Error("Invalid purchase type. Must be 'subscription' or 'cart'.");
  }

  const lineItemsRaw = data.get("lineItems");
  let lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];
  let productIds: number[] = [];

  if (purchaseType === "subscription") {
    const priceId = data.get("priceId") as string;

    if (!priceId) {
      throw new Error(
        "Price ID is required for subscriptions but was not provided."
      );
    }

    lineItems = [
      {
        price: priceId,
        quantity: 1,
      },
    ];
  } else if (purchaseType === "cart") {
    if (!lineItemsRaw) {
      throw new Error(
        "Line items are required for cart purchases but were not provided."
      );
    }

    try {
      const parsedLineItems = JSON.parse(lineItemsRaw as string) as {
        price: string;
        quantity: number;
        id: number;
      }[];

      lineItems = parsedLineItems.map((item) => ({
        price: item.price,
        quantity: item.quantity,
      }));

      productIds = parsedLineItems.map((item) => item.id);
    } catch (error) {
      throw new Error("Invalid line items format. Must be a JSON string.");
    }

    if (ui_mode === "embedded") {
      throw new Error("Embedded UI mode is not supported for cart purchases.");
    }
  }

  const mode: Stripe.Checkout.SessionCreateParams.Mode =
    purchaseType === "subscription" ? "subscription" : "payment";

  const successUrl =
    purchaseType === "subscription"
      ? `${origin}/${locale}/pricing/result?session_id={CHECKOUT_SESSION_ID}`
      : `${origin}/${locale}/cart/result?session_id={CHECKOUT_SESSION_ID}`;

  const cancelUrl =
    purchaseType === "subscription"
      ? `${origin}/${locale}/subscribe/cancel`
      : `${origin}/${locale}/cart`;

  const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.create({
      mode,
      payment_method_types: ["card"],
      line_items: lineItems,
      success_url: successUrl,
      cancel_url: cancelUrl,
      ui_mode,
      metadata: { product_ids: productIds.join(",") },
    });

  return {
    client_secret: checkoutSession.client_secret,
    url: checkoutSession.url,
  };
}
