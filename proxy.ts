import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest } from "next/server";

export default function proxy(request: NextRequest) {
  // Skip proxy for all API routes to preserve better-auth endpoints
  if (request.nextUrl.pathname.startsWith("/api/")) {
    return NextResponse.next();
  }
  return createMiddleware(routing)(request);
}

// Update matcher to exclude /api
export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
