import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import { Link } from "@/src/i18n/routing";

import Navigation from "./Navigation";
import { signOutAction } from "../actions";
import { Button } from "./ui/button";
import { createClient } from "@/src/utils/supabase/server";
import Cart from "./Cart";

export default async function Header() {
  const locale = "en";
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="w-full px-8 bg-white shadow-sm z-50 text-xl dark:bg-zinc-900">
      <div className="max-w-screen-xl mx-auto  flex items-center justify-between">
        <h1 className="font-heading text-3xl tracking-tight font-medium text-emerald-500">
          OmniShop
        </h1>
        <Navigation />

        <div className="flex items-center gap-5">
          {user ? (
            <>
              <Link
                href={`/profile`}
                className="w-10 h-10 rounded-full overflow-hidden shadow-sm border-2 border-emerald-500 dark:border-emerald-600"
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
            <div className="h-10 w-10 rounded-full">&nbsp;</div>
          )}
          <Cart />
          <ThemeSwitcher />

          <LanguageSwitcher />

          {user && (
            <form action={signOutAction}>
              <input type="hidden" name="locale" value={locale} />
              <Button type="submit" variant={"outline"}>
                Sign out
              </Button>
            </form>
          )}
        </div>
      </div>
    </header>
  );
}
