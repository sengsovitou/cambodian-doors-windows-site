import { prisma } from "@/lib/prisma";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AdminGalleryPage() {
  const items = await prisma.galleryItem.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="min-h-screen bg-neutral-950 text-white px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-3xl font-bold">Manage Gallery</h1>
          <Link
            href="/admin"
            className="text-sm text-neutral-400 hover:text-white transition-colors"
          >
            ← Dashboard
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden"
            >
              <img
                src={item.url}
                alt={item.title ?? "Gallery item"}
                className="w-full h-32 object-cover"
              />
              <div className="p-3">
                <p className="text-sm font-medium truncate">{item.title}</p>
                <p className="text-xs text-neutral-500 truncate">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
