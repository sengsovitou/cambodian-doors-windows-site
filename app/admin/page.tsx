import { prisma } from "@/lib/prisma";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const [quotes, products, posts, gallery] = await Promise.all([
    prisma.quoteRequest.count(),
    prisma.product.count(),
    prisma.blogPost.count(),
    prisma.galleryItem.count(),
  ]);

  const recentQuotes = await prisma.quoteRequest.findMany({
    take: 5,
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="min-h-screen bg-neutral-950 text-white px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          
            href="/"
            className="text-sm text-neutral-400 hover:text-white transition-colors"
          >
            ← Back to Site
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Quote Requests", value: quotes, href: "/admin/quotes" },
            { label: "Products", value: products, href: "/admin/products" },
            { label: "Blog Posts", value: posts, href: "/admin/blog" },
            { label: "Gallery Items", value: gallery, href: "/admin/gallery" },
          ].map((stat) => (
            <Link
              key={stat.label}
              href={stat.href}
              className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-600 transition-colors text-center"
            >
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-neutral-400 text-sm">{stat.label}</div>
            </Link>
          ))}
        </div>

        {/* Recent Quotes */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Recent Quote Requests</h2>
            <Link
              href="/admin/quotes"
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              View all →
            </Link>
          </div>

          {recentQuotes.length === 0 ? (
            <p className="text-neutral-500 text-sm">No quote requests yet.</p>
          ) : (
            <div className="flex flex-col gap-3">
              {recentQuotes.map((quote) => (
                <div
                  key={quote.id}
                  className="flex items-center justify-between border border-neutral-800 rounded-lg p-4"
                >
                  <div>
                    <p className="font-medium">{quote.customerName}</p>
                    <p className="text-neutral-400 text-sm">{quote.phone}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        quote.status === "PENDING"
                          ? "bg-yellow-900 text-yellow-400"
                          : quote.status === "CONFIRMED"
                          ? "bg-green-900 text-green-400"
                          : "bg-neutral-800 text-neutral-400"
                      }`}
                    >
                      {quote.status}
                    </span>
                    <span className="text-xs text-neutral-500">
                      {new Date(quote.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[
            { label: "Manage Products", href: "/admin/products" },
            { label: "Manage Gallery", href: "/admin/gallery" },
            { label: "Manage Blog", href: "/admin/blog" },
            { label: "Manage Quotes", href: "/admin/quotes" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 text-center text-sm hover:border-neutral-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}