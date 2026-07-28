import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ReadflowPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f7f4ee]">
      <Header />

      <section className="px-6 py-14 sm:py-20">
        <div className="mx-auto max-w-[980px]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1f286c]">
            ReadFlow
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-[#1f2144] sm:text-6xl">
            Every reader deserves to stay immersed in the story.
          </h1>
          <p className="mt-8 text-xl leading-relaxed text-[#3f3d40] sm:text-2xl">
            Reading shouldn't stop because of a single difficult word.
          </p>

          <p className="mt-8 text-lg leading-relaxed text-[#3f3d40] sm:text-xl">
            ReadFlow is an adaptive digital reading platform that quietly
            responds to each reader's interactions, providing support exactly
            when it is needed so they can stay focused on the story, not the
            struggle.
          </p>

          <h2 className="mt-14 text-3xl font-black leading-tight text-[#1f286c] sm:text-5xl">
            Why ReadFlow?
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-[#3f3d40] sm:text-xl">
            Traditional reading tools often focus on helping readers decode
            words.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-[#3f3d40] sm:text-xl">
            ReadFlow focuses on something more:
          </p>

          <p className="mt-6 text-xl font-bold leading-relaxed text-[#1f2144] sm:text-2xl">
            Helping readers stay in the flow of reading.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-[#3f3d40] sm:text-xl">
            By adapting to each learner's needs, ReadFlow supports confidence,
            motivation and comprehension while preserving the joy of reading.
          </p>

          <div className="mt-10 mb-20 w-full overflow-hidden rounded-2xl border border-black/15 shadow-[0_14px_36px_rgba(28,24,24,0.16)]">
            <video
              className="block h-auto w-full"
              controls
              playsInline
              preload="metadata"
              aria-label="ReadFlow explainer video"
            >
              <source src="/Readflowexplain.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <h2 className="text-3xl font-black leading-tight text-[#1f286c] sm:text-5xl">
            Features
          </h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <article className="rounded-2xl border border-[#1f286c]/20 bg-white p-6">
              <h3 className="text-2xl font-bold text-[#1f2144] sm:text-3xl">
                Adaptive Reading
              </h3>
              <p className="mt-3 text-lg leading-relaxed text-[#3f3d40] sm:text-xl">
                Reading support that adapts to each learner&apos;s interactions and
                reading level.
              </p>
            </article>

            <article className="rounded-2xl border border-[#1f286c]/20 bg-white p-6">
              <h3 className="text-2xl font-bold text-[#1f2144] sm:text-3xl">
                Story-First Learning
              </h3>
              <p className="mt-3 text-lg leading-relaxed text-[#3f3d40] sm:text-xl">
                Beautifully illustrated stories that combine literacy,
                imagination and curriculum-based learning.
              </p>
            </article>

            <article className="rounded-2xl border border-[#1f286c]/20 bg-white p-6">
              <h3 className="text-2xl font-bold text-[#1f2144] sm:text-3xl">
                Accessible by Design
              </h3>
              <p className="mt-3 text-lg leading-relaxed text-[#3f3d40] sm:text-xl">
                Designed from the beginning with accessibility in mind-from
                typography and colour contrast to flexible reading support and
                personalised settings.
              </p>
            </article>

            <article className="rounded-2xl border border-[#1f286c]/20 bg-white p-6">
              <h3 className="text-2xl font-bold text-[#1f2144] sm:text-3xl">
                Built for Engagement
              </h3>
              <p className="mt-3 text-lg leading-relaxed text-[#3f3d40] sm:text-xl">
                Because the best reading happens when readers forget they are
                practising.
              </p>
            </article>
          </div>

          <h2 className="mt-12 text-3xl font-black leading-tight text-[#1f286c] sm:text-5xl">
            Looking Ahead
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[#3f3d40] sm:text-xl">
            ReadFlow is currently being developed as the first product from
            Pensel & Pixel.
          </p>
          <p className="mt-6 mb-20 text-lg leading-relaxed text-[#3f3d40] sm:text-xl">
            Our vision is to create an inclusive reading platform where
            technology quietly supports every reader-without interrupting the
            magic of a great story.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
