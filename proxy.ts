import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Required default function export for next-intl proxy
export default function proxy(request) {
  return createMiddleware(routing)(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
