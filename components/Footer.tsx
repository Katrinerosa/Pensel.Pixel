import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-[#0A1F7A] px-6 py-14 text-white sm:py-16">
      <div className="mx-auto flex max-w-[1360px] flex-col items-center gap-4 text-center">
        <p className="text-base font-semibold sm:text-lg">Pensel & Pixel</p>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center justify-center gap-5 text-sm text-white/90 sm:gap-8 sm:text-base">
            <li>
              <Link href="/readflow" className="transition hover:text-white">
                ReadFlow
              </Link>
            </li>
            <li>
              <Link href="/story" className="transition hover:text-white">
                Story
              </Link>
            </li>
            <li>
              <a href="/#about" className="transition hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="/#contact" className="transition hover:text-white">
                Contact
              </a>
            </li>
            <li>
              <a href="/#privacy" className="transition hover:text-white">
                Privacy
              </a>
            </li>
          </ul>
        </nav>

        <p className="text-xs text-white/75 sm:text-sm">
          © {year} Pensel & Pixel. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
