import { fetchSessionData } from "@/src/lib/stripe";
import { createOrderInSupabase } from "@/src/app/actions/createOrder";
import "./page.css";

interface StripeSession {
  id: string;
  amount_total: number | null;
  payment_status: string;
  metadata?: {
    productId?: string;
    created_at?: string;
    user_id?: string;
    stripe_product_id?: string;
    stripe_price_id?: string;
    description?: string;
    name?: string;
  };
}

export const metadata = {
  title: "Order Result",
};

export default async function ResultPage(
  props: {
    params: Promise<{ locale: string }>;
    searchParams: Promise<{ session_id: string }>;
  }
) {
  const searchParams = await props.searchParams;
  const { session_id } = searchParams;

  if (!session_id) {
    return <div>Sorry, something went wrong with your order.</div>;
  }

  try {
    // Fetch session data from Stripe
    const session = await fetchSessionData(session_id);
    console.log("Fetched session from Stripe:", session); // Log session data

    if (!session) {
      return <div>Sorry, session not found.</div>;
    }

    const { id, amount_total, payment_status, metadata } = session;
    const amount = amount_total ?? 0;

    const updatedMetadata = {
      ...metadata,
      stripe_purchase_id: id,
      price: amount,
    };

    if (payment_status === "paid" && updatedMetadata) {
      console.log("Order metadata:", updatedMetadata);
      await createOrderInSupabase(updatedMetadata);
    }

    return (
      <div className="success-wrapper">
        <div className="success-inner">
          <h1>Thank you for your purchase!</h1>
          <h3>Your payment was successful. Here's the order information:</h3>
          <div className="order-info">
            <p>
              <strong>Order ID:</strong> {id}
            </p>
            <p>
              <strong>Price:</strong> {`$${(amount / 100).toFixed(2)}`}
            </p>
            <p>
              <strong>Status:</strong> {payment_status}
            </p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error processing order:", error);
    return (
      <div className="purchase-failure">
        <div className="failure-inner">
          <p>Sorry, there was an error processing your order.</p>
        </div>
      </div>
    );
  }
}
