"use client";

import { useRouter, usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  // Detect the current locale from the pathname (e.g., '/en' or '/ka')
  const currentLocale = pathname.split("/")[1] || "en";

  // Toggle language and update the URL
  const toggleLanguage = () => {
    const newLocale = currentLocale === "en" ? "ka" : "en";

    // Build the new path with the new locale
    const newPathname = `/${newLocale}${pathname.substring(3)}`;

    // Navigate to the new path with the updated locale
    router.push(newPathname);
  };

  return (
    <button
      className="py-3 px-10 bg-emerald-100 rounded-xl transition-all duration-300 hover:bg-emerald-200"
      onClick={toggleLanguage}
    >
      {currentLocale === "en" ? "ქარ" : "Eng"}
    </button>
  );
}
