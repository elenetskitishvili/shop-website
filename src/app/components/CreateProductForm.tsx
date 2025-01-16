"use client";
import { useTranslations } from "next-intl";
import { z } from "zod";
import { createProduct } from "../actions/createProduct";
import { useState } from "react";
import SpinnerMini from "./SpinnerMini";

interface ErrorMessages {
  Name?: string | string[];
  Price?: string | string[] | number;
  Description?: string | string[];
  Image?: string | string[];
}

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
  const [errorMessage, setErrorMessage] = useState<ErrorMessages>({
    Name: "",
    Price: "",
    Description: "",
    Image: "",
  });
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
      setErrorMessage({ Name: "", Price: "", Description: "", Image: "" });
      setError(null);
      setSuccess(null);
      setLoading(true);

      const result = productSchema.safeParse(formValues);

      if (!result.success) {
        const errorObj = result.error.flatten().fieldErrors;

        setErrorMessage(errorObj);

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
      className="rounded-lg p-6  shadow-md flex flex-col gap-7 min-w-[400px] mb-24 text-base"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name">{t("name")}</label>
        <input
          type="text"
          id="name"
          name="name"
          className="py-2 px-3 rounded-lg bg-white shadow-md border-b-4 border-b-transparent focus:outline-none focus:border-b-purple-700"
          data-cy="product-name-input"
        />
      </div>
      {errorMessage?.Name && (
        <div className="text-orange-700 text-base">{errorMessage.Name}</div>
      )}

      <div className="flex flex-col gap-2">
        <label htmlFor="price">{t("price")}</label>
        <input
          type="number"
          id="price"
          name="price"
          min="0.01"
          step="0.01"
          className="py-2 px-3 rounded-lg bg-white shadow-md border-b-4 border-b-transparent focus:outline-none focus:border-b-purple-700"
          data-cy="product-price-input"
        />
      </div>
      {errorMessage?.Price && (
        <div className="text-orange-700 text-base">{errorMessage.Price}</div>
      )}

      <div className="flex flex-col gap-2">
        <label htmlFor="description">{t("description")}</label>
        <textarea
          id="description"
          name="description"
          rows={4}
          placeholder={t("descriptionPlaceholder")}
          className="py-2 px-3 rounded-lg bg-white shadow-md border-b-4 border-b-transparent focus:outline-none focus:border-b-purple-700"
          data-cy="product-description-input"
        />
      </div>
      {errorMessage?.Description && (
        <div className="text-orange-700 text-base ">
          {errorMessage.Description}
        </div>
      )}

      <div className="flex flex-col gap-2">
        <label htmlFor="image">{t("image")}</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          data-cy="product-image-input"
        />
      </div>
      {errorMessage?.Image && (
        <div className="text-orange-700 text-base">{errorMessage.Image}</div>
      )}

      {loading && (
        <div className="flex items-center justify-center gap-5">
          <SpinnerMini />
          <p className=" text-base text-center">{t("creatingProduct")}</p>
        </div>
      )}
      {error && (
        <p className="text-orange-700 text-base text-center">
          {t("failMessage")}
        </p>
      )}
      {success && (
        <p
          className="text-green-700 text-base text-center"
          data-cy="product-creation-success-message"
        >
          {success}
        </p>
      )}
      <button
        type="submit"
        className={`rounded-base bg-purple-900 text-white py-4 hover:bg-purple-800 transition-all ${
          loading ? "opacity-50 cursor-not-allowed" : "opacity-100"
        }`}
        disabled={loading}
        data-cy="create-product-button"
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
