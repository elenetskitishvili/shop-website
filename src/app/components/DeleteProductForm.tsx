"use client";

import { Product } from "@/src/types/types";
import { deleteProduct } from "../actions/deleteProduct";
import { createClient } from "@/src/utils/supabase/client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface DeleteProductFormProps {
  product: Product;
}

export default function DeleteProductForm({ product }: DeleteProductFormProps) {
  const [userId, setUserId] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    async function fetchUser() {
      const supabase = createClient();
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUserId(session?.user?.id || null);
    }

    fetchUser();
  }, []);

  if (userId !== product.user_id) return <div>&nbsp;</div>;

  const handleDelete = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    await deleteProduct(formData);
    router.refresh();
  };

  return (
    <form
      onSubmit={handleDelete}
      className="absolute right-0 top-0 bg-orange-600 hover:bg-orange-500 transition-all px-3 "
    >
      <input type="hidden" name="productId" value={product.id} />
      <button
        type="submit"
        className="text-white text-4xl leading-none "
        data-cy="delete-product-button"
      >
        &times;
      </button>
    </form>
  );
}
