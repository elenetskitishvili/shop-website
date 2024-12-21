// import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
import Image from "next/image";

import bg from "../../../../../public/images/bg.png";

interface LoginPageProps {
  params: {
    locale?: "en" | "ka";
  };
}

export default async function LoginPage({ params }: LoginPageProps) {
  // const locale = (await params)?.locale;
  const locale = "en";
  // const session = await getSession();

  // if (session?.user) {
  //   redirect(`/${locale}`);
  // }

  return (
    <section>
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={80}
        className="object-cover object-bottom"
        alt="Mountains and forests with two cabins"
      />
      <div className="max-w-screen-xl mx-auto relative flex items-start justify-between mt-16 px-14 text-white ">
        <h1 className="font-heading text-5xl">Welcome to OmniShop!</h1>
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
