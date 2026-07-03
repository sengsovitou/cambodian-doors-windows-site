export default function PaymentPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white px-8 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Payment Methods</h1>
        <p className="text-neutral-400 text-lg mb-12">
          We accept multiple payment options for your convenience.
        </p>

        <div className="flex flex-col gap-6">
          {/* ABA KHQR */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-red-900 rounded-xl flex items-center justify-center text-2xl">
                📱
              </div>
              <div>
                <h3 className="text-xl font-semibold">ABA KHQR</h3>
                <p className="text-neutral-400 text-sm">
                  Scan to pay instantly
                </p>
              </div>
            </div>
            <div className="bg-neutral-800 rounded-lg p-4 text-center">
              <div className="w-48 h-48 bg-white mx-auto rounded-lg flex items-center justify-center text-neutral-400 text-sm">
                QR Code Here
              </div>
              <p className="text-neutral-500 text-xs mt-3">
                Merchant QR code will be displayed here
              </p>
            </div>
          </div>

          {/* ABA Bank Transfer */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-red-900 rounded-xl flex items-center justify-center text-2xl">
                🏦
              </div>
              <div>
                <h3 className="text-xl font-semibold">ABA Bank Transfer</h3>
                <p className="text-neutral-400 text-sm">Direct bank transfer</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Bank", value: "ABA Bank" },
                { label: "Account Name", value: "CML Doors & Windows" },
                { label: "Account Number", value: "000 123 456" },
                { label: "Currency", value: "USD / KHR" },
              ].map((item) => (
                <div key={item.label} className="bg-neutral-800 rounded-lg p-3">
                  <p className="text-neutral-500 text-xs mb-1">{item.label}</p>
                  <p className="text-white text-sm font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ACLEDA Bank Transfer */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center text-2xl">
                🏦
              </div>
              <div>
                <h3 className="text-xl font-semibold">ACLEDA Bank Transfer</h3>
                <p className="text-neutral-400 text-sm">Direct bank transfer</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Bank", value: "ACLEDA Bank" },
                { label: "Account Name", value: "CML Doors & Windows" },
                { label: "Account Number", value: "000 789 012" },
                { label: "Currency", value: "USD / KHR" },
              ].map((item) => (
                <div key={item.label} className="bg-neutral-800 rounded-lg p-3">
                  <p className="text-neutral-500 text-xs mb-1">{item.label}</p>
                  <p className="text-white text-sm font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Wing Transfer */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-yellow-900 rounded-xl flex items-center justify-center text-2xl">
                💸
              </div>
              <div>
                <h3 className="text-xl font-semibold">Wing Transfer</h3>
                <p className="text-neutral-400 text-sm">
                  Mobile money transfer
                </p>
              </div>
            </div>
            <div className="bg-neutral-800 rounded-lg p-4">
              <p className="text-neutral-500 text-xs mb-1">Wing Number</p>
              <p className="text-white text-lg font-semibold">
                +855 12 345 678
              </p>
            </div>
          </div>

          {/* Cash Payment */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-green-900 rounded-xl flex items-center justify-center text-2xl">
                💵
              </div>
              <div>
                <h3 className="text-xl font-semibold">Cash Payment</h3>
                <p className="text-neutral-400 text-sm">
                  Pay at our showroom or on delivery
                </p>
              </div>
            </div>
            <div className="bg-neutral-800 rounded-lg p-4">
              <p className="text-neutral-300 text-sm leading-relaxed">
                Cash payments are accepted at our showroom in Phnom Penh, or
                upon delivery and installation. A 50% deposit is required before
                fabrication begins.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-neutral-900 border border-neutral-800 rounded-xl p-6 text-center">
          <p className="text-neutral-400 text-sm">
            All bank account details and QR codes are placeholders. Real
            merchant credentials can be added without changing the page design.
          </p>
        </div>
      </div>
    </main>
  );
}
