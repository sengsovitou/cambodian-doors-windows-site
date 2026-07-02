import "dotenv/config";
import { prisma } from "../lib/prisma";

async function main() {
  // Clear all related data first (respect foreign key order)
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.galleryItem.deleteMany();
  await prisma.projectImage.deleteMany();
  await prisma.galleryItem.deleteMany();
  await prisma.project.deleteMany();

  // Create categories
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

  // Create products
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

  // Create gallery items
  await prisma.galleryItem.createMany({
    data: [
      {
        url: "https://placehold.co/800x600/1a1a1a/white?text=Sliding+Door",
        title: "Sliding Door Installation",
        category: "Aluminum Doors",
      },
      {
        url: "https://placehold.co/800x600/1a1a1a/white?text=Glass+Office",
        title: "Office Glass Partition",
        category: "Office Glass",
      },
      {
        url: "https://placehold.co/800x600/1a1a1a/white?text=Shower+Glass",
        title: "Shower Glass Enclosure",
        category: "Shower Glass",
      },
      {
        url: "https://placehold.co/800x600/1a1a1a/white?text=Window+Frame",
        title: "Aluminum Window Frame",
        category: "Sliding Windows",
      },
      {
        url: "https://placehold.co/800x600/1a1a1a/white?text=Tempered+Door",
        title: "Tempered Glass Door",
        category: "Tempered Glass Doors",
      },
      {
        url: "https://placehold.co/800x600/1a1a1a/white?text=Folding+Door",
        title: "Folding Door System",
        category: "Aluminum Doors",
      },
    ],
  });

  // Create projects
  await prisma.project.createMany({
    data: [
      {
        title: "Modern Villa Sliding Doors",
        description:
          "Full installation of aluminum sliding doors for a luxury villa in Phnom Penh",
        location: "Phnom Penh",
        beforeAfter: true,
      },
      {
        title: "Office Glass Partitions",
        description:
          "Custom tempered glass partitions for a corporate office space",
        location: "Siem Reap",
        beforeAfter: false,
      },
      {
        title: "Shophouse Aluminum Windows",
        description: "Complete window replacement for a 4-storey shophouse",
        location: "Phnom Penh",
        beforeAfter: true,
      },
    ],
  });
  await prisma.blogPost.deleteMany();
  await prisma.adminUser.deleteMany();

  const admin = await prisma.adminUser.create({
    data: {
      email: "admin@cmlwindows.com",
      name: "CML Admin",
      role: "ADMIN",
    },
  });

  await prisma.blogPost.createMany({
    data: [
      {
        title: "How to Choose the Right Aluminum Door for Your Home",
        slug: "how-to-choose-aluminum-door",
        content:
          "Choosing the right aluminum door involves considering several factors including security, aesthetics, and budget. Aluminum doors are known for their durability, low maintenance, and modern appearance. When selecting a door, consider the frame thickness, glass type, locking mechanism, and finish color that best suits your home's style.",
        published: true,
        authorId: admin.id,
      },
      {
        title: "Tempered Glass vs Regular Glass: What You Need to Know",
        slug: "tempered-glass-vs-regular-glass",
        content:
          "Tempered glass is up to four times stronger than regular glass and is required by building codes in many applications. When broken, it shatters into small rounded pieces rather than sharp shards, making it much safer. For doors, shower enclosures, and partitions, tempered glass is always the recommended choice.",
        published: true,
        authorId: admin.id,
      },
      {
        title: "5 Benefits of uPVC Windows for Cambodian Homes",
        slug: "benefits-of-upvc-windows",
        content:
          "uPVC windows offer excellent thermal and sound insulation, making them ideal for Cambodia's hot and noisy urban environment. They are highly resistant to moisture, termites, and UV damage. Unlike aluminum, uPVC does not conduct heat, keeping your home cooler and reducing air conditioning costs significantly.",
        published: true,
        authorId: admin.id,
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
