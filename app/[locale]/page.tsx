import Link from "next/link";

export const dynamic = "force-dynamic";

const mockProducts = [
  {
    id: "1",
    name: "Premium Aluminum Sliding Door",
    slug: "premium-aluminum-sliding-door",
    description: "Sleek sliding door for modern homes",
    category: { name: "Aluminum Doors" },
  },
  {
    id: "2",
    name: "Modern Sliding Window",
    slug: "modern-sliding-window",
    description: "Energy-efficient aluminum frame window",
    category: { name: "Sliding Windows" },
  },
  {
    id: "3",
    name: "Frameless Tempered Glass Door",
    slug: "frameless-tempered-glass-door",
    description: "Minimalist design for offices",
    category: { name: "Tempered Glass Doors" },
  },
];

export default async function Home() {
  const products = mockProducts;

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="px-8 py-24 text-center border-b border-neutral-800">
        <h1 className="text-5xl font-bold tracking-tight mb-4">
          Premium Doors & Windows
        </h1>
        <p className="text-neutral-400 text-lg max-w-xl mx-auto mb-8">
          Crafted aluminum, glass, and custom installations for modern Cambodian
          homes and businesses.
        </p>
        <Link
          href="quote-request"
          className="inline-block bg-white text-black font-semibold px-8 py-3 rounded-lg hover:bg-neutral-200 transition-colors"
        >
          Get a Free Quote
        </Link>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`products/${product.slug}`}
              className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-600 transition-colors block"
            >
              <span className="text-xs uppercase tracking-wide text-neutral-500">
                {product.category.name}
              </span>
              <h3 className="text-xl font-semibold mt-2 mb-2">
                {product.name}
              </h3>
              <p className="text-neutral-400 text-sm">{product.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
