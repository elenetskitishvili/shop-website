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

  const origin: string = (await headers()).get("origin") as string;

  const locale = data.get("locale") || "en";

  const priceId = data.get("priceId") as string;

  if (!priceId) {
    throw new Error("Price ID is required.");
  }

  const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      ...(ui_mode === "hosted" && {
        success_url: `${origin}/${locale}/pricing/result?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/${locale}/subscribe/cancel`,
      }),
      ...(ui_mode === "embedded" && {
        return_url: `${origin}/${locale}/subscribe/embedded?session_id={CHECKOUT_SESSION_ID}`,
      }),
      ui_mode,
    });

  return {
    client_secret: checkoutSession.client_secret,
    url: checkoutSession.url,
  };
}

export async function createPaymentIntent(
  data: FormData
): Promise<{ client_secret: string }> {
  throw new Error("PaymentIntent is not used for subscriptions.");
}
