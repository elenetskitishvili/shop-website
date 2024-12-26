"use client";
import { useTranslations } from "next-intl";
import { z } from "zod";
import { createProduct } from "../actions/createProduct";
import { useState } from "react";
import SpinnerMini from "./SpinnerMini";

const productSchema = z.object({
  Name: z.string().min(1, { message: "Product Name is required" }),
  Price: z.number().min(0.01, { message: "Price must be greater than 0" }),
  Description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters" }),
  Image: z.instanceof(File).refine((file) => file.size > 0, {
    message: "Image is required",
  }),
});

export function CreateProductForm() {
  const t = useTranslations("CreateProduct");
  const [error, setError] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string[]>([]);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const formValues = {
      Name: formData.get("name") as string,
      Price: parseFloat(formData.get("price") as string),
      Description: formData.get("description") as string,
      Image: formData.get("image") as File,
    };

    try {
      setErrorMessage([]);
      setError(null);
      setSuccess(null);
      setLoading(true);

      const result = productSchema.safeParse(formValues);

      if (!result.success) {
        setErrorMessage((prev) => [
          ...prev,
          ...result.error.issues.map((issue) => `${issue.message}`),
        ]);

        return;
      }

      await createProduct(formData);
      setSuccess(t("successMessage"));
      form.reset();
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors.map((e) => e.message).join(", "));
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg p-8  shadow-md flex flex-col gap-10 min-w-[500px] mb-28"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name">{t("name")}</label>
        <input
          type="text"
          id="name"
          name="name"
          className="py-3 px-5 rounded-lg bg-white shadow-md border-b-4 border-b-transparent focus:outline-none focus:border-b-purple-700"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="price">{t("price")}</label>
        <input
          type="number"
          id="price"
          name="price"
          min="0.01"
          step="0.01"
          className="py-3 px-5 rounded-lg bg-white shadow-md border-b-4 border-b-transparent focus:outline-none focus:border-b-purple-700"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="description">{t("description")}</label>
        <textarea
          id="description"
          name="description"
          rows={4}
          placeholder={t("descriptionPlaceholder")}
          className="py-3 px-5 rounded-lg bg-white shadow-md border-b-4 border-b-transparent focus:outline-none focus:border-b-purple-700"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="image">{t("image")}</label>
        <input type="file" id="image" name="image" accept="image/*" />
      </div>
      {loading && (
        <div className="flex items-center justify-center gap-5">
          <SpinnerMini />
          <p className=" text-2xl text-center">{t("creatingProduct")}</p>
        </div>
      )}
      {errorMessage.length > 0 && (
        <div className="text-orange-700 text-2xl text-center">
          {errorMessage.map((message: string, index: number) => (
            <div key={index}>• {message}</div>
          ))}
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
        className={`rounded-xl bg-purple-900 text-white py-4 hover:bg-purple-800 transition-all ${
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
