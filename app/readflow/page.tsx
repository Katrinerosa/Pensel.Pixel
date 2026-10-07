import Image from "next/image";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

const features = [
  {
    number: "01",
    title: "Adaptive Reading",
    description:
      "Reading support that adapts to each learner's interactions and reading level.",
  },
  {
    number: "02",
    title: "Story-First Learning",
    description:
      "Beautifully illustrated stories that combine literacy, imagination and curriculum-based learning.",
  },
  {
    number: "03",
    title: "Accessible by Design",
    description:
      "Designed from the beginning with accessibility in mind-from typography and colour contrast to flexible reading support and personalised settings.",
  },
  {
    number: "04",
    title: "Built for Engagement",
    description:
      "Because the best reading happens when readers forget they are practising.",
  },
];

export default function ReadflowPage() {
  return (
    <main className="flex min-h-screen flex-col bg-canvas">
      <Header />

      <article>
        <header className="overflow-hidden bg-canvas px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-12 lg:items-center">
            <div className="relative z-10 lg:col-span-6">
              <p className="font-mono text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                Product · Adaptive technology
              </p>
              <h1 className="mt-6 max-w-[11ch] text-5xl font-black leading-[0.94] tracking-[-0.05em] text-brand sm:text-7xl">
                Every reader deserves to stay immersed in the story.
              </h1>
              <p className="mt-8 max-w-[31rem] text-xl leading-relaxed text-ink/75 sm:text-2xl">
                Reading shouldn&apos;t stop because of a single difficult word.
              </p>
            </div>

            <div className="relative min-h-[24rem] lg:col-span-6 lg:min-h-[36rem]">
              <Image
                src="/Wulfriclunaread.png"
                alt="Luna reading alongside Wulfric"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="scale-[1.15] object-contain object-center lg:scale-[1.3]"
              />
            </div>
          </div>
        </header>

        <section className="bg-soft px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-12 lg:gap-12">
            <h2 className="text-4xl font-black tracking-[-0.04em] text-brand sm:text-6xl lg:col-span-4">
              Why ReadFlow?
            </h2>

            <div className="max-w-[740px] lg:col-span-7 lg:col-start-6">
              <p className="text-xl leading-relaxed text-ink sm:text-2xl">
                ReadFlow is an adaptive digital reading platform that quietly
                responds to each reader&apos;s interactions, providing support
                exactly when it is needed so they can stay focused on the story,
                not the struggle.
              </p>
              <div className="mt-10 border-t border-brand/20 pt-8">
                <p className="text-lg leading-relaxed text-ink/75 sm:text-xl">
                  Traditional reading tools often focus on helping readers decode
                  words.
                </p>
                <p className="mt-5 text-lg leading-relaxed text-ink/75 sm:text-xl">
                  ReadFlow focuses on something more:
                </p>
                <p className="mt-6 text-2xl font-black leading-tight text-brand sm:text-4xl">
                  Helping readers stay in the flow of reading.
                </p>
                <p className="mt-7 text-lg leading-relaxed text-ink/75 sm:text-xl">
                  By adapting to each learner&apos;s needs, ReadFlow supports
                  confidence, motivation and comprehension while preserving the
                  joy of reading.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-canvas px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1240px]">
            <div className="mb-8 flex flex-col gap-4 border-b border-brand/20 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-4xl font-black tracking-[-0.04em] text-brand sm:text-6xl">
                See ReadFlow
              </h2>
              <p className="font-mono text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                Reading support in context
              </p>
            </div>
            <div className="relative aspect-video overflow-hidden bg-soft">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube-nocookie.com/embed/57-gOSlH7bk"
                title="ReadFlow explainer video"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="bg-canvas px-6 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
          <div className="mx-auto grid max-w-[1240px] gap-12 border-t border-brand/20 pt-12 lg:grid-cols-12 lg:gap-12">
            <div className="overflow-hidden bg-warm lg:col-span-5">
              <Image
                src="/LunaWulfricReading.png"
                alt="Luna reading a book while resting against Wulfric"
                width={3000}
                height={4000}
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="aspect-[4/5] h-full w-full object-cover object-[54%_82%]"
              />
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <h2 className="text-4xl font-black tracking-[-0.04em] text-brand sm:text-6xl">
                Features
              </h2>
              <div className="mt-8 border-t border-brand/20">
                {features.map((feature) => (
                  <article
                    key={feature.number}
                    className="grid gap-3 border-b border-brand/20 py-7 sm:grid-cols-[3rem_1fr] sm:gap-5"
                  >
                    <p className="font-mono text-xs font-semibold text-accent">
                      {feature.number}
                    </p>
                    <div>
                      <h3 className="text-2xl font-bold text-brand">
                        {feature.title}
                      </h3>
                      <p className="mt-3 text-base leading-7 text-ink/70">
                        {feature.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-warm px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-12 lg:gap-12">
            <h2 className="text-4xl font-black tracking-[-0.04em] text-brand sm:text-6xl lg:col-span-4">
              Looking Ahead
            </h2>
            <div className="max-w-[700px] lg:col-span-7 lg:col-start-6">
              <p className="text-xl leading-relaxed text-ink sm:text-2xl">
                ReadFlow is currently being developed as the first product from
                Pensel & Pixel.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-ink/75 sm:text-xl">
                Our vision is to create an inclusive reading platform where
                technology quietly supports every reader-without interrupting
                the magic of a great story.
              </p>
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}
