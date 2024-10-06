import React from "react";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <nav className="footer__nav">
        <ul className="footer__nav-list">
          <li className="footer__nav-item">
            <a href="/" className="footer__nav-link">
              FAQ
            </a>
          </li>
          <li className="footer__nav-item">
            <a href="/" className="footer__nav-link">
              Shipping & Returns
            </a>
          </li>
          <li className="footer__nav-item">
            <a href="/" className="footer__nav-link">
              Privacy Policy
            </a>
          </li>
          <li className="footer__nav-item">
            <a href="/" className="footer__nav-link">
              Terms & Conditions
            </a>
          </li>
        </ul>
      </nav>

      <p>&copy; {currentYear} Handmade Soaps. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
