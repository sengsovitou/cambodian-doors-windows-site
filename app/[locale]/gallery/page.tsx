import { prisma } from "@/lib/prisma";
import Link from "next/link";

export const dynamic = "force-dynamic";

interface PageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function GalleryPage({ searchParams }: PageProps) {
  const resolvedParams = await searchParams;
  const currentCategory = resolvedParams.category || "All";

  const allItems = await prisma.galleryItem.findMany({
    select: { category: true },
  });

  // Explicit type cast to eliminate null type
  const categories = [
    "All",
    ...Array.from(
      new Set(allItems.map((i) => i.category).filter(Boolean) as string[]),
    ),
  ];

  const items = await prisma.galleryItem.findMany({
    where: currentCategory !== "All" ? { category: currentCategory } : {},
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="min-h-screen bg-neutral-950 text-white px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Gallery</h1>
        <p className="text-neutral-400 mb-8">
          Browse our completed installations and projects.
        </p>

        <div className="flex flex-wrap gap-2 mb-10 border-b border-neutral-800 pb-5">
          {categories.map((category) => {
            const isActive = currentCategory === category;
            return (
              <Link
                key={category}
                href={
                  category === "All"
                    ? "/gallery"
                    : `/gallery?category=${encodeURIComponent(category)}`
                }
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-white text-black"
                    : "bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800"
                }`}
              >
                {category}
              </Link>
            );
          })}
        </div>

        {items.length === 0 ? (
          <p className="text-neutral-500 text-center py-12">
            No items found in this category.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-600 transition-colors"
              >
                <img
                  src={item.url}
                  alt={item.title ?? "Gallery image"}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  {item.category && (
                    <span className="text-xs uppercase tracking-wide text-neutral-500">
                      {item.category}
                    </span>
                  )}
                  {item.title && (
                    <h3 className="text-white font-medium mt-1">
                      {item.title}
                    </h3>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
