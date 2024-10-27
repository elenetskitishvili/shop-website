import Link from "next/link";
import "./Header.css";
import LogOutBtn from "../LogOutBtn/LogOutBtn";
import { fetchUserDetails } from "../../../utils/fetchUserDetails";

export default async function Header() {
  const user = await fetchUserDetails();

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
            <Link className="nav__link" href="/">
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
          <img className="user__img" src={user.image} alt={user.firstName} />
          <span className="user__name">{user.firstName}</span>
        </Link>

        <LogOutBtn />
      </div>
    </header>
  );
}
