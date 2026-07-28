import Header from "@/components/Header";
import Footer from "@/components/Footer";

const features = [
  {
    title: "Adaptive Reading",
    text: "ReadFlow adjusts pacing and presentation to support each reader's confidence and comprehension.",
  },
  {
    title: "Story-First Learning",
    text: "Curriculum-aligned stories make literacy practice engaging without sacrificing educational depth.",
  },
  {
    title: "Accessible by Design",
    text: "Built with inclusion in mind, from clear typography to reader-friendly interaction patterns.",
  },
];

export default function ReadflowPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f7f4ee]">
      <Header />

      <section className="px-6 py-14 sm:py-20">
        <div className="mx-auto max-w-[1100px] text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1f286c]">
            ReadFlow
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-[#1f2144] sm:text-6xl">
            Reading support that keeps every learner in the story.
          </h1>
          <p className="mx-auto mt-6 max-w-[860px] text-lg text-[#4e4a50] sm:text-2xl">
            ReadFlow helps readers stay focused, build momentum, and enjoy books
            at their own level.
          </p>
        </div>
      </section>

      <section className="px-6 pb-12 sm:pb-16">
        <div className="mx-auto w-full max-w-[980px] overflow-hidden rounded-2xl border border-black/15 shadow-[0_14px_36px_rgba(28,24,24,0.16)]">
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
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-[1100px] gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-black/10 bg-white p-6"
            >
              <h2 className="text-2xl font-bold text-[#1f286c]">{feature.title}</h2>
              <p className="mt-3 text-base leading-relaxed text-[#3f3d40]">
                {feature.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
