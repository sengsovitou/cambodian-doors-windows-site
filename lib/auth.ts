import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";

const rawUrl = process.env.BETTER_AUTH_URL?.trim();
const baseUrl =
  rawUrl && rawUrl.startsWith("http") ? rawUrl : "http://localhost:3000";

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET ?? "temp-fallback-secret-987654321",
  baseURL: baseUrl,
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
  },
});
