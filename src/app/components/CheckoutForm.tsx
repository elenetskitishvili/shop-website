"use client";

import React, { useState } from "react";
import { createCheckoutSession } from "../actions/stripe";

interface CheckoutFormProps {
  uiMode: "hosted";
  locale: string;
}

export default function CheckoutForm({
  uiMode,
  locale,
}: CheckoutFormProps): JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);

  const formAction = async (): Promise<void> => {
    setLoading(true);

    const formData = new FormData();
    formData.append("uiMode", uiMode);
    formData.append("priceId", "price_1QWjnEDzVRyJ9zCn2ZqfDTWs");
    formData.append("locale", locale);
    formData.append("purchaseType", "subscription"); // Added purchaseType parameter

    const { url } = await createCheckoutSession(formData);

    if (url) {
      window.location.assign(url);
    }

    setLoading(false);
  };

  return (
    <>
      <button
        className="block bg-purple-800 hover:bg-purple-600 transition-all text-white rounded-full px-10 py-5 mt-10 text-center"
        onClick={formAction}
        disabled={loading}
      >
        Subscribe for $19.99/month
      </button>
    </>
  );
}
