import { NextResponse } from "next/server";
import { createClient } from "@/src/utils/supabase/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/";
  const locale = searchParams.get("locale") ?? "en";

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      const forwardedHost = request.headers.get("x-forwarded-host");
      const isLocalEnv = process.env.NODE_ENV === "development";

      if (isLocalEnv) {
        return NextResponse.redirect(`${origin}/${locale}${next}`);
      } else if (forwardedHost) {
        return NextResponse.redirect(
          `https://${forwardedHost}/${locale}${next}`
        );
      } else {
        return NextResponse.redirect(`${origin}/${locale}${next}`);
      }
    }
  }

  return NextResponse.redirect(`${origin}/${locale}/auth/auth-code-error`);
}
