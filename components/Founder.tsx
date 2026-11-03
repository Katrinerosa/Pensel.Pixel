import Link from "next/link";

export default function Founder({ showAboutLink = false }: { showAboutLink?: boolean }) {
  return (
    <section aria-labelledby="founder-title" className="bg-warm px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-[1240px] gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <p className="font-mono text-xs font-semibold tracking-[0.12em] text-brand uppercase">Katrine Rosa Beck</p>
          <h2 id="founder-title" className="mt-4 text-4xl font-black tracking-[-0.04em] text-brand sm:text-6xl">Meet the founder</h2>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <p className="max-w-2xl text-xl leading-relaxed text-ink sm:text-2xl">I&apos;m a web developer, illustrator and former teacher combining technology, creativity and inclusive design.</p>
          <div className="mt-7 flex flex-wrap gap-4">
            <a href="https://katrinerosa.com" className="rf-button rf-button--primary">Explore my developer portfolio <span aria-hidden="true">↗</span></a>
            {showAboutLink && <Link href="/about" className="rf-button rf-button--secondary">About the studio <span aria-hidden="true">→</span></Link>}
          </div>
        </div>
      </div>
    </section>
  );
}
