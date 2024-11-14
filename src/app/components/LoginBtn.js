"use client";

export default function LoginButton() {
  return (
    <a
      href="/api/auth/login"
      className="py-3 px-8 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition duration-300"
    >
      Login
    </a>
  );
}
