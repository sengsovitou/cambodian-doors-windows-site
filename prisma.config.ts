import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  datasource: {
    url: process.env.DATABASE_URL, // Read from Vercel's environment
  },
  migrations: {
    seed: "npx tsx ./prisma/seed.ts",
  },
});
