import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "ReadFlow", href: "/readflow" },
  { label: "Story", href: "/story" },
  { label: "Projects", href: "/#projects" },
  { label: "Achievements", href: "/#achievements" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const mobileNavItems = [
  { label: "ReadFlow", href: "/readflow" },
  { label: "Story", href: "/story" },
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  return (
    <header>
      <div className="bg-[#262f77] px-6 py-8 text-white">
        <div className="mx-auto max-w-[1280px] text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Pensel & Pixel
          </h1>
          <p className="mt-2 text-base text-white/90 sm:text-2xl">
            Empowering learning through educational technology
          </p>
        </div>
      </div>

      <nav className="border-b border-black/10 bg-white">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-center gap-4 px-6 py-4 md:justify-between md:gap-6">
          <div className="flex items-center gap-3">
            <Link href="/" aria-label="Go to homepage">
              <Image
                src="/PenselLogo.svg"
                alt="Pensel & Pixel logo"
                width={250}
                height={68}
                className="h-14 w-auto"
                priority
              />
            </Link>
          </div>

          <ul className="hidden flex-wrap items-center gap-5 text-lg text-[#323232] md:flex md:gap-8 md:text-xl">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="transition hover:text-[#262f77]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-white/95 backdrop-blur md:hidden">
        <ul className="mx-auto grid max-w-[560px] grid-cols-5">
          {mobileNavItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="block px-2 py-3 text-center text-sm font-medium text-[#2e2e2e] transition hover:text-[#262f77]"
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
