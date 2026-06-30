import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  const category = await prisma.category.create({
    data: {
      name: "Sliding Doors",
      slug: "sliding-doors",
    },
  });

  await prisma.product.create({
    data: {
      name: "Premium Aluminum Sliding Door",
      slug: "premium-aluminum-sliding-door",
      description: "A sleek sliding door for modern homes",
      categoryId: category.id,
      colors: ["White", "Black", "Wood Grain"],
      sizes: ["1.5m x 2.1m", "2m x 2.1m"],
    },
  });

  console.log("Seed data created successfully");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
