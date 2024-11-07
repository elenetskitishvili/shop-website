import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const locales = ["en", "ge"]; // Define supported locales
const defaultLocale = "en"; // Set the default locale

// Function to detect the preferred locale from request headers
function getLocale(request) {
  const negotiator = new Negotiator(request);
  const languages = negotiator.languages();
  return match(languages, locales, defaultLocale);
}

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Check if the URL already has a locale prefix
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // If no locale in URL, determine preferred locale and redirect
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

// Apply middleware to all routes except internal Next.js routes (e.g., _next)
export const config = {
  matcher: ["/((?!_next).*)"],
};
