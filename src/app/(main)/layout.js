import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AuthChecker from "../components/AuthChecker";

export const metadata = {
  title: "OmniShop",
};

export default function MainLayout({ children }) {
  return (
    <>
      <AuthChecker>
        <Header />
        <main>{children}</main>
        <Footer />
      </AuthChecker>
    </>
  );
}
