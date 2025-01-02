"use client";
import { useTranslations } from "next-intl";
export default function Footer() {
  const t = useTranslations("Footer");
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className=" p-4 text-center text-base flex flex-col gap-3 shadow-md bg-white border-t-2 border-t-zinc-100 dark:bg-zinc-900 dark:border-t-zinc-800">
      <nav>
        <ul className="flex gap-10 items-center justify-center">
          <li>
            <a
              href="/"
              className="font-heading text-lg font-medium text-emerald-500 transition-all duration-300 ease-in-out hover:text-emerald-600"
            >
              {t("faq")}
            </a>
          </li>
          <li>
            <a
              href="/"
              className="font-heading text-lg font-medium text-emerald-500 transition-all duration-300 ease-in-out hover:text-emerald-600"
            >
              {t("shipping")}
            </a>
          </li>
          <li>
            <a
              href="/"
              className="font-heading text-lg font-medium text-emerald-500 transition-all duration-300 ease-in-out hover:text-emerald-600"
            >
              {t("privacy")}
            </a>
          </li>
          <li>
            <a
              href="/"
              className="font-heading text-lg font-medium text-emerald-500 transition-all duration-300 ease-in-out hover:text-emerald-600"
            >
              {t("terms")}
            </a>
          </li>
        </ul>
      </nav>

      <p className="text-zinc-500 dark:text-zinc-200">
        &copy; {currentYear} OmniShop. {t("copyRight")}
      </p>
    </footer>
  );
}
