import Image from "next/image";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function StoryPage() {
  return (
    <main className="flex min-h-screen flex-col bg-canvas">
      <Header />

      <article>
        <header className="px-6 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28 lg:px-12">
          <div className="mx-auto grid max-w-[1240px] gap-8 lg:grid-cols-12 lg:gap-10">
            <p className="font-mono text-xs font-semibold tracking-[0.2em] text-accent uppercase lg:col-span-3 lg:pt-3">
              My Story
            </p>
            <div className="lg:col-span-9">
              <h1 className="max-w-[900px] text-5xl font-black leading-[0.98] tracking-[-0.04em] text-brand sm:text-7xl">
                The Story Behind Pensel & Pixel
              </h1>
              <div className="mt-12 max-w-[690px] border-l border-brand/25 pl-6 sm:pl-10">
                <p className="text-xl leading-relaxed text-ink sm:text-3xl">
                  Some of the best ideas start in ordinary moments.
                </p>
                <p className="mt-4 text-xl leading-relaxed text-ink sm:text-3xl">
                  Mine began during a JavaScript class.
                </p>
              </div>
            </div>
          </div>
        </header>

        <section className="bg-warm px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-12 lg:gap-16">
            <p className="max-w-[680px] text-lg leading-relaxed text-ink/85 sm:text-2xl lg:col-span-6">
              We were learning how software could respond to user interactions-how
              a program could react, adapt and change based on what the user did.
              As I listened, my mind wandered in a different direction.
            </p>

            <blockquote className="border-t-4 border-accent pt-7 lg:col-span-5 lg:col-start-8">
              <p className="text-3xl font-black leading-tight text-brand sm:text-5xl">
                What if a reading platform could respond to the reader in the
                same way?
              </p>
            </blockquote>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="bg-soft px-6 pt-10 sm:px-10 lg:col-span-5">
              <Image
                src="/LunaWulfricReading.png"
                alt="Luna reading alongside Wulfric"
                width={3000}
                height={4000}
                sizes="(min-width: 1024px) 38vw, 90vw"
                className="mx-auto h-auto max-h-[720px] w-auto max-w-full object-contain"
              />
            </div>

            <div className="max-w-[700px] lg:col-span-6 lg:col-start-7">
              <p className="text-lg leading-relaxed text-ink/85 sm:text-2xl">
                As a teacher, I had seen how easily reading could be interrupted.
                A single unfamiliar word could break concentration, confidence
                and the enjoyment of a story. At home, I saw the same struggle
                through my son, who has dyslexia. He worked incredibly hard to
                read, but he rarely experienced what many readers take for
                granted: the feeling of becoming completely absorbed in a story.
              </p>
              <p className="mt-10 text-2xl font-bold leading-relaxed text-brand sm:text-4xl">
                Reading became an exercise in decoding instead of discovering.
              </p>
              <p className="mt-8 font-mono text-sm font-semibold tracking-[0.08em] text-accent uppercase">
                That experience stayed with me.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 sm:px-8 sm:pb-32 lg:px-12">
          <div className="mx-auto grid max-w-[1240px] gap-10 border-t border-brand/20 pt-16 lg:grid-cols-12 lg:gap-16">
            <div className="max-w-[720px] lg:col-span-7 lg:col-start-3">
              <p className="text-lg leading-relaxed text-ink/85 sm:text-2xl">
                I started imagining a different kind of reading platform-one
                that could quietly respond to each reader&apos;s interactions,
                offering support exactly when it was needed, so they could
                continue reading without losing the flow of the story.
              </p>
              <p className="mt-10 text-3xl font-black text-brand sm:text-5xl">
                That idea became <strong>ReadFlow</strong>.
              </p>
              <p className="mt-10 text-lg leading-relaxed text-ink/85 sm:text-2xl">
                Today, ReadFlow is the first product from{" "}
                <strong>Pensel & Pixel</strong>, created with a simple belief:
              </p>
            </div>

            <p className="border-l-4 border-accent pl-6 text-3xl font-black leading-tight text-brand sm:pl-8 sm:text-5xl lg:col-span-8 lg:col-start-5 lg:mt-10">
              Every reader deserves the chance to stay immersed in the story.
            </p>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}
