import React from "react";
import "./contact.css";

function Contact() {
  return (
    <section className="max-w-screen-xl mx-auto py-12 grid grid-cols-2 gap-20">
      <div className="w-full">
        <h2 className="font-heading text-5xl -tracking-tight font-medium text-emerald-500 mb-10">
          Reach Out to Us
        </h2>
        <form className="flex flex-col gap-8 items-start">
          <div className="w-full">
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="contact__input dark:bg-zinc-900 "
              placeholder="Full name"
              required
            />
            <label htmlFor="fullName" className="contact__form-label">
              Full name
            </label>
          </div>
          <div className="w-full">
            <input
              type="email"
              id="email"
              name="email"
              className="contact__input dark:bg-zinc-900 "
              placeholder="Email address"
              required
            />
            <label htmlFor="email" className="contact__form-label">
              Email address
            </label>
          </div>
          <div className="w-full">
            <input
              type="tel"
              id="phone"
              name="phone"
              className="contact__input dark:bg-zinc-900 "
              placeholder="Phone number"
              required
            />
            <label htmlFor="phone" className="contact__form-label">
              Phone number
            </label>
          </div>
          <div className="w-full">
            <input
              type="text"
              id="subject"
              name="subject"
              className="contact__input dark:bg-zinc-900 "
              placeholder="Subject"
              required
            />
            <label htmlFor="subject" className="contact__form-label">
              Subject
            </label>
          </div>
          <input
            type="submit"
            className="text-2xl py-5 px-10 rounded-xl cursor-pointer text-white bg-emerald-500 transition-all duration-300 ease-in-out hover:bg-emerald-600 dark:bg-emerald-800 dark:hover:bg-emerald-700"
            value="Submit"
          />
        </form>
      </div>
      <div className="mt-20">
        <h2 className="font-heading text-5xl -tracking-tight font-medium text-emerald-500 mb-10 ">
          Contact Us
        </h2>
        <p className="mb-10 text-3xl text-emerald-500">
          If you have any questions or inquiries, feel free to reach out to us!
        </p>
        <ul className="flex flex-col gap-8 items-start">
          <li className="flex items-center">
            <span className="text-3xl text-emerald-500 mr-4">Email:</span>
            <a href="mailto:contact@omnishop.com" className="text-inherit">
              contact@omnishop.com
            </a>
          </li>
          <li className="flex items-center">
            <span className="text-3xl text-emerald-500 mr-4">Phone:</span>
            <a href="tel:+995555123456" className="text-inherit">
              +995 555 123 456
            </a>
          </li>
          <li className="flex items-center">
            <span className="text-3xl text-emerald-500 mr-4">Address:</span> 12
            Sandalwood Street, Tbilisi, Georgia
          </li>
          <li className="flex items-center">
            <span className="text-3xl text-emerald-500 mr-4">Follow us:</span>
            <span className="flex items-center gap-6 pl-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl"
                aria-label="Pinterest"
              >
                <i className="fab fa-pinterest"></i>
              </a>
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
