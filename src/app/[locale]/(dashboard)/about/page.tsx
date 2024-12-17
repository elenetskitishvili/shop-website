"use client";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");

  return (
    <section className="max-w-screen-xl mx-auto pt-8 pb-6 grid grid-cols-[60fr_40fr] gap-36 items-center">
      <div>
        <h3 className="font-heading text-emerald-500 text-4xl">
          {t("heading")}
        </h3>
        <p className="mt-3 mb-7 text-2xl font-medium leading-9">
          {t("description")}
        </p>

        <h3 className="font-heading text-emerald-500 text-4xl">
          {t("missionHeading")}
        </h3>
        <p className="mt-3 mb-7 text-2xl font-medium leading-9">
          {t("missionText")}
        </p>

        <h3 className="font-heading text-emerald-500 text-4xl">
          {t("uniqueHeading")}
        </h3>
        <ul className="mt-5 mb-7 text-2xl font-medium leading-9 flex flex-col gap-3">
          <li className="flex items-center gap-3">
            <i className=" text-emerald-500  fas fa-box-open"></i>
            <span>{t("uniquePoints.point1")}</span>
          </li>
          <li className="flex items-center gap-3">
            <i className="text-emerald-500 fas fa-star"></i>
            <span>{t("uniquePoints.point2")}</span>
          </li>
          <li className="flex items-center gap-3">
            <i className="text-emerald-500  fas fas fa-headset"></i>
            <span>{t("uniquePoints.point3")}</span>
          </li>
        </ul>

        <h3 className="font-heading text-emerald-500 text-4xl">
          {t("storyHeading")}
        </h3>
        <p className="mt-3 mb-7 text-2xl font-medium leading-9">
          {t("storyText")}
        </p>
      </div>
      <div className="justify-self-end rounded-xl shadow-lg overflow-hidden">
        <img
          className="block w-full"
          src="/images/about-image.jpg"
          alt="shopping bags, cart and gift card"
        />
      </div>
    </section>
  );
}
