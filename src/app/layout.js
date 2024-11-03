import { UserProvider } from "@auth0/nextjs-auth0/client";
import "./globals.css";

export const metadata = {
  title: "OmniShop",
  description: "Web site created with Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col h-full font-normal text-2xl font-base text-zinc-700 bg-zinc-50 dark:text-zinc-50 dark:bg-zinc-800">
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
