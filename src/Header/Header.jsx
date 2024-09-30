// src/Header/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="heading-primary">Handmade Soaps</h1>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link className="nav__link" to="/about">
              About us
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/">
              Our soaps
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
