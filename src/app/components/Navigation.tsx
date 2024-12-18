"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

interface NavigationProps {
  locale?: string;
}

export default function Navigation({ locale }: NavigationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("Header");

  const currentLocale = locale || pathname.split("/")[1] || "en";

  return (
    <nav>
      <ul className="flex gap-5">
        <li className=" nav__item relative py-9 px-7 cursor-pointer transition-all duration-300 ease-in-out hover:text-purple-700">
          <Link
            className="nav__link text-inherit"
            href={`/${currentLocale}/about`}
          >
            {t("about")}
          </Link>
        </li>
        <li className="nav__item relative py-9 px-7 cursor-pointer transition-all duration-300 ease-in-out hover:text-purple-700">
          <Link
            className="nav__link text-inherit"
            href={`/${currentLocale}/products`}
          >
            {t("products")}
          </Link>
        </li>
        <li className="nav__item relative py-9 px-7 cursor-pointer transition-all duration-300 ease-in-out hover:text-purple-700">
          <Link
            className="nav__link text-inherit"
            href={`/${currentLocale}/blogs`}
          >
            {t("blogs")}
          </Link>
        </li>
        <li className="nav__item relative py-9 px-7 cursor-pointer transition-all duration-300 ease-in-out hover:text-purple-700">
          <Link
            className="nav__link text-inherit"
            href={`/${currentLocale}/contact`}
          >
            {t("contact")}
          </Link>
        </li>
        <li className="nav__item relative py-9 px-7 cursor-pointer transition-all duration-300 ease-in-out hover:text-purple-700">
          <Link
            className="nav__link text-inherit"
            href={`/${currentLocale}/pricing`}
          >
            {t("pricing")}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
