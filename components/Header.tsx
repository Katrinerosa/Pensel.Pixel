import Link from "next/link";

const navItems = [
  { label: "ReadFlow", href: "/readflow" },
  { label: "Story", href: "/story" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const mobileNavItems = [
  { label: "ReadFlow", href: "/readflow" },
  { label: "Story", href: "/story" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="relative z-30 bg-warm">
      <div className="bg-brand px-6 py-2.5 text-center text-xs font-semibold tracking-[0.08em] text-white sm:px-8 sm:text-sm">
        Siden er under ombygning.
      </div>

      <nav aria-label="Primary navigation" className="border-b border-brand/10">
        <div className="mx-auto flex min-h-24 max-w-[1240px] items-center justify-between gap-8 px-6 py-6 sm:min-h-28 sm:px-8 sm:py-7 lg:px-10">
          <Link
            href="/"
            aria-label="Pensel & Pixel — go to homepage"
            className="shrink-0 text-sm font-black tracking-[0.16em] uppercase focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:text-base"
          >
            <span className="text-brand">Pensel</span>{" "}
            <span className="text-coral">&amp;</span>{" "}
            <span className="text-accent">Pixel</span>
          </Link>

          <ul className="hidden items-center gap-7 text-sm font-semibold text-brand md:flex lg:gap-9">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="border-b border-transparent pb-1 transition-colors hover:border-accent hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <nav
        aria-label="Mobile navigation"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-brand/15 bg-warm/95 backdrop-blur md:hidden"
      >
        <ul className="mx-auto grid max-w-[560px] grid-cols-4">
          {mobileNavItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="block border-t-2 border-transparent px-2 py-4 text-center font-mono text-[0.7rem] font-semibold tracking-[0.08em] text-ink uppercase transition-colors hover:border-accent hover:text-brand focus-visible:border-accent focus-visible:outline-none"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
