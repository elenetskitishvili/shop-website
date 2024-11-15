"use client";
import { useTranslations } from "next-intl";
import "./contact.css";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <section className="max-w-screen-xl mx-auto py-12 grid grid-cols-2 gap-20">
      <div className="w-full">
        <h2 className="font-heading text-5xl -tracking-tight font-medium text-emerald-500 mb-10">
          {t("reachOut")}
        </h2>
        <form className="flex flex-col gap-8 items-start">
          <div className="w-full">
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="contact__input dark:bg-zinc-900 "
              placeholder={t("fullName")}
              required
            />
            <label htmlFor="fullName" className="contact__form-label">
              {t("fullName")}
            </label>
          </div>
          <div className="w-full">
            <input
              type="email"
              id="email"
              name="email"
              className="contact__input dark:bg-zinc-900 "
              placeholder={t("email")}
              required
            />
            <label htmlFor="email" className="contact__form-label">
              {t("email")}
            </label>
          </div>
          <div className="w-full">
            <input
              type="tel"
              id="phone"
              name="phone"
              className="contact__input dark:bg-zinc-900 "
              placeholder={t("phone")}
              required
            />
            <label htmlFor="phone" className="contact__form-label">
              {t("phone")}
            </label>
          </div>
          <div className="w-full">
            <input
              type="text"
              id="subject"
              name="subject"
              className="contact__input dark:bg-zinc-900 "
              placeholder={t("subject")}
              required
            />
            <label htmlFor="subject" className="contact__form-label">
              {t("subject")}
            </label>
          </div>
          <input
            type="submit"
            className="text-2xl py-5 px-10 rounded-xl cursor-pointer text-white bg-emerald-500 transition-all duration-300 ease-in-out hover:bg-emerald-600 dark:bg-emerald-800 dark:hover:bg-emerald-700"
            value={t("submit")}
          />
        </form>
      </div>
      <div className="mt-20">
        <h2 className="font-heading text-5xl -tracking-tight font-medium text-emerald-500 mb-10 ">
          {t("contactUs")}
        </h2>
        <p className="mb-10 text-3xl text-emerald-500">{t("inquiries")}</p>
        <ul className="flex flex-col gap-8 items-start">
          <li className="flex items-center">
            <span className="text-3xl text-emerald-500 mr-4">
              {t("emailLabel")}:
            </span>
            <a href="mailto:contact@omnishop.com" className="text-inherit">
              contact@omnishop.com
            </a>
          </li>
          <li className="flex items-center">
            <span className="text-3xl text-emerald-500 mr-4">
              {t("phoneLabel")}:
            </span>
            <a href="tel:+995555123456" className="text-inherit">
              +995 555 123 456
            </a>
          </li>
          <li className="flex items-center">
            <span className="text-3xl text-emerald-500 mr-4">
              {t("addressLabel")}:
            </span>{" "}
            {t("address")}
          </li>
          <li className="flex items-center">
            <span className="text-3xl text-emerald-500 mr-4">
              {t("followUs")}:
            </span>
            <span className="flex items-center gap-6 pl-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl"
                aria-label="Pinterest"
              >
                <i className="fab fa-pinterest"></i>
              </a>
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
