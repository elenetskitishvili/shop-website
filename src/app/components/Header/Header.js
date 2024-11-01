import Link from "next/link";
import "./Header.css";

import { getSession } from "@auth0/nextjs-auth0";

export default async function Header() {
  const { user } = await getSession();
  return (
    <header className="header">
      <h1 className="heading-primary">OmniShop</h1>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link className="nav__link" href="/about">
              About us
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" href="/products">
              Products
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" href="/blogs">
              Blogs
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div className="header__user">
        <Link className="user" href="/profile">
          <img className="user__img" src={user.picture} alt={user.name} />
        </Link>

        <a href="/api/auth/logout">Logout</a>
      </div>
    </header>
  );
}
