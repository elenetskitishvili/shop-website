import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/src/i18n/routing";

export const metadata = {
  title: "Welcome | OmniShop",
  description: "Web site created with Next.js.",
};

interface AuthLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function AuthLayout({
  children,
  params,
}: AuthLayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "ka")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <div className="flex flex-col h-full font-normal text-2xl font-base text-zinc-700 bg-zinc-50 dark:text-zinc-100 dark:bg-zinc-800">
        {children}
      </div>
    </NextIntlClientProvider>
  );
}
