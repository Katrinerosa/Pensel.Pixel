import Image from "next/image";
import HeroHeading from "@/components/HeroHeading";

export default function Hero() {
  return (
    <section>
      <HeroHeading />

      <div className="w-full">
        <Image
          src="/Wulfriclunaread.png"
          alt="Luna reading with Wulfric"
          width={1600}
          height={980}
          priority
          sizes="100vw"
          className="mx-auto block h-auto w-full max-w-[1200px] object-contain"
        />
      </div>

      <section className="bg-white px-6 py-6 sm:px-8 sm:py-8">
        <div className="mx-auto max-w-[1466px]">
          <p className="text-2xl font-bold leading-[1.35] text-[#171717] sm:text-[2rem] text-center">
            Reading difficulties shouldn't interrupt great stories.
            <br />
            ReadFlow helps every reader stay in the flow-at every reading
            level.
          </p>
        </div>
      </section>

      <section className="bg-[#f7f4ee] px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-[980px] text-center">
          <p className="text-3xl font-black tracking-tight text-[#2f2b2f] sm:text-5xl">
           Stay in the flow.
          </p>

          <h2 className="mt-6 text-4xl font-black leading-[1.08] text-[#1f286c] sm:text-6xl">
            <span className="inline">
              When readers stay in the flow, they don't just read,
            </span>
            <br />
            <span className="inline">
              they experience the story.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-[900px] text-xl text-[#4f4a4f] sm:text-3xl">
            ReadFlow adapts to every reader, helping them stay engaged from the first page to the last.
          </p>

          <div className="mx-auto mt-10 w-full max-w-[860px] overflow-hidden rounded-2xl border border-black/15 shadow-[0_14px_36px_rgba(28,24,24,0.16)]">
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

          <p className="mx-auto mt-20 mb-14 w-full max-w-[860px] text-center text-4xl font-black leading-[1.08] text-[#1f286c] sm:text-6xl">
            Recognition & Support
          </p>

          <div className="mx-auto grid w-full max-w-[860px] gap-4 text-left sm:grid-cols-2">
            <article className="rounded-xl border border-[#1f286c]/20 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1f286c]">
                Kickstart Micro Grant
              </p>
              <p className="mt-2 text-2xl font-black text-[#1f2144]">DKK 25,000</p>
              <p className="mt-1 text-sm text-[#4f4a4f]">June 2025</p>
              <p className="mt-2 text-sm leading-relaxed text-[#2f2b2f]">
                Grant number: KS65-2025-02
              </p>
            </article>

            <article className="rounded-xl border border-[#1f286c]/20 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1f286c]">
                Micro Grant
              </p>
              <p className="mt-2 text-2xl font-black text-[#1f2144]">DKK 50,000</p>
              <p className="mt-1 text-sm text-[#4f4a4f]">December 2025</p>
              <p className="mt-2 text-sm leading-relaxed text-[#2f2b2f]">
                Grant number: ML68-2025-25
              </p>
            </article>
          </div>
        </div>
      </section>
    </section>
  );
}