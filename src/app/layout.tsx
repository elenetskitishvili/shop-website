import "./globals.css";
import { ThemeProvider } from "next-themes";

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale?: string;
  }>;
}

export default async function RootLayout(props: RootLayoutProps) {
  const params = await props.params;

  const { children } = props;

  const { locale } = params || { locale: "en" };

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="flex flex-col h-full font-normal text-2xl font-base text-zinc-700 bg-zinc-50 dark:text-zinc-100 dark:bg-zinc-800">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
