export default function Header() {
  return (
    <header className="bg-neutral-950 border-b border-neutral-800 px-8 py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="/" className="text-lg font-bold text-white">
          CML Doors & Windows
        </a>
        <nav className="flex items-center gap-6 text-sm text-neutral-300">
          <a href="/" className="hover:text-white transition-colors">
            Home
          </a>
          <a href="/products" className="hover:text-white transition-colors">
            Products
          </a>
          <a href="/about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="/contact" className="hover:text-white transition-colors">
            Contact
          </a>
          <a
            href="/quote-request"
            className="hover:text-white transition-colors"
          >
            Get a Quote
          </a>
          <a href="/gallery" className="hover:text-white transition-colors">
            Gallery
          </a>
          <a href="/projects" className="hover:text-white transition-colors">
            Projects
          </a>
        </nav>
      </div>
    </header>
  );
}
