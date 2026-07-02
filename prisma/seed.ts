import "dotenv/config";
import { prisma } from "../lib/prisma";

async function main() {
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  const categories = await Promise.all([
    prisma.category.create({
      data: { name: "Aluminum Doors", slug: "aluminum-doors" },
    }),
    prisma.category.create({
      data: { name: "Sliding Windows", slug: "sliding-windows" },
    }),
    prisma.category.create({
      data: { name: "Tempered Glass Doors", slug: "tempered-glass-doors" },
    }),
    prisma.category.create({
      data: { name: "Shower Glass", slug: "shower-glass" },
    }),
  ]);

  const [aluminumDoors, slidingWindows, temperedGlass, showerGlass] =
    categories;

  await prisma.product.createMany({
    data: [
      {
        name: "Premium Aluminum Sliding Door",
        slug: "premium-aluminum-sliding-door",
        description: "A sleek sliding door for modern homes",
        categoryId: aluminumDoors.id,
        colors: ["White", "Black", "Wood Grain"],
        sizes: ["1.5m x 2.1m", "2m x 2.1m"],
      },
      {
        name: "Heavy-Duty Aluminum Swing Door",
        slug: "heavy-duty-aluminum-swing-door",
        description: "Durable swing door built for high-traffic entrances",
        categoryId: aluminumDoors.id,
        colors: ["Silver", "Bronze"],
        sizes: ["0.9m x 2.1m", "1.2m x 2.1m"],
      },
      {
        name: "Modern Sliding Window",
        slug: "modern-sliding-window",
        description:
          "Smooth-glide aluminum frame window with energy-efficient glass",
        categoryId: slidingWindows.id,
        colors: ["White", "Grey"],
        sizes: ["1.2m x 1.2m", "1.5m x 1.2m"],
      },
      {
        name: "Frameless Tempered Glass Door",
        slug: "frameless-tempered-glass-door",
        description: "Minimalist frameless design for offices and showrooms",
        categoryId: temperedGlass.id,
        colors: ["Clear", "Frosted"],
        sizes: ["0.9m x 2.1m"],
      },
      {
        name: "Shower Glass Enclosure",
        slug: "shower-glass-enclosure",
        description: "Custom-fit tempered glass shower enclosure",
        categoryId: showerGlass.id,
        colors: ["Clear", "Tinted"],
        sizes: ["Custom"],
      },
    ],
  });

  console.log("✅ Seed data created successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
