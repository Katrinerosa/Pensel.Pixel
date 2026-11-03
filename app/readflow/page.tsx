import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "ReadFlow — EdTech case | Pensel & Pixel",
  description: "A reading experience shaped by storytelling, accessible design and creative development.",
};

const decisions = [
  { title: "Stories come first", description: "Large book covers and an illustrated world help readers find a story they want to explore. The route from the book to the reader stays simple." },
  { title: "A calm reading experience", description: "Readable typography, clear contrast and simple navigation support the reading experience. The illustrated universe respects reduced-motion preferences and lets visitors pause its animation." },
  { title: "Support without labels", description: "Books are presented as stories with multiple reading levels. The design avoids defining a whole book by a single difficulty label." },
];
const stack = [
  { title: "Product frontend", description: "Next.js · React · TypeScript" },
  { title: "Existing reader & content", description: "Vue · Directus" },
  { title: "Deployment", description: "Docker · Caddy · Hetzner" },
];

export default function ReadflowPage() {
  return (
    <main className="flex min-h-screen flex-col bg-canvas">
      <Header />
      <article>
        <header className="overflow-hidden px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold tracking-[0.12em] text-brand uppercase">Featured product · EdTech</p>
              <h1 className="mt-5 text-6xl font-black tracking-[-0.05em] text-brand sm:text-8xl">ReadFlow</h1>
              <p className="mt-7 max-w-xl text-xl leading-relaxed text-ink sm:text-2xl">An adaptive reading experience designed to make stories more accessible and engaging.</p>
              <a href="https://readflow.dk" className="rf-button rf-button--primary mt-8">Explore ReadFlow <span aria-hidden="true">↗</span></a>
              <p className="mt-5 max-w-xl text-sm leading-6 text-ink/75">A working reading prototype. Adaptive support and the chatbot are still in development.</p>
            </div>
            <Image src="/Wulfriclunaread.png" alt="Luna reading alongside Wulfric in the ReadFlow story universe" width={2974} height={2131} preload sizes="(min-width: 1024px) 50vw, calc(100vw - 48px)" className="h-auto w-full" />
          </div>
        </header>

        <section className="bg-soft px-6 py-20 sm:px-8 sm:py-24 lg:px-12">
          <div className="mx-auto grid max-w-[1240px] gap-8 lg:grid-cols-12 lg:gap-12">
            <h2 className="text-4xl font-black tracking-[-0.04em] text-brand sm:text-6xl lg:col-span-4">Keeping readers in the story.</h2>
            <div className="max-w-2xl text-lg leading-relaxed text-ink lg:col-span-7 lg:col-start-6">
              <p>ReadFlow is built for children and readers who may find it difficult to get started. The aim is to make choosing a book feel inviting, with support that leaves room for imagination and reading at your own pace.</p>
              <p className="mt-5">The current prototype connects the illustrated House of Dreamers universe to the existing reader, where visitors can open published Luna stories. The next stage explores adaptive reading support.</p>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-8 sm:py-24 lg:px-12">
          <div className="mx-auto max-w-[1240px]">
            <p className="font-mono text-xs font-semibold tracking-[0.12em] text-brand uppercase">UX & accessibility</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-brand sm:text-6xl">Small choices. Clear purpose.</h2>
            <div className="mt-9 grid gap-6 md:grid-cols-3">
              {decisions.map((decision) => (
                <section key={decision.title} className="rounded-[var(--rf-radius-md)] border border-brand/20 bg-white p-7">
                  <h3 className="text-2xl font-bold text-brand">{decision.title}</h3>
                  <p className="mt-4 text-base leading-7 text-ink/75">{decision.description}</p>
                </section>
              ))}
            </div>
            <div className="mt-12 grid items-center gap-8 rounded-[var(--rf-radius-md)] bg-warm p-6 sm:p-10 lg:grid-cols-2">
              <div className="grid grid-cols-2 items-center gap-5 sm:gap-8">
                <Image src="/projects/readflow/luna-is-finding-her-magic.webp" width={1410} height={2250} unoptimized alt="Cover of Luna Is Finding Her Magic" sizes="(min-width: 1024px) 250px, 40vw" className="h-auto w-full" />
                <Image src="/projects/readflow/luna-and-the-zombie.webp" width={1410} height={2250} unoptimized alt="Cover of Luna and the Zombie" sizes="(min-width: 1024px) 250px, 40vw" className="h-auto w-full" />
              </div>
              <div>
                <h3 className="text-3xl font-bold tracking-tight text-brand">An illustrated world, connected to a reader.</h3>
                <p className="mt-5 text-lg leading-relaxed text-ink/75">Original illustrations and book covers give House of Dreamers its identity. The product frontend leads readers into the stories, while the existing reader continues to load the book content.</p>
                <a href="https://readflow.dk/univers/house-of-dreamers" className="rf-button rf-button--secondary mt-6">Visit House of Dreamers <span aria-hidden="true">↗</span></a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-warm px-6 py-20 sm:px-8 sm:py-24 lg:px-12">
          <div className="mx-auto max-w-[1240px]">
            <h2 className="text-4xl font-black tracking-[-0.04em] text-brand sm:text-6xl">Built across design & code.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/75">The work combines product thinking, UX, original illustration and frontend development, connecting a new interface to the existing reading experience.</p>
            <dl className="mt-9 grid gap-6 md:grid-cols-3">
              {stack.map((item) => <div key={item.title} className="border-t border-brand/25 pt-5"><dt className="text-lg font-bold text-brand">{item.title}</dt><dd className="mt-3 text-base leading-7 text-ink/75">{item.description}</dd></div>)}
            </dl>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-8 sm:py-24 lg:px-12">
          <div className="mx-auto max-w-[1240px]">
            <h2 className="text-4xl font-black tracking-[-0.04em] text-brand sm:text-6xl">See ReadFlow</h2>
            <div className="relative mt-8 aspect-video overflow-hidden rounded-[var(--rf-radius-md)] bg-soft">
              <iframe className="absolute inset-0 h-full w-full" src="https://www.youtube-nocookie.com/embed/57-gOSlH7bk" title="ReadFlow explainer video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="https://readflow.dk" className="rf-button rf-button--primary">Explore ReadFlow <span aria-hidden="true">↗</span></a>
              <Link href="/contact" className="rf-button rf-button--secondary">Discuss your project <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </section>
      </article>
      <Footer />
    </main>
  );
}
