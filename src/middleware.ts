import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { createClient } from "./utils/supabase/server"; // Ensure this uses server-side Supabase client logic

const restrictedPages = [
  "/en",
  "/en/about",
  "/en/blogs",
  "/en/contact",
  "/en/create-product",
  "/en/pricing",
  "/en/products",
  "/en/profile",
  "/ka",
  "/ka/about",
  "/ka/blogs",
  "/ka/contact",
  "/ka/create-product",
  "/ka/pricing",
  "/ka/products",
  "/ka/profile",
];

const authPages = [
  "/en/sign-in",
  "/en/sign-up",
  "/en/forgot-password",
  "/ka/sign-in",
  "/ka/sign-up",
  "/ka/forgot-password",
];

export default async function middleware(req: NextRequest) {
  // Create a server-side Supabase client
  const supabase = await createClient();

  // Call the default next-intl middleware
  const response = createMiddleware(routing)(req);

  // Validate user session from Supabase
  const { data: sessionData } = await supabase.auth.getSession();
  const session = sessionData?.session;

  const isAuthenticated = !!session; // Check if the session exists
  const currentPath = req.nextUrl.pathname;

  // Redirect authenticated users from auth-related pages to the home page
  if (authPages.includes(currentPath) && isAuthenticated) {
    const locale = currentPath.startsWith("/ka") ? "ka" : "en";
    const homeUrl = new URL(`/${locale}`, req.url);
    return NextResponse.redirect(homeUrl);
  }

  // Check if the requested page is restricted
  if (restrictedPages.includes(currentPath)) {
    if (!isAuthenticated) {
      const locale = currentPath.startsWith("/ka") ? "ka" : "en";
      const loginUrl = new URL(`/${locale}/sign-in`, req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Allow the request to proceed
  return response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ka|en)/:path*"],
};
