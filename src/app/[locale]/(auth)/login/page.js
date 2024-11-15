import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
import Image from "next/image";
import LoginButton from "../../../components/LoginBtn";
import "./login.css";
import bg from "../../../../../public/images/bg.png";

export default async function LoginPage({ params: { locale } }) {
  const session = await getSession();

  if (session?.user) {
    redirect(`/${locale}`);
  }

  return (
    <section className="login">
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={80}
        className="login__bg"
        alt="Mountains and forests with two cabins"
      />
      <div className="login__content">
        <h1 className="login__heading">Welcome to OmniShop!</h1>
        <LoginButton />
      </div>
    </section>
  );
}
