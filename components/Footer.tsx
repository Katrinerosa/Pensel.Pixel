import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto bg-[#0A1F7A] px-6 py-14 text-white sm:py-16">
      <div className="mx-auto max-w-[1360px]">
        <p className="text-2xl font-semibold">Pensel & Pixel</p>
        <p className="mt-4 max-w-[640px] text-base leading-relaxed text-white/90 sm:text-lg">
          Empowering learning through educational technology, illustration and
          storytelling.
        </p>

        <div className="mt-10 grid gap-10 text-left sm:grid-cols-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/80">
              Products
            </p>
            <ul className="mt-4 space-y-2 text-base text-white/95">
              <li>
                <Link href="/readflow" className="transition hover:text-white">
                  ReadFlow
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/80">
              Company
            </p>
            <ul className="mt-4 space-y-2 text-base text-white/95">
              <li>
                <Link href="/story" className="transition hover:text-white">
                  Story
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <a href="/#privacy" className="transition hover:text-white">
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/80">
              Connect
            </p>
            <div className="mt-4 flex items-center gap-3 text-white/95">
              <a
                href="https://www.instagram.com/katrinerosan/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="rounded-full border border-white/30 p-2 transition hover:border-white hover:bg-white/10 hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3zm11.25 1.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
                </svg>
                <span className="sr-only">Instagram</span>
              </a>{" "}
              <a
                href="https://www.linkedin.com/in/katrine-rosa-beck-90b5769"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-white/30 p-2 transition hover:border-white hover:bg-white/10 hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M6.94 8.5A1.72 1.72 0 115.2 6.78 1.72 1.72 0 016.94 8.5zM5.45 10h2.97v8.99H5.45zM10.23 10h2.84v1.23h.04c.4-.75 1.36-1.54 2.81-1.54 3 0 3.56 1.98 3.56 4.56v4.74h-2.96v-4.2c0-1 0-2.28-1.39-2.28s-1.61 1.09-1.61 2.21v4.27h-2.97z" />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>{" "}
              <a
                href="https://github.com/Katrinerosa"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-full border border-white/30 p-2 transition hover:border-white hover:bg-white/10 hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.66-.22.66-.5v-1.76c-2.78.62-3.37-1.22-3.37-1.22-.45-1.2-1.12-1.52-1.12-1.52-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.88 1.55 2.31 1.1 2.88.85.08-.66.34-1.1.62-1.35-2.22-.26-4.55-1.15-4.55-5.11 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.32.1-2.75 0 0 .85-.28 2.78 1.06A9.43 9.43 0 0112 7.3c.85 0 1.7.12 2.5.36 1.93-1.34 2.78-1.06 2.78-1.06.55 1.43.2 2.49.1 2.75.64.72 1.03 1.64 1.03 2.77 0 3.98-2.34 4.84-4.57 5.1.36.32.67.94.67 1.89v2.8c0 .28.17.61.67.5A10.26 10.26 0 0022 12.25C22 6.6 17.52 2 12 2z" />
                </svg>
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
        </div>

        <p className="mt-12 text-sm text-white/90 sm:text-base">
          Founded and built by Katrine Rosa Beck
        </p>

        <p className="mt-4 text-xs text-white/75 sm:text-sm">
          © 2026 Pensel & Pixel. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
