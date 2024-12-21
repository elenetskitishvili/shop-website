"use client";

import { useTranslations } from "next-intl";

export default function LogoutBtn() {
  const t = useTranslations("Header");

  return <a href="/">{t("logout")}</a>;
}
