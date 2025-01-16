"use client";

import { Product } from "@/src/types/types";
import { deleteProduct } from "../actions/deleteProduct";
import { createClient } from "@/src/utils/supabase/client";
import { useState, useEffect } from "react";

interface DeleteProductFormProps {
  product: Product;
}

async function handleDelete(
  event: React.FormEvent<HTMLFormElement>,
  productId: number,
  setIsDeleting: React.Dispatch<React.SetStateAction<boolean>>
) {
  event.preventDefault();
  setIsDeleting(true);

  const formData = new FormData(event.currentTarget);
  await deleteProduct(formData);

  setIsDeleting(false);
}

export default function DeleteProductForm({ product }: DeleteProductFormProps) {
  const [userId, setUserId] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      const supabase = createClient();
      const userResponse = await supabase.auth.getUser();
      setUserId(userResponse.data.user?.id || null);
    }

    fetchUser();
  }, []);

  if (userId !== product.user_id) return <div>&nbsp;</div>;

  return (
    <form onSubmit={(event) => handleDelete(event, product.id, setIsDeleting)}>
      <input type="hidden" name="productId" value={product.id} />
      <button
        type="submit"
        data-cy="delete-product-button"
        disabled={isDeleting}
      >
        {isDeleting ? "Deleting..." : "Delete"}
      </button>
    </form>
  );
}
