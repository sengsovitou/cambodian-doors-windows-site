export default function ContactPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-neutral-400 text-lg mb-12">
          Get in touch with our team for inquiries, quotes, or support.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-sm uppercase tracking-wide text-neutral-500 mb-3">
                Phone & Telegram
              </h3>

              <a
                href="tel:+85512345678"
                className="text-white text-lg hover:text-neutral-300 block mb-1"
              >
                +855 12 345 678
              </a>

              <a
                href="https://t.me/yourtelegram"
                className="text-neutral-400 hover:text-white text-sm"
              >
                Telegram: @yourtelegram
              </a>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-sm uppercase tracking-wide text-neutral-500 mb-3">
                Email
              </h3>

              <a
                href="mailto:info@yourbusiness.com"
                className="text-white hover:text-neutral-300"
              >
                info@yourbusiness.com
              </a>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-sm uppercase tracking-wide text-neutral-500 mb-3">
                Location
              </h3>
              <p className="text-neutral-300">Phnom Penh, Cambodia</p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-sm uppercase tracking-wide text-neutral-500 mb-3">
                Business Hours
              </h3>
              <p className="text-neutral-300">Monday – Saturday</p>
              <p className="text-neutral-400 text-sm">7:00 AM – 6:00 PM</p>
            </div>

            {/* Social / Messaging Links */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com/yourpage"
                className="flex-1 bg-blue-900 border border-blue-800 rounded-lg p-3 text-center text-sm hover:bg-blue-800 transition-colors"
              >
                Facebook
              </a>

              <a
                href="https://t.me/yourtelegram"
                className="flex-1 bg-sky-900 border border-sky-800 rounded-lg p-3 text-center text-sm hover:bg-sky-800 transition-colors"
              >
                Telegram
              </a>

              <a
                href="https://wa.me/85512345678"
                className="flex-1 bg-green-900 border border-green-800 rounded-lg p-3 text-center text-sm hover:bg-green-800 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-6">Send a Message</h2>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-sm text-neutral-400 mb-1">
                  Name
                </label>
                <input
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-lg p-3 text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-400 mb-1">
                  Phone
                </label>
                <input
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-lg p-3 text-white"
                  placeholder="+855 ..."
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-400 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-lg p-3 text-white"
                  placeholder="How can we help you?"
                />
              </div>

              <a
                href="/quote-request"
                className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-neutral-200 transition-colors text-center"
              >
                Request a Quote Instead
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
