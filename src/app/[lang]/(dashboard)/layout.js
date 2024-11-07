import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

import { getDictionary } from "../dictionaries";

import ThemeProvider from "../../providers/ThemeProvider";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export const metadata = {
  title: "OmniShop",
};

export default async function DashboardLayout({ children, params: { lang } }) {
  // const dict = await getDictionary(lang);

  const session = await getSession();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <>
      <ThemeProvider>
        <Header labels={dict.header} currentLang={lang} />
        <main className="flex-1">{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  );
}
