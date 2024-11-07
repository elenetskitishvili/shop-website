import { UserProvider } from "@auth0/nextjs-auth0/client";
import "../globals.css";

import { getDictionary } from "./dictionaries";

export const metadata = {
  title: "OmniShop",
  description: "Web site created with Next.js.",
};

export default async function RootLayout({ children, params: { lang } }) {
  // const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body className="flex flex-col h-full font-normal text-2xl font-base text-zinc-700 bg-zinc-50 dark:text-zinc-100 dark:bg-zinc-800">
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
