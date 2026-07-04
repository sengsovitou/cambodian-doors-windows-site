import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";

const safeSecret =
  process.env.BETTER_AUTH_SECRET?.trim() || "temp-fallback-secret-987654321";

export const auth = betterAuth({
  secret: safeSecret,
  baseURL: {
    allowedHosts: ["*.vercel.app"],
    protocol: "https",
  },
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
  },
});
