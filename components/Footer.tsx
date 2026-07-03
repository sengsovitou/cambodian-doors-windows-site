export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 px-8 py-8 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
        <p>© 2026 CML Doors & Windows. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-white transition-colors">
            Terms & Conditions
          </a>
          <a href="/faq" className="hover:text-white transition-colors">
            FAQ
          </a>
          <a href="/contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
