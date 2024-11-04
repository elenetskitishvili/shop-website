import Link from "next/link";
import "./Header.css";
import ThemeSwitcher from "../ThemeSwitcher";

import { getSession } from "@auth0/nextjs-auth0";

export default async function Header() {
  const { user } = await getSession();
  return (
    <header className="w-full px-12 bg-white shadow-sm text-3xl dark:bg-zinc-900">
      <div className="max-w-screen-xl mx-auto  flex items-center justify-between">
        <h1 className="font-heading text-5xl tracking-tight font-medium text-emerald-500">
          OmniShop
        </h1>
        <nav>
          <ul className="flex gap-5">
            <li className=" nav__item relative py-9 px-7 cursor-pointer transition-all duration-300 ease-in-out hover:text-emerald-500">
              <Link className="nav__link text-inherit" href="/about">
                About us
              </Link>
            </li>
            <li className="nav__item relative py-9 px-7 cursor-pointer transition-all duration-300 ease-in-out hover:text-emerald-500">
              <Link className="nav__link text-inherit" href="/products">
                Products
              </Link>
            </li>
            <li className="nav__item relative py-9 px-7 cursor-pointer transition-all duration-300 ease-in-out hover:text-emerald-500">
              <Link className="nav__link text-inherit" href="/blogs">
                Blogs
              </Link>
            </li>
            <li className="nav__item relative py-9 px-7 cursor-pointer transition-all duration-300 ease-in-out hover:text-emerald-500">
              <Link className="nav__link text-inherit" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-10">
          <Link href="/profile">
            <img
              className="h-14 w-14 rounded-full"
              src={user.picture}
              alt={user.name}
            />
          </Link>

          <a href="/api/auth/logout">Logout</a>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
