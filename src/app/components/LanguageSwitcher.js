"use client";
// import { useRouter } from "next/router";

export default function LanguageSwitcher({ currentLang }) {
  // const router = useRouter();

  // // Toggle language between English and Georgian
  // const switchLanguage = () => {
  //   const newLang = currentLang === "en" ? "ge" : "en";
  //   const newPath = router.asPath.replace(`/${currentLang}`, `/${newLang}`);
  //   router.push(newPath);
  // };

  // return (
  //   <button
  //     onClick={switchLanguage}
  //     className="p-2 rounded bg-gray-200 dark:bg-gray-600"
  //   >
  //     {currentLang === "en" ? "Georgian" : "English"}
  //   </button>
  // );

  return <button className="py-3 px-10 bg-emerald-100 rounded-xl">Geo</button>;
}
