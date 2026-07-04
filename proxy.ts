import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

export default function proxy(request: NextRequest) {
  // Skip i18n proxy for all API endpoints
  if (request.nextUrl.pathname.startsWith("/api/")) {
    return NextResponse.next();
  }
  return createMiddleware(routing)(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
