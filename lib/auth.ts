import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";

const rawUrl = process.env.BETTER_AUTH_URL?.trim();
const baseUrl =
  rawUrl && rawUrl.startsWith("http") ? rawUrl : "http://localhost:3000";

const rawSecret = process.env.BETTER_AUTH_SECRET?.trim();
const safeSecret =
  rawSecret && rawSecret.length > 10
    ? rawSecret
    : "temp-fallback-secret-987654321";

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
