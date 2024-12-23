"use client";

import { createProduct } from "../actions/createProduct";
import { useState } from "react";
import SpinnerMini from "./SpinnerMini";

export function CreateProductForm() {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      setError(null);
      setSuccess(null);
      setLoading(true);

      await createProduct(formData);
      setSuccess("Product created successfully!");
      form.reset();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      // action={handleSubmit}
      onSubmit={handleSubmit}
      className="rounded-lg p-4 bg-gray-100 flex flex-col gap-6 min-w-[400px]"
    >
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

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        rows={4}
        required
        placeholder="Enter description of the product..."
        className="py-2 px-3"
      />

      {loading && (
        <div className="flex items-center justify-center gap-5">
          <SpinnerMini />
          <p className=" text-2xl text-center">Creating Product...</p>
        </div>
      )}

      {error && (
        <p className="text-orange-700 text-2xl text-center">
          Failed to create a new product.
        </p>
      )}

      {success && (
        <p className="text-green-700 text-2xl text-center">{success}</p>
      )}

      <button
        type="submit"
        className={`bg-black text-white py-4 ${
          loading ? "opacity-50 cursor-not-allowed" : "opacity-100"
        }`}
        disabled={loading}
      >
        {loading
          ? "Creating..."
          : success
          ? "Create Another"
          : error
          ? "Retry"
          : "Create"}
      </button>
    </form>
  );
}
