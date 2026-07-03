import { createAuthClient } from "better-auth/react";

// Use live site actual origin from browser, eliminates baked localhost in cached JS
const baseURL =
  typeof window !== "undefined"
    ? window.location.origin
    : process.env.NEXT_PUBLIC_APP_URL;

export const authClient = createAuthClient({
  baseURL,
});
