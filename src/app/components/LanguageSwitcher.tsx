"use client";

import { useRouter, usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale: string = pathname.split("/")[1] || "en";

  const toggleLanguage = (): void => {
    const newLocale = currentLocale === "en" ? "ka" : "en";

    const newPathname = `/${newLocale}${pathname.substring(3)}`;

    router.push(newPathname);
  };

  return (
    <button
      className="py-3 px-10 bg-emerald-100 rounded-xl text-black transition-all duration-300 hover:bg-emerald-200"
      onClick={toggleLanguage}
    >
      {currentLocale === "en" ? "ქარ" : "Eng"}
    </button>
  );
}
