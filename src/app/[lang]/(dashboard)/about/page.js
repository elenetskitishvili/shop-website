export default function About() {
  return (
    <section className="max-w-screen-xl mx-auto pt-8 pb-6 grid grid-cols-[60fr_40fr] gap-36 items-center">
      <div>
        <h3 className="font-heading text-emerald-500 text-4xl">About Us</h3>
        <p className="mt-3 mb-7 text-2xl font-medium leading-9">
          Welcome to OmniShop, your ultimate destination for all things
          lifestyle. From gourmet foods to beauty products, stylish furniture,
          and more, we bring you everything you need under one roof.
        </p>

        <h3 className="font-heading text-emerald-500 text-4xl">Our Mission</h3>
        <p className="mt-3 mb-7 text-2xl font-medium leading-9">
          At OmniShop, our mission is to make shopping simple and enjoyable. We
          aim to offer the highest quality products across various categories,
          making it easy for you to find what you love.
        </p>

        <h3 className="font-heading text-emerald-500 text-4xl">
          What Makes Us Unique
        </h3>
        <ul className="mt-5 mb-7 text-2xl font-medium leading-9 flex flex-col gap-3">
          <li className="flex items-center gap-3">
            <i className=" text-emerald-500  fas fa-box-open"></i>
            <span>Wide variety of products for every need</span>
          </li>
          <li className="flex items-center gap-3">
            <i className="text-emerald-500 fas fa-star"></i>
            <span>Commitment to quality and customer satisfaction</span>
          </li>
          <li className="flex items-center gap-3">
            <i className="text-emerald-500  fas fas fa-headset"></i>
            <span>Exceptional customer support</span>
          </li>
        </ul>

        <h3 className="font-heading text-emerald-500 text-4xl">Our Story</h3>
        <p className="mt-3 mb-7 text-2xl font-medium leading-9">
          OmniShop started with a simple idea: to create a marketplace where
          everyone can find what they need easily and conveniently. Today, we’re
          proud to offer a diverse range of products that cater to all your
          lifestyle needs.
        </p>
      </div>
      <div className="justify-self-end rounded-xl shadow-lg overflow-hidden">
        <img
          className="block w-full"
          src="/images/about-image.jpg"
          alt="shopping bags, cart and gift card"
        />
      </div>
    </section>
  );
}
