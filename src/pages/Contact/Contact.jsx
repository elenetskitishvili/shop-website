import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <main
      className="main main-contact"
      style={{
        backgroundImage: `linear-gradient(rgba(253, 253, 253, 0.9), rgba(253, 253, 253, 0.9)), url('/images/bg-img-2.jpg')`,
      }}
    >
      <section className="section-contact">
        <div className="section-contact__details">
          <h2 className="heading-secondary section-contact__title">
            Contact Us
          </h2>
          <p className="section-contact__text">
            If you have any questions or inquiries, feel free to reach out to
            us!
          </p>
          <ul className="contact__list">
            <li className="contact__item">
              <span className="contact__label">Email:</span>
              <a href="mailto:info@handmadesoaps.com" className="contact__link">
                info@handmadesoaps.com
              </a>
            </li>
            <li className="contact__item">
              <span className="contact__label">Phone:</span>
              <a href="tel:+995555123456" className="contact__link">
                +995 555 123 456
              </a>
            </li>
            <li className="contact__item">
              <span className="contact__label">Address:</span> 12 Sandalwood
              Street, Tbilisi, Georgia
            </li>
            <li className="contact__item">
              <span className="contact__label">Follow us:</span>
              <span className="contact__media-links">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__icon"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__icon"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__icon"
                  aria-label="YouTube"
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__icon"
                  aria-label="Pinterest"
                >
                  <i className="fab fa-pinterest"></i>
                </a>
              </span>
            </li>
          </ul>
        </div>

        <div className="contact__form-wrapper">
          <h2 className="heading-secondary section-contact__title">
            Reach Out to Us
          </h2>
          <form className="contact__form">
            <div className="contact__form-group">
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="contact__input"
                placeholder="Full name"
                required
              />
              <label htmlFor="fullName" className="contact__form-label">
                Full name
              </label>
            </div>
            <div className="contact__form-group">
              <input
                type="email"
                id="email"
                name="email"
                className="contact__input"
                placeholder="Email address"
                required
              />
              <label htmlFor="email" className="contact__form-label">
                Email address
              </label>
            </div>
            <div className="contact__form-group">
              <input
                type="tel"
                id="phone"
                name="phone"
                className="contact__input"
                placeholder="Phone number"
                required
              />
              <label htmlFor="phone" className="contact__form-label">
                Phone number
              </label>
            </div>
            <div className="contact__form-group">
              <input
                type="text"
                id="subject"
                name="subject"
                className="contact__input"
                placeholder="Subject"
                required
              />
              <label htmlFor="subject" className="contact__form-label">
                Subject
              </label>
            </div>
            <input type="submit" className="contact__submit" value="Submit" />
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;
