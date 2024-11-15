import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/src/i18n/routing";

export const metadata = {
  title: "Welcome | OmniShop",
  description: "Web site created with Next.js.",
};

export default async function AuthLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className="flex flex-col h-full font-normal text-2xl font-base text-zinc-700 bg-zinc-50 dark:text-zinc-100 dark:bg-zinc-800">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
