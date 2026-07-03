import { prisma } from "@/lib/prisma";
import { submitQuoteRequest } from "../../actions/quote";

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

        <form
          action={submitQuoteRequest}
          encType="multipart/form-data"
          className="flex flex-col gap-5"
        >
          <div>
            <label className="block text-sm text-neutral-400 mb-1">
              Reference Photo (optional)
            </label>
            <input
              name="photo"
              type="file"
              accept="image/*"
              className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-neutral-400"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-neutral-400 mb-1">
                Width (cm)
              </label>
              <input
                name="width"
                type="number"
                step="0.1"
                className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3"
              />
            </div>
            <div>
              <label className="block text-sm text-neutral-400 mb-1">
                Height (cm)
              </label>
              <input
                name="height"
                type="number"
                step="0.1"
                className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-neutral-400 mb-1">
              Frame Type
            </label>
            <select
              name="frameType"
              className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3"
            >
              <option value="">Select frame type (optional)</option>
              <option value="Aluminum">Aluminum</option>
              <option value="uPVC">uPVC</option>
              <option value="Steel">Steel</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-neutral-400 mb-1">
              Glass Type
            </label>
            <select
              name="glassType"
              className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3"
            >
              <option value="">Select glass type (optional)</option>
              <option value="Clear Tempered">Clear Tempered</option>
              <option value="Frosted">Frosted</option>
              <option value="Tinted">Tinted</option>
              <option value="Laminated">Laminated</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-neutral-400 mb-1">
              Quantity
            </label>
            <input
              name="quantity"
              type="number"
              min="1"
              defaultValue="1"
              className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3"
            />
          </div>

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
