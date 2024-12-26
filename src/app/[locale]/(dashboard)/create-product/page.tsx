import { useTranslations } from "next-intl";

import { CreateProductForm } from "@/src/app/components/CreateProductForm";

export default function CreateProduct() {
  const t = useTranslations("CreateProduct");
  return (
    <div className="flex flex-col gap-8 items-center justify-center mt-16">
      <h1 className="text-4xl">{t("createProduct")}</h1>
      <CreateProductForm />
    </div>
  );
}
