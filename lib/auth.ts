import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";

const envBaseUrl = process.env.BETTER_AUTH_URL;
const validBaseUrl =
  envBaseUrl && envBaseUrl.startsWith("http")
    ? envBaseUrl
    : "http://localhost:3000";

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET ?? "safe-fallback-secret-123456789",
  baseURL: validBaseUrl,
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
  },
});
