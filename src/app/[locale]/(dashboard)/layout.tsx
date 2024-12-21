// import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

import ThemeProvider from "../../providers/ThemeProvider";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "OmniShop",
};
interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  // const session = await getSession();

  // if (!session || !session?.user) {
  //   redirect("/en/login");
  // }

  // const locale = session?.user?.locale || "en";
  const locale = "en";

  return (
    <>
      <ThemeProvider>
        <Header
          params={{
            locale,
          }}
        />
        <main className="flex-1">{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  );
}
