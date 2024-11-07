import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

import Image from "next/image";
import "./login.css";
import bg from "../../../../../public/images/bg.png";

export default async function LoginPage() {
  const session = await getSession();
  if (session?.user) {
    redirect("/");
  }

  return (
    !session?.user && (
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
          <a href="/api/auth/login">Login</a>
        </div>
      </section>
    )
  );
}
