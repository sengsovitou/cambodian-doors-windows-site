import { defineConfig } from "prisma/config";

export default defineConfig({
  migrate: {
    datasourceUrl: process.env.DATABASE_URL,
  },
  migrations: {
    seed: "npx tsx ./prisma/seed.ts",
  },
});
