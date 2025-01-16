"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
export default function Footer() {
  const t = useTranslations("Footer");
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className=" p-4 text-center text-base flex flex-col gap-3 shadow-md bg-white border-t-2 border-t-zinc-100 dark:bg-zinc-900 dark:border-t-zinc-800">
      <nav>
        <ul className="flex gap-10 items-center justify-center">
          <li>
            <Link
              href="/"
              className="font-heading text-lg font-medium text-emerald-500 transition-all duration-300 ease-in-out hover:text-emerald-600"
            >
              {t("faq")}
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="font-heading text-lg font-medium text-emerald-500 transition-all duration-300 ease-in-out hover:text-emerald-600"
            >
              {t("shipping")}
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="font-heading text-lg font-medium text-emerald-500 transition-all duration-300 ease-in-out hover:text-emerald-600"
            >
              {t("privacy")}
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="font-heading text-lg font-medium text-emerald-500 transition-all duration-300 ease-in-out hover:text-emerald-600"
            >
              {t("terms")}
            </Link>
          </li>
        </ul>
      </nav>

      <p className="text-zinc-500 dark:text-zinc-200">
        &copy; {currentYear} OmniShop. {t("copyRight")}
      </p>
    </footer>
  );
}
