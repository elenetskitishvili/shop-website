import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
};

export default function IndexPage(): JSX.Element {
  return (
    <div className="max-w-[1100px] mx-auto px-14">
      <div className="grid grid-cols-2 gap-16 my-20 ">
        {/*  PREMIUM */}
        <div className="px-12 py-10 shadow-lg shadow-purple-300 rounded-3xl bg-white">
          <h2 className="font-semibold text-4xl mb-6 text-purple-700">
            Premium Membership
          </h2>
          <p className="mb-4 text-2xl text-purple-600">
            $19.99/month or $199/year (save 20% with annual subscription)
          </p>
          <ul className="flex flex-col gap-5 list-disc">
            <li>
              <span className="font-semibold text-purple-950">
                Exclusive Discounts:
              </span>
              <span>
                Up to 20-30% off hotels, restaurants, spas, gyms, and select
                events.
              </span>
            </li>
            <li>
              <span className="font-semibold text-purple-950">
                Member - Only Events:
              </span>
              <span>Invitations to exclusive events or experiences.</span>
            </li>

            <li>
              <span className="font-semibold text-purple-950">
                Monthly Freebies:
              </span>
              <span>
                Access to free spa treatments, gym passes, or virtual events
                (e.g., 1 free service/month).
              </span>
            </li>

            <li>
              <span className="font-semibold text-purple-950">
                Room Upgrades:
              </span>
              <span>Free hotel room upgrades (subject to availability).</span>
            </li>
            <li>
              <span className="font-semibold text-purple-950">
                Free Add-Ons:
              </span>
              <span>
                Complimentary perks like late check-out or early check-in at
                partnered hotels.
              </span>
            </li>

            <li>
              <span className="font-semibold text-purple-950">
                VIP Support:
              </span>
              <span>
                24/7 customer support with shorter response times (&lt;1 hour).
              </span>
            </li>
            <li>
              <span className="font-semibold text-purple-950">
                Personalized Recommendations:
              </span>
              <span>
                Tailored suggestions based on booking history and preferences.
              </span>
            </li>

            <li>
              <span className="font-semibold text-purple-950">
                Concierge Service:
              </span>
              <span>
                Dedicated assistance for planning and managing trips or
                reservations.
              </span>
            </li>
          </ul>
          <Link
            href="/en/donate-with-checkout"
            className="block bg-purple-800 hover:bg-purple-600 transition-all  text-white rounded-full px-10 py-5 mt-10 text-center"
          >
            Become Premium Member
          </Link>
        </div>
        {/* FREE */}
        <div className="px-12 py-10 rounded-3xl bg-white">
          <h2 className="font-semibold text-4xl mb-6">Free Membership</h2>
          <p className="mb-4 text-2xl">$0/month</p>
          <ul className="flex flex-col gap-5 list-disc">
            <li>
              <span className="font-semibold">Standard Pricing: </span>
              <span>Pay regular prices for bookings with no discounts.</span>
            </li>

            <li>
              <span className="font-semibold">Limited Support: </span>
              <span>
                Standard customer support via chatbot or email (response time:
                24-48 hours).
              </span>
            </li>
            <li>
              <span className="font-semibold">Basic Promotions: </span>
              <span>Receive general offers or updates via email.</span>
            </li>
            <li>
              <span className="font-semibold">Limited Recommendations: </span>
              <span>
                Access to basic recommendations based on general preferences.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
