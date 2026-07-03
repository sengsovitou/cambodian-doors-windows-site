import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { notFound } from "next/navigation";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = await prisma.product.findUnique({
    where: { slug },
    include: { category: true },
  });

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-white px-8 py-16">
      <div className="max-w-3xl mx-auto">
        <a
          href="/products"
          className="text-neutral-500 text-sm hover:text-white"
        >
          ← Back to all products
        </a>

        <span className="block text-xs uppercase tracking-wide text-neutral-500 mt-6">
          {product.category.name}
        </span>
        <h1 className="text-3xl font-bold mt-2 mb-4">{product.name}</h1>
        <p className="text-neutral-400 text-lg mb-8">{product.description}</p>

        <div className="grid grid-cols-2 gap-6 mb-10">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
            <h3 className="text-sm uppercase tracking-wide text-neutral-500 mb-2">
              Available Colors
            </h3>
            <p className="text-white">{product.colors.join(", ")}</p>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
            <h3 className="text-sm uppercase tracking-wide text-neutral-500 mb-2">
              Available Sizes
            </h3>
            <p className="text-white">{product.sizes.join(", ")}</p>
          </div>
        </div>

        <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-neutral-200 transition-colors">
          Request a Quote
        </button>
      </div>
    </main>
  );
}
