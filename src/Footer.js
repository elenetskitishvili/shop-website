import React from "react";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <nav className="footer__nav">
        <ul className="footer__nav-list">
          <li className="footer__nav-item">
            <a href="#" className="footer__nav-link">
              Opera Singing
            </a>
          </li>
          <li className="footer__nav-item">
            <a href="#" className="footer__nav-link">
              Ice-skating
            </a>
          </li>
          <li className="footer__nav-item">
            <a href="#" className="footer__nav-link">
              Swimming
            </a>
          </li>
          <li className="footer__nav-item">
            <a href="#" className="footer__nav-link">
              Reading
            </a>
          </li>
        </ul>
      </nav>

      <p>&copy; {currentYear} Developed By Elene Tskitishvili</p>
    </footer>
  );
}

export default Footer;
