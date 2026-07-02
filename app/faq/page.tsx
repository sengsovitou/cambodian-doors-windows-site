import Link from "next/link";

export default function FAQPage() {
  const faqs = [
    {
      question: "What materials do you use for doors and windows?",
      answer:
        "We use premium aluminum alloy profiles and high-quality tempered glass. All materials meet international standards for durability, weather resistance, and safety.",
    },
    {
      question: "Do you provide custom sizing?",
      answer:
        "Yes, all our products are custom-made to your exact measurements. Our team will visit your site to take precise measurements before fabrication begins.",
    },
    {
      question: "How long does installation take?",
      answer:
        "Installation time depends on the scope of the project. A single door or window typically takes 1-2 hours. Larger projects such as full-building installations may take several days.",
    },
    {
      question: "Do you offer a warranty?",
      answer:
        "Yes, we provide a warranty on all products and installations. Aluminum frames carry a 5-year warranty and tempered glass carries a 2-year warranty against manufacturing defects.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We serve all provinces across Cambodia, with our main base in Phnom Penh. Additional travel fees may apply for projects outside Phnom Penh.",
    },
    {
      question: "How do I get a quote?",
      answer:
        "You can request a quote through our website by visiting the Quote Request page, or contact us directly via phone, Telegram, or WhatsApp. We will respond within 24 hours.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept ABA Bank transfer, ACLEDA Bank transfer, Wing transfer, ABA KHQR, and cash payment. A deposit is required before fabrication begins.",
    },
    {
      question: "Can I see samples before ordering?",
      answer:
        "Yes, you are welcome to visit our showroom in Phnom Penh to view material samples, color options, and completed product demonstrations.",
    },
    {
      question: "Do you handle both supply and installation?",
      answer:
        "Yes, we handle the full process from measurement and fabrication to delivery and professional installation. We also offer supply-only options if you have your own installation team.",
    },
    {
      question: "What colors and finishes are available?",
      answer:
        "We offer a wide range of powder-coated aluminum finishes including white, black, silver, bronze, champagne, and wood grain. Custom colors are available on request.",
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-950 text-white px-8 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Frequently Asked Questions</h1>
        <p className="text-neutral-400 text-lg mb-12">
          Everything you need to know about our products and services.
        </p>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-neutral-900 border border-neutral-800 rounded-xl p-6"
            >
              <h3 className="text-white font-semibold mb-2">{faq.question}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-neutral-900 border border-neutral-800 rounded-xl p-8 text-center">
          <h2 className="text-xl font-semibold mb-3">Still have questions?</h2>
          <p className="text-neutral-400 mb-6">
            Contact us directly and we will be happy to help.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-neutral-200 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
