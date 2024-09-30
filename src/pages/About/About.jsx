import React from "react";
import "./About.css";

function About() {
  return (
    <main
      className="main main-about"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url('/images/bg-img-1.jpg')`,
      }}
    >
      <section className="section-about">
        <div className="section-about__content">
          <h3 className="heading-tertiary">About Us</h3>
          <p className="section-about__paragraph">
            Welcome to our Handmade Soaps! We are passionate about crafting
            natural, high-quality soaps that are gentle on your skin and kind to
            the environment.
          </p>

          <h3 className="heading-tertiary">Our Mission</h3>
          <p className="section-about__paragraph">
            We believe in the power of nature to nourish and heal. That's why we
            use only the finest, organic ingredients to create soaps that are
            free from harmful chemicals.
          </p>

          <h3 className="heading-tertiary">What Makes Us Unique</h3>
          <ul className="features">
            <li className="features__item">
              <i className=" features__icon features__icon--leaf fas fa-leaf"></i>
              <span>100% natural and organic ingredients</span>
            </li>
            <li className="features__item">
              <i className="features__icon features__icon--recycle fas fa-recycle"></i>
              <span>Cruelty-free and eco-friendly packaging</span>
            </li>
            <li className="features__item">
              <i className="features__icon features__icon--heart  fas fa-hand-holding-heart"></i>
              <span>Handcrafted with care</span>
            </li>
          </ul>

          <h3 className="heading-tertiary">Our Story</h3>
          <p className="section-about__paragraph">
            Our journey started with a desire to create skincare products that
            are not only effective but also safe for our planet. We began making
            soaps in our small kitchen, and today, our passion has grown into a
            brand that brings you the best of nature.
          </p>
        </div>
        <div className="section-about__image-container">
          <img src="/images/product-4.jpg" alt="Handmade Soaps" />
        </div>
      </section>
    </main>
  );
}

export default About;
