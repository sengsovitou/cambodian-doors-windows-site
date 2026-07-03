"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const languages = [
  { code: "en", label: "EN", full: "English" },
  { code: "km", label: "KM", full: "ខ្មែរ" },
  { code: "zh", label: "ZH", full: "中文" },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = pathname.split("/")[1] || "en";

  function switchLanguage(locale: string) {
    const segments = pathname.split("/");
    segments[1] = locale;
    router.push(segments.join("/"));
  }

  return (
    <header className="bg-neutral-950 border-b border-neutral-800 px-8 py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link
          href={`/${currentLocale}`}
          className="text-lg font-bold text-white"
        >
          CML Doors & Windows
        </Link>

        <nav className="flex items-center gap-6 text-sm text-neutral-300">
          <Link
            href={`/${currentLocale}`}
            className="hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            href={`/${currentLocale}/products`}
            className="hover:text-white transition-colors"
          >
            Products
          </Link>
          <Link
            href={`/${currentLocale}/services`}
            className="hover:text-white transition-colors"
          >
            Services
          </Link>
          <Link
            href={`/${currentLocale}/gallery`}
            className="hover:text-white transition-colors"
          >
            Gallery
          </Link>
          <Link
            href={`/${currentLocale}/projects`}
            className="hover:text-white transition-colors"
          >
            Projects
          </Link>
          <Link
            href={`/${currentLocale}/about`}
            className="hover:text-white transition-colors"
          >
            About
          </Link>
          <Link
            href={`/${currentLocale}/blog`}
            className="hover:text-white transition-colors"
          >
            Blog
          </Link>
          <Link
            href={`/${currentLocale}/contact`}
            className="hover:text-white transition-colors"
          >
            Contact
          </Link>

          <Link
            href={`/${currentLocale}/quote-request`}
            className="bg-white text-black text-xs font-semibold px-4 py-2 rounded-lg hover:bg-neutral-200 transition-colors"
          >
            Get a Quote
          </Link>

          <a
            href={`/${currentLocale}/payment`}
            className="hover:text-white transition-colors"
          >
            Payment
          </a>

          {/* Language Switcher */}
          <div className="flex items-center gap-1 border border-neutral-700 rounded-lg overflow-hidden">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchLanguage(lang.code)}
                className={`px-2 py-1 text-xs font-medium transition-colors ${
                  currentLocale === lang.code
                    ? "bg-white text-black"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
