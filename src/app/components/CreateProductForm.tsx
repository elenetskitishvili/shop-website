"use client";

import { createProduct } from "../actions/createProduct";
import { useState } from "react";

export function CreateProductForm() {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (formData: FormData) => {
    try {
      await createProduct(formData);
      alert("Product created successfully!");
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <form
      action={handleSubmit}
      className="rounded-lg p-4 bg-gray-100 flex flex-col gap-6 min-w-[400px]"
    >
      {error && <p className="text-red-500">{error}</p>}

      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="price">Price</label>
      <input
        type="number"
        id="price"
        name="price"
        min="0.01"
        step="0.01"
        required
      />

      <button type="submit" className="bg-black text-white py-4">
        Create
      </button>
    </form>
  );
}
