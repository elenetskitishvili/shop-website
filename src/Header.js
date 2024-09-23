import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item ">
            <a className="nav__link" href="#">
              About Me
            </a>
          </li>
          <li className="nav__item nav__item--active">
            <a className="nav__link" href="#">
              Hobbies
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#">
              Skills
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
