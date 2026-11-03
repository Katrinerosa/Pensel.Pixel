import Link from "next/link";

const navItems = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#selected-work" },
  { label: "ReadFlow", href: "https://readflow.dk" },
  { label: "About", href: "/about" },
  { label: "Let's talk", href: "/contact" },
];

function MenuLink({ item, className }: { item: (typeof navItems)[number]; className: string }) {
  const content = <>{item.label}{item.href === "/contact" && <span aria-hidden="true"> ↗</span>}</>;
  // Native anchors also scroll when the current URL already has the same hash.
  if (item.href.startsWith("/#") || item.href.startsWith("https://")) {
    return <a href={item.href} className={className}>{content}</a>;
  }
  return <Link href={item.href} className={className}>{content}</Link>;
}

export default function Header() {
  return (
    <header className="relative z-30 bg-warm">
      <nav aria-label="Primary navigation" className="border-b border-brand/10">
        <div className="mx-auto flex min-h-24 max-w-[1240px] items-center justify-between gap-6 px-6 py-6 sm:min-h-28 sm:px-8 sm:py-7 lg:px-10">
          <Link href="/" aria-label="Pensel & Pixel — go to homepage" className="shrink-0 text-sm font-black tracking-[0.16em] uppercase focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:text-base">
            <span className="text-brand">Pensel</span>{" "}<span className="text-coral">&amp;</span>{" "}<span className="text-accent">Pixel</span>
          </Link>
          <ul className="hidden items-center gap-4 text-sm font-semibold text-brand md:flex lg:gap-7">
            {navItems.map((item) => (
              <li key={item.label}>
                <MenuLink item={item} className={item.href === "/contact" ? "rf-button rf-button--primary" : "inline-flex min-h-11 items-center border-b border-transparent transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"}
                />
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <nav aria-label="Mobile navigation" className="fixed inset-x-0 bottom-0 z-40 border-t border-brand/15 bg-warm/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden">
        <ul className="mx-auto grid max-w-[560px] grid-cols-5">
          {navItems.map((item) => (
            <li key={item.label}>
              <MenuLink item={item} className={`flex min-h-14 items-center justify-center gap-1 border-t-2 border-transparent px-1 py-3 text-center text-xs leading-tight font-semibold transition-colors focus-visible:border-accent focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-accent ${item.href === "/contact" ? "bg-brand text-white hover:bg-ink" : "text-ink hover:border-accent hover:text-brand"}`}
              />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
