import { UserProvider } from "@auth0/nextjs-auth0/client";
import Providers from "./providers";
import ThemeSwitcher from "./ThemeSwitcher";
import "./globals.css";

export const metadata = {
  title: "OmniShop",
  description: "Web site created with Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <UserProvider>
            <ThemeSwitcher />
            {children}
          </UserProvider>
        </Providers>
      </body>
    </html>
  );
}
