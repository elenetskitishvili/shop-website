import Link from "next/link";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="heading-primary">Handmade Soaps</h1>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link className="nav__link" href="/about">
              About us
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" href="/">
              Our soaps
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

      <Link className="user" href="/profile">
        <img className="user__img" src="/images/user.jpg" alt="user" />
        <span className="user__name">Elene</span>
      </Link>
    </header>
  );
}

export default Header;
