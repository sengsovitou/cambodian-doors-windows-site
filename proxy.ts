import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect admin routes
  if (
    pathname.match(/\/[^/]+\/admin/) &&
    !pathname.match(/\/[^/]+\/admin\/login/)
  ) {
    const sessionToken = request.cookies.get(
      "better-auth.session_token",
    )?.value;
    if (!sessionToken) {
      const locale = pathname.split("/")[1];
      return NextResponse.redirect(
        new URL(`/${locale}/admin/login`, request.url),
      );
    }
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
