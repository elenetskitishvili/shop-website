"use client";
import { useTranslations } from "next-intl";

import { createProduct } from "../actions/createProduct";
import { useState } from "react";
import SpinnerMini from "./SpinnerMini";

export function CreateProductForm() {
  const t = useTranslations("CreateProduct");
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
      setSuccess(t("successMessage"));
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
      <label htmlFor="name">{t("name")}</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="price">{t("price")}</label>
      <input
        type="number"
        id="price"
        name="price"
        min="0.01"
        step="0.01"
        required
      />

      <label htmlFor="description">{t("description")}</label>
      <textarea
        id="description"
        name="description"
        rows={4}
        required
        placeholder={t("descriptionPlaceholder")}
        className="py-2 px-3"
      />

      <label htmlFor="image">{t("image")}</label>
      <input type="file" id="image" name="image" accept="image/*" required />

      {loading && (
        <div className="flex items-center justify-center gap-5">
          <SpinnerMini />
          <p className=" text-2xl text-center">{t("creatingProduct")}</p>
        </div>
      )}

      {error && (
        <p className="text-orange-700 text-2xl text-center">
          {t("failMessage")}
        </p>
      )}

      {success && (
        <p className="text-green-700 text-2xl text-center">{success}</p>
      )}

      <button
        type="submit"
        className={`rounded-sm bg-black text-white py-4 hover:bg-gray-800 transition-all ${
          loading ? "opacity-50 cursor-not-allowed" : "opacity-100"
        }`}
        disabled={loading}
      >
        {loading
          ? t("creating")
          : success
          ? t("createAnother")
          : error
          ? t("retry")
          : t("create")}
      </button>
    </form>
  );
}
