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
            <Link className="nav__link" to="/blogs">
              Blogs
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/assignment-3">
              Assignment 3
            </Link>
          </li>
        </ul>
      </nav>

      <Link className="user" to="/profile">
        <img className="user__img" src="/images/user.jpg" alt="user" />
        <span className="user__name">Elene</span>
      </Link>
    </header>
  );
}

export default Header;
