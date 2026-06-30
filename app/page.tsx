import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

export default async function Home() {
  const products = await prisma.product.findMany({
    include: { category: true },
  });

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="px-8 py-24 text-center border-b border-neutral-800">
        <h1 className="text-5xl font-bold tracking-tight mb-4">
          Premium Doors & Windows
        </h1>
        <p className="text-neutral-400 text-lg max-w-xl mx-auto">
          Crafted aluminum, glass, and custom installations for modern Cambodian
          homes and businesses.
        </p>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-600 transition-colors"
            >
              <span className="text-xs uppercase tracking-wide text-neutral-500">
                {product.category.name}
              </span>
              <h3 className="text-xl font-semibold mt-2 mb-2">
                {product.name}
              </h3>
              <p className="text-neutral-400 text-sm">{product.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
