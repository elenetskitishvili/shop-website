import { Link } from "@/src/i18n/routing";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-yellow-200">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-500 animate-fade-in-down">
          Welcome to OmniShop!
        </h1>
        <p className="mt-4 mb-14 text-3xl text-gray-800">
          Discover amazing products and shop with ease.
        </p>
        <Link
          href="/products"
          className="px-9 py-5 mt-10 text-2xl font-semibold text-white bg-green-500 rounded-full shadow-lg hover:bg-green-600 hover:scale-105 transition-transform duration-300"
        >
          Start Shopping
        </Link>
      </div>
    </main>
  );
}
