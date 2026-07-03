import { prisma } from "@/lib/prisma";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AdminProductsPage() {
  const products = await prisma.product.findMany({
    include: { category: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="min-h-screen bg-neutral-950 text-white px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-3xl font-bold">Manage Products</h1>
          <Link
            href="/admin"
            className="text-sm text-neutral-400 hover:text-white transition-colors"
          >
            ← Dashboard
          </Link>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-800">
                <th className="text-left p-4 text-neutral-400 font-medium">
                  Name
                </th>
                <th className="text-left p-4 text-neutral-400 font-medium">
                  Category
                </th>
                <th className="text-left p-4 text-neutral-400 font-medium">
                  Featured
                </th>
                <th className="text-left p-4 text-neutral-400 font-medium">
                  Created
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="border-b border-neutral-800 last:border-0 hover:bg-neutral-800 transition-colors"
                >
                  <td className="p-4">
                    <Link
                      href={`/products/${product.slug}`}
                      className="hover:text-neutral-300"
                    >
                      {product.name}
                    </Link>
                  </td>
                  <td className="p-4 text-neutral-400">
                    {product.category.name}
                  </td>
                  <td className="p-4">
                    {product.featured ? (
                      <span className="text-green-400 text-xs">Yes</span>
                    ) : (
                      <span className="text-neutral-600 text-xs">No</span>
                    )}
                  </td>
                  <td className="p-4 text-neutral-500">
                    {new Date(product.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
