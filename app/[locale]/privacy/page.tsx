export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white px-8 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-neutral-500 text-sm mb-12">
          Last updated: July 2026
        </p>

        <div className="flex flex-col gap-8 text-neutral-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              1. Information We Collect
            </h2>
            <p>
              When you submit a quote request or contact form on our website, we
              collect personal information including your name, phone number,
              email address, and project details. We may also collect photos you
              upload as reference images.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              2. How We Use Your Information
            </h2>
            <p>
              We use the information you provide solely to respond to your
              inquiries, prepare quotations, and communicate with you about your
              project. We do not sell, trade, or share your personal information
              with third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              3. Data Storage
            </h2>
            <p>
              Your information is stored securely on our servers. We retain your
              data only as long as necessary to fulfill your request or as
              required by law. You may request deletion of your data at any time
              by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              4. Cookies
            </h2>
            <p>
              Our website may use basic cookies to improve your browsing
              experience. We do not use cookies for advertising or tracking
              purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              5. Contact
            </h2>
            <p>
              If you have any questions about this privacy policy or how we
              handle your data, please contact us via our Contact page.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
