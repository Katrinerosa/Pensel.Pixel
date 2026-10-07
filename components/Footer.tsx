import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto bg-brand px-6 pt-16 pb-24 text-white sm:px-8 sm:pt-20 md:pb-10 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 border-b border-white/25 pb-14 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-5xl font-black tracking-[-0.04em] sm:text-7xl lg:text-8xl">
              Pensel & Pixel
            </p>
            <p className="mt-6 max-w-[680px] text-lg leading-relaxed text-white/85 sm:text-xl">
            </p>
          </div>

          <p className="font-mono text-xs leading-relaxed tracking-[0.12em] text-white/70 uppercase lg:col-span-4 lg:text-right">
            Founded and built by Katrine Rosa Beck
          </p>
        </div>

        <div className="grid gap-10 py-10 sm:grid-cols-3 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="font-mono text-xs font-semibold tracking-[0.14em] text-white/65 uppercase">
              Products
            </p>
            <ul className="mt-4 space-y-2 text-base text-white/95">
              <li>
                <a
                  href="https://readflow.dk"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-warm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warm"
                >
                  ReadFlow
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="font-mono text-xs font-semibold tracking-[0.14em] text-white/65 uppercase">
              Company
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-base text-white/95">
              <li>
                <Link href="/story" className="transition-colors hover:text-warm">
                  Story
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-warm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-warm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/#privacy" className="transition-colors hover:text-warm">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-5">
            <p className="font-mono text-xs font-semibold tracking-[0.14em] text-white/65 uppercase">
              Connect
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-3 text-white/95 lg:justify-end">
              <a
                href="https://www.instagram.com/katrinerosan/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex items-center gap-2 transition-colors hover:text-warm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warm"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3zm11.25 1.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
                </svg>
                <span>Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/in/katrine-rosa-beck-90b5769"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex items-center gap-2 transition-colors hover:text-warm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warm"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M6.94 8.5A1.72 1.72 0 115.2 6.78 1.72 1.72 0 016.94 8.5zM5.45 10h2.97v8.99H5.45zM10.23 10h2.84v1.23h.04c.4-.75 1.36-1.54 2.81-1.54 3 0 3.56 1.98 3.56 4.56v4.74h-2.96v-4.2c0-1 0-2.28-1.39-2.28s-1.61 1.09-1.61 2.21v4.27h-2.97z" />
                </svg>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/Katrinerosa"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex items-center gap-2 transition-colors hover:text-warm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warm"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.66-.22.66-.5v-1.76c-2.78.62-3.37-1.22-3.37-1.22-.45-1.2-1.12-1.52-1.12-1.52-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.88 1.55 2.31 1.1 2.88.85.08-.66.34-1.1.62-1.35-2.22-.26-4.55-1.15-4.55-5.11 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.32.1-2.75 0 0 .85-.28 2.78 1.06A9.43 9.43 0 0112 7.3c.85 0 1.7.12 2.5.36 1.93-1.34 2.78-1.06 2.78-1.06.55 1.43.2 2.49.1 2.75.64.72 1.03 1.64 1.03 2.77 0 3.98-2.34 4.84-4.57 5.1.36.32.67.94.67 1.89v2.8c0 .28.17.61.67.5A10.26 10.26 0 0022 12.25C22 6.6 17.52 2 12 2z" />
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        <p className="border-t border-white/15 pt-6 font-mono text-xs tracking-[0.08em] text-white/65">
          © 2026 Pensel & Pixel. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
