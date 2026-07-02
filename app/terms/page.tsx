export default function TermsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white px-8 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Terms & Conditions</h1>
        <p className="text-neutral-500 text-sm mb-12">
          Last updated: July 2026
        </p>

        <div className="flex flex-col gap-8 text-neutral-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By using this website or placing an order with us, you agree to
              these terms and conditions. If you do not agree, please do not use
              our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              2. Quotations
            </h2>
            <p>
              All quotations provided through our website or by our team are
              valid for 30 days from the date of issue. Prices may change after
              this period due to material cost fluctuations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              3. Orders & Deposits
            </h2>
            <p>
              A deposit of 50% of the total project value is required before
              fabrication begins. The remaining balance is due upon completion
              of installation. Orders are only confirmed upon receipt of the
              deposit.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              4. Cancellations
            </h2>
            <p>
              Once fabrication has begun, cancellations are not accepted and
              deposits are non-refundable. If you need to make changes to your
              order, please contact us as soon as possible before production
              starts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              5. Warranty
            </h2>
            <p>
              Our products come with a manufacturer warranty covering defects in
              materials and workmanship. Warranty does not cover damage caused
              by misuse, improper maintenance, or natural disasters.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              6. Liability
            </h2>
            <p>
              We are not liable for any indirect or consequential damages
              arising from the use of our products or services beyond the value
              of the original order.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              7. Governing Law
            </h2>
            <p>
              These terms are governed by the laws of the Kingdom of Cambodia.
              Any disputes shall be resolved through negotiation or, if
              necessary, through the appropriate Cambodian legal channels.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
