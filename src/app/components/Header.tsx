import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";

import Navigation from "./Navigation";
import LogoutBtn from "./LogoutBtn";

import { getSession } from "@auth0/nextjs-auth0";

interface HeaderProps {
  params: {
    locale?: string;
  };
}

export default async function Header({ params }: HeaderProps) {
  const session = await getSession();
  const user = session?.user;
  const locale = params?.locale || "en";

  return (
    <header className="w-full px-12 bg-white shadow-sm text-3xl dark:bg-zinc-900">
      <div className="max-w-screen-xl mx-auto  flex items-center justify-between">
        <h1 className="font-heading text-5xl tracking-tight font-medium text-emerald-500">
          OmniShop
        </h1>
        <Navigation />

        <div className="flex items-center gap-10">
          {user ? (
            <>
              <Link href={`/${locale}/profile`}>
                <img
                  className="h-14 w-14 rounded-full"
                  src={user.picture}
                  alt={user.name}
                />
              </Link>
            </>
          ) : (
            <div className="h-14 w-14 rounded-full">&nbsp;</div>
          )}

          <LogoutBtn />

          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
