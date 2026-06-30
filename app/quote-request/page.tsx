import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { submitQuoteRequest } from "../actions/quote";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

export default async function QuoteRequestPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>;
}) {
  const { product: productSlug } = await searchParams;
  const products = await prisma.product.findMany();

  const preselected = productSlug
    ? products.find((p) => p.slug === productSlug)
    : null;

  return (
    <main className="min-h-screen bg-neutral-950 text-white px-8 py-16">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Request a Quote</h1>
        <p className="text-neutral-400 mb-10">
          Tell us what you need and we&apos;ll get back to you with pricing.
        </p>

        <form action={submitQuoteRequest} className="flex flex-col gap-5">
          <div>
            <label className="block text-sm text-neutral-400 mb-1">
              Product
            </label>
            <select
              name="productId"
              defaultValue={preselected?.id ?? ""}
              required
              className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3"
            >
              <option value="" disabled>
                Select a product
              </option>
              {products.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm text-neutral-400 mb-1">
              Full Name
            </label>
            <input
              name="customerName"
              required
              className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block text-sm text-neutral-400 mb-1">Phone</label>
            <input
              name="phone"
              required
              className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block text-sm text-neutral-400 mb-1">
              Email (optional)
            </label>
            <input
              name="email"
              type="email"
              className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block text-sm text-neutral-400 mb-1">
              Address
            </label>
            <input
              name="address"
              className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block text-sm text-neutral-400 mb-1">Notes</label>
            <textarea
              name="notes"
              rows={4}
              className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3"
            />
          </div>

          <button
            type="submit"
            className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-neutral-200 transition-colors"
          >
            Submit Request
          </button>
        </form>
      </div>
    </main>
  );
}
