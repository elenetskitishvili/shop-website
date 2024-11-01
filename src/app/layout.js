import { UserProvider } from "@auth0/nextjs-auth0/client";
import "./globals.css";

export const metadata = {
  title: "OmniShop",
  description: "Web site created with Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
