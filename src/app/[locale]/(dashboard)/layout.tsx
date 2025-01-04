import Footer from "../../components/Footer";
import Header from "../../components/Header";

export const metadata = {
  title: "OmniShop",
};
interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
