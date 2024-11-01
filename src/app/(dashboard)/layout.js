import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

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
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
