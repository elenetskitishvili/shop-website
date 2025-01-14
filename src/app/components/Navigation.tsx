"use client";

import { Link } from "@/src/i18n/routing";
import { useRouter, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("Header");

  return (
    <nav>
      <ul className="flex gap-3">
        <li className=" nav__item relative py-4 px-3 cursor-pointer transition-all duration-300 ease-in-out hover:text-emerald-600">
          <Link className="nav__link text-inherit" href={`/about`}>
            {t("about")}
          </Link>
        </li>
        <li className="nav__item relative py-4 px-3 cursor-pointer transition-all duration-300 ease-in-out hover:text-emerald-600">
          <Link className="nav__link text-inherit" href={`/products`}>
            {t("products")}
          </Link>
        </li>
        <li className="nav__item relative py-4 px-3 cursor-pointer transition-all duration-300 ease-in-out hover:text-emerald-600">
          <Link className="nav__link text-inherit" href={`/blogs`}>
            {t("blogs")}
          </Link>
        </li>
        <li className="nav__item relative py-4 px-3 cursor-pointer transition-all duration-300 ease-in-out hover:text-emerald-600">
          <Link className="nav__link text-inherit" href={`/contact`}>
            {t("contact")}
          </Link>
        </li>
        <li className="nav__item relative py-4 px-3 cursor-pointer transition-all duration-300 ease-in-out hover:text-emerald-600">
          <Link className="nav__link text-inherit" href={`/pricing`}>
            {t("pricing")}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
