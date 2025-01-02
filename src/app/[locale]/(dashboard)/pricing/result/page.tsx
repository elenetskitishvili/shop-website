import type { Stripe } from "stripe";

import PrintObject from "@/src/app/components/PrintObject";
import { stripe } from "@/src/lib/stripe";

export default async function ResultPage(props: {
  searchParams: Promise<{ session_id: string }>;
}): Promise<JSX.Element> {
  const searchParams = await props.searchParams;
  if (!searchParams.session_id)
    throw new Error("Please provide a valid session_id (`cs_test_...`)");

  const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.retrieve(searchParams.session_id, {
      expand: ["line_items", "payment_intent"],
    });

  const paymentIntent =
    checkoutSession.payment_intent as Stripe.PaymentIntent | null;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-base">
      <div className=" p-8 rounded-lg text-center">
        <h1 className="text-2xl font-bold text-purple-700 mb-2">
          🎉 Congratulations!
        </h1>
        <p className="text-2xl text-gray-700 mb-4">
          You are now a <span className="font-semibold">Premium Member</span>.
        </p>
        <p className="text-gray-600 mb-4">
          Enjoy exclusive benefits, discounts, and premium services.
        </p>
        <a
          href="/"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-5 rounded-full transition-all"
        >
          Go to the homepage
        </a>
      </div>
    </div>
  );
}
