import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

import Providers from "../providers";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export const metadata = {
  title: "OmniShop",
};

export default async function DashboardLayout({ children }) {
  const session = await getSession();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <Providers>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </Providers>
  );
}
