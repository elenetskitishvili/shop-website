import React from "react";
import "./about.css";

function About() {
  return (
    <main className="main main-about">
      <section className="section-about">
        <div className="section-about__content">
          <h3 className="heading-tertiary">About Us</h3>
          <p className="section-about__paragraph">
            Welcome to OmniShop, your ultimate destination for all things
            lifestyle. From gourmet foods to beauty products, stylish furniture,
            and more, we bring you everything you need under one roof.
          </p>

          <h3 className="heading-tertiary">Our Mission</h3>
          <p className="section-about__paragraph">
            At OmniShop, our mission is to make shopping simple and enjoyable.
            We aim to offer the highest quality products across various
            categories, making it easy for you to find what you love.
          </p>

          <h3 className="heading-tertiary">What Makes Us Unique</h3>
          <ul className="features">
            <li className="features__item">
              <i className=" features__icon  fas fa-box-open"></i>
              <span>Wide variety of products for every need</span>
            </li>
            <li className="features__item">
              <i className="features__icon fas fa-star"></i>
              <span>Commitment to quality and customer satisfaction</span>
            </li>
            <li className="features__item">
              <i className="features__icon  fas fas fa-headset"></i>
              <span>Exceptional customer support</span>
            </li>
          </ul>

          <h3 className="heading-tertiary">Our Story</h3>
          <p className="section-about__paragraph">
            OmniShop started with a simple idea: to create a marketplace where
            everyone can find what they need easily and conveniently. Today,
            we’re proud to offer a diverse range of products that cater to all
            your lifestyle needs.
          </p>
        </div>
        <div className="section-about__image-container">
          <img
            src="/images/about-image.jpg"
            alt="shopping bags, cart and gift card"
          />
        </div>
      </section>
    </main>
  );
}

export default About;
