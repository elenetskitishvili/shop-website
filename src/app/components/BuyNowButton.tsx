"use client";

import { useRouter } from "next/navigation";

interface BuyNowButtonProps {
  productId: string;
}

const BuyNowButton = ({ productId }: BuyNowButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/en/products/${productId}/checkout`); // Adjust this URL to your checkout page
  };

  return (
    <button
      onClick={handleClick}
      className="inline-block text-2xl py-4 px-8 self-start border border-solid  border-purple-950 visited:bg-purple-950 transition-all duration-300 ease-in-out mt-auto rounded-md text-purple-950 hover:border-purple-800 hover:text-purple-800 active:border-purple-800 dark:border-purple-200  dark:text-purple-200 dark:hover:border-purple-300 dark:hover:text-purple-300"
    >
      Proceed to Checkout
    </button>
  );
};

export default BuyNowButton;
