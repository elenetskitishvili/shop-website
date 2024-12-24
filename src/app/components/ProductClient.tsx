"use client";

import { useState } from "react";

type ProductClientProps = {
  productId: string;
};

export const ProductClient = ({ productId }: ProductClientProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleBuyNow = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`/api/products/${productId}/buy`, {
        method: "POST",
      });

      const data = await response.json();

      if (response.ok && data.url) {
        window.location.href = data.url;
      } else {
        // Set error message if checkout failed
        setError("Failed to start checkout. Please try again.");
      }
    } catch (error) {
      console.error("Error during checkout:", error);
      setError("Something went wrong during checkout. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleBuyNow} disabled={loading}>
        {loading ? "Processing..." : "Buy Now"}
      </button>

      {error && (
        <div style={{ color: "red", marginTop: "10px" }}>
          <strong>{error}</strong>
        </div>
      )}
    </div>
  );
};
