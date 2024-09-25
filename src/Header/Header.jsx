import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="heading-primary">Handmade Soaps</h1>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item ">
            <a className="nav__link" href="#">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#">
              About us
            </a>
          </li>
          <li className="nav__item nav__item--active">
            <a className="nav__link" href="#">
              Our soaps
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
