import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

// import { getDictionary } from "../dictionaries";

import ThemeProvider from "../../providers/ThemeProvider";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export const metadata = {
  title: "OmniShop",
};

export default async function DashboardLayout({ children }) {
  // const dict = await getDictionary(lang);

  const session = await getSession();

  if (!session || !session?.user) {
    redirect("/en/login");
  }

  return (
    <>
      <ThemeProvider>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  );
}
