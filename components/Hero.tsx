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
           Reading is more than decoding.
          </p>

          <h2 className="mt-6 text-4xl font-black leading-[1.08] text-[#1f286c] sm:text-6xl">
            <span className="inline">
              When readers stay in the flow, they don't just decode words,
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
            <div className="relative w-full pb-[56.25%]">
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

          <p className="mx-auto mt-20 mb-14 w-full max-w-[860px] text-center text-4xl font-black leading-[1.08] text-[#1f286c] sm:text-6xl">
            Recognition & Support
          </p>

          <div className="mx-auto w-full max-w-[860px] text-left">
            <p className="text-lg leading-relaxed text-[#2f2b2f] sm:text-2xl">
              Pensel & Pixel received two grants from the Danish Foundation for
              Entrepreneurship (FFE), supporting the development of ReadFlow
              (DKK 75,000 total).
            </p>
            <p className="mt-5 text-lg leading-relaxed text-[#2f2b2f] sm:text-2xl">
              For the CVR-based grant, required co-financing is paid by Pensel
              & Pixel.
            </p>

            <div className="mt-10 flex flex-col items-center text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#1f286c]/75">
                Supported by
              </p>
              <Image
                src="/Kickstart_Mikrolegat_logo_12.png"
                alt="Kickstart Mikrolegat"
                width={920}
                height={260}
                className="mt-4 h-auto w-[280px] object-contain sm:w-[340px]"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}