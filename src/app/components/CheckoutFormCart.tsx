// "use client";

// import React, { useState } from "react";
// import { createCheckoutSession } from "../actions/stripe";

// interface CheckoutFormProps {
//   uiMode: "hosted";
//   locale: string;
// }

// export default function CheckoutForm({
//   uiMode,
//   locale,
// }: CheckoutFormProps): JSX.Element {
//   const [loading, setLoading] = useState<boolean>(false);

//   const formAction = async (): Promise<void> => {
//     setLoading(true);

//     const formData = new FormData();
//     formData.append("uiMode", uiMode);
//     formData.append("priceId", "price_1QWjnEDzVRyJ9zCn2ZqfDTWs");
//     formData.append("locale", locale);

//     const { url } = await createCheckoutSession(formData);

//     if (url) {
//       window.location.assign(url);
//     }

//     setLoading(false);
//   };

//   return (
//     <>
//       <button
//         className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
//         onClick={formAction}
//         disabled={loading}
//       >
//         Checkout
//       </button>
//     </>
//   );
// }
"use client";

import React, { useState } from "react";
import { createCheckoutSession } from "../actions/stripe";
import { Product } from "@/src/types/types";

interface CheckoutFormProps {
  uiMode: "hosted";
  locale: string;
  products: Product[];
}

export default function CheckoutFormCart({
  uiMode,
  locale,
  products,
}: CheckoutFormProps): JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);

  const formAction = async (): Promise<void> => {
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("uiMode", uiMode);
      formData.append("locale", locale);
      formData.append("purchaseType", "cart");
      formData.append(
        "lineItems",
        JSON.stringify(
          products.map((product) => ({
            price: product.stripe_price_id,
            quantity: 1, // Replace with dynamic quantity if needed
          }))
        )
      ); // Append `lineItems` as a JSON string

      const { url } = await createCheckoutSession(formData); // Pass the FormData object

      if (url) {
        window.location.assign(url); // Redirect to Stripe Checkout
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        onClick={formAction}
        disabled={loading}
      >
        {loading ? "Processing..." : "Checkout"}
      </button>
    </>
  );
}
