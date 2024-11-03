export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-zinc-400 p-5 text-center text-xl flex flex-col gap-6 shadow-md">
      <nav>
        <ul className="flex gap-10 items-center justify-center">
          <li>
            <a
              href="/"
              className="font-heading text-3xl font-medium text-emerald-500 transition-all duration-300 ease-in-out hover:text-emerald-600"
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              href="/"
              className="font-heading text-3xl font-medium text-emerald-500 transition-all duration-300 ease-in-out hover:text-emerald-600"
            >
              Shipping & Returns
            </a>
          </li>
          <li>
            <a
              href="/"
              className="font-heading text-3xl font-medium text-emerald-500 transition-all duration-300 ease-in-out hover:text-emerald-600"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/"
              className="font-heading text-3xl font-medium text-emerald-500 transition-all duration-300 ease-in-out hover:text-emerald-600"
            >
              Terms & Conditions
            </a>
          </li>
        </ul>
      </nav>

      <p>&copy; {currentYear} OmniShop. All rights reserved.</p>
    </footer>
  );
}
