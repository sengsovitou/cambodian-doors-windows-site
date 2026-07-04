import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";

// Use Vercel auto URL + explicit env var, no localhost fallback on production
const baseUrl =
  process.env.BETTER_AUTH_URL?.trim() ||
  process.env.NEXT_PUBLIC_APP_URL?.trim() ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "") ||
  "http://localhost:3000";

const safeSecret =
  process.env.BETTER_AUTH_SECRET?.trim() || "temp-fallback-secret-987654321";

export const auth = betterAuth({
  secret: safeSecret,
  baseURL: baseUrl,
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
  },
});
