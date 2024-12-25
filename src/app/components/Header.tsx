import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";

import Navigation from "./Navigation";
import LogoutBtn from "./LogoutBtn";
import { signOutAction } from "../actions";
import { Button } from "./ui/button";
import { createClient } from "@/src/utils/supabase/server";

interface HeaderProps {
  params: {
    locale?: string;
  };
}

export default async function Header({ params }: HeaderProps) {
  const locale = "en";
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

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
              <Link
                href={`/${locale}/profile`}
                className="w-16 h-16 rounded-full overflow-hidden shadow-sm border-2 border-emerald-500 dark:border-emerald-600"
              >
                <img
                  className="h-full w-auto object-cover"
                  src={
                    user?.user_metadata?.picture ||
                    "/images/products-placeholder.png"
                  }
                  alt="user profile picture"
                />
              </Link>
            </>
          ) : (
            <div className="h-14 w-14 rounded-full">&nbsp;</div>
          )}
          <div className="h-14 w-14 rounded-full">&nbsp;</div>

          <ThemeSwitcher />
          <LanguageSwitcher />

          {user && (
            <form action={signOutAction}>
              <input type="hidden" name="locale" value={locale} />
              <Button type="submit" variant={"outline"} className="text-3xl">
                Sign out
              </Button>
            </form>
          )}
        </div>
      </div>
    </header>
  );
}
