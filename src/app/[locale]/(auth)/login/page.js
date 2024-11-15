import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
import Image from "next/image";

import "./login.css";
import bg from "../../../../../public/images/bg.png";

export default async function LoginPage({ params }) {
  const locale = (await params)?.locale;
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
        <a
          href="/api/auth/login"
          className="py-3 px-8 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition duration-300"
        >
          Login
        </a>
      </div>
    </section>
  );
}
