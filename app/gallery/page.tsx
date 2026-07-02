import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function GalleryPage() {
  const items = await prisma.galleryItem.findMany({
    orderBy: { createdAt: "desc" },
  });

  const categories = [
    "All",
    ...Array.from(new Set(items.map((i) => i.category).filter(Boolean))),
  ];

  return (
    <main className="min-h-screen bg-neutral-950 text-white px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Gallery</h1>
        <p className="text-neutral-400 mb-10">
          Browse our completed installations and projects.
        </p>

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
              />
              <div className="p-4">
                {item.category && (
                  <span className="text-xs uppercase tracking-wide text-neutral-500">
                    {item.category}
                  </span>
                )}
                {item.title && (
                  <h3 className="text-white font-medium mt-1">{item.title}</h3>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
