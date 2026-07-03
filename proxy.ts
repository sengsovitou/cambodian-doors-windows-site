import { createAuthClient } from "better-auth/react";

const rawClientUrl = process.env.NEXT_PUBLIC_APP_URL?.trim();
// Prioritize production HTTPS URL first, only fall back to localhost locally
const clientBaseUrl =
  rawClientUrl && rawClientUrl.startsWith("https")
    ? rawClientUrl
    : "http://localhost:3000";

export const authClient = createAuthClient({
  baseURL: clientBaseUrl,
});
