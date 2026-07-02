import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-neutral-400 text-lg mb-12">
          We are a Cambodian company specializing in premium aluminum doors,
          windows, tempered glass, and custom installations for homes and
          businesses.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-white mb-2">10+</div>
            <div className="text-neutral-400">Years Experience</div>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-neutral-400">Projects Completed</div>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-white mb-2">100%</div>
            <div className="text-neutral-400">Customer Satisfaction</div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-neutral-400 leading-relaxed">
            Founded in Phnom Penh, we have grown from a small local workshop
            into one of Cambodia's trusted suppliers of aluminum and glass
            solutions. Our team of skilled craftsmen and engineers bring
            precision and quality to every installation, from residential homes
            to large commercial buildings.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Premium quality materials from trusted brands",
              "Custom sizing and design for every project",
              "Professional installation by certified technicians",
              "Warranty on all products and installations",
              "Competitive pricing with flexible payment options",
              "After-sales support and maintenance services",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-neutral-900 border border-neutral-800 rounded-lg p-4"
              >
                <span className="text-green-400 mt-0.5">✓</span>
                <span className="text-neutral-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-semibold mb-3">
            Ready to start your project?
          </h2>
          <p className="text-neutral-400 mb-6">
            Contact us today for a free consultation and quote.
          </p>

          <Link
            href="/quote-request"
            className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-neutral-200 transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </main>
  );
}
