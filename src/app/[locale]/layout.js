import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/src/i18n/routing";

import { UserProvider } from "@auth0/nextjs-auth0/client";
import "../globals.css";

export const metadata = {
  title: "OmniShop",
  description: "Web site created with Next.js.",
};

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="flex flex-col h-full font-normal text-2xl font-base text-zinc-700 bg-zinc-50 dark:text-zinc-100 dark:bg-zinc-800">
        <NextIntlClientProvider messages={messages}>
          <UserProvider>{children}</UserProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
