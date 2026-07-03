import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Aluminum Door Installation",
      description:
        "Professional installation of sliding, swing, folding, and casement aluminum doors for residential and commercial properties.",
      icon: "🚪",
    },
    {
      title: "Aluminum Window Installation",
      description:
        "Custom aluminum window frames with energy-efficient glass options. Sliding, casement, and fixed window styles available.",
      icon: "🪟",
    },
    {
      title: "Tempered Glass Solutions",
      description:
        "Supply and installation of tempered glass for doors, partitions, railings, shower enclosures, and storefronts.",
      icon: "🔲",
    },
    {
      title: "Office Glass Partitions",
      description:
        "Modern frameless and framed glass partition systems for offices, meeting rooms, and commercial spaces.",
      icon: "🏢",
    },
    {
      title: "Shower Glass Enclosures",
      description:
        "Custom-fit tempered glass shower enclosures and screens. Clear, frosted, and tinted options available.",
      icon: "🚿",
    },
    {
      title: "Curtain Wall Systems",
      description:
        "Large-scale aluminum and glass curtain wall systems for commercial buildings and high-rise projects.",
      icon: "🏗️",
    },
    {
      title: "uPVC Doors & Windows",
      description:
        "Energy-efficient uPVC door and window systems with excellent sound and thermal insulation properties.",
      icon: "🔑",
    },
    {
      title: "Custom Installations",
      description:
        "Bespoke aluminum and glass solutions designed to your exact specifications. We handle measurement, fabrication, and installation.",
      icon: "⚙️",
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-950 text-white px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Our Services</h1>
        <p className="text-neutral-400 text-lg mb-12">
          From design to installation, we handle every step of your project.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-600 transition-colors"
            >
              <div className="text-3xl mb-3">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-semibold mb-3">
            Need a custom solution?
          </h2>
          <p className="text-neutral-400 mb-6">
            Tell us about your project and we will provide a tailored quote.
          </p>

          <Link
            href="/quote-request"
            className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-neutral-200 transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </main>
  );
}
