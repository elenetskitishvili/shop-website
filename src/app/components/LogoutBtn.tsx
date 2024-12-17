"use client";

import { useTranslations } from "next-intl";

export default function LogoutBtn() {
  const t = useTranslations("Header");

  return <a href="/api/auth/logout">{t("logout")}</a>;
}
