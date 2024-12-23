import { fetchSessionData } from "@/src/lib/stripe"; // Your utility function to fetch session data from Stripe

interface StripeSession {
  id: string;
  amount_total: number;
  payment_status: string;
}

interface ResultPageProps {
  session: StripeSession | null;
}

export default async function ResultPage({
  params,
  searchParams,
}: {
  params: { locale: string };
  searchParams: { session_id: string };
}) {
  const { session_id } = searchParams;

  if (!session_id) {
    return <div>Sorry, something went wrong with your order.</div>;
  }

  try {
    // Fetch the session from Stripe using the session ID
    const session = await fetchSessionData(session_id);

    if (!session) {
      return <div>Sorry, session not found.</div>;
    }

    return (
      <div>
        <h1>Thank you for your purchase!</h1>
        <p>Your payment was successful. Here's the order information:</p>
        <div>
          <p>Order ID: {session.id}</p>
          <p>Amount: ${(session.amount_total || 0) / 100}</p>
          <p>Status: {session.payment_status}</p>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching session:", error);
    return <div>Sorry, there was an error processing your order.</div>;
  }
}
