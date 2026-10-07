import Image from "next/image";

export default function Hero() {
  return (
    <section
      aria-labelledby="home-hero-title"
      className="relative min-h-[48rem] overflow-hidden bg-canvas lg:min-h-[46rem]"
    >
      <div className="relative mx-auto min-h-[inherit] max-w-[1466px] px-6 pt-16 sm:px-8 sm:pt-20 lg:flex lg:items-start lg:px-12 lg:pt-20 lg:pb-16">
        <div className="relative z-10 max-w-[40rem] lg:w-[46%]">
          <p className="font-mono text-xs font-semibold tracking-[0.18em] text-brand/65 uppercase sm:text-sm">
            WEB DEVELOPMENT · CREATIVE DEVELOPMENT · ILLUSTRATION
          </p>

          <h1
            id="home-hero-title"
            className="mt-7 max-w-[8ch] text-6xl font-black leading-[0.9] tracking-[-0.055em] text-brand sm:text-8xl lg:text-[7.5rem]"
          >
            Pensel <span className="text-coral">&amp;</span> Pixel
          </h1>

          <p className="mt-8 max-w-[28rem] text-xl leading-relaxed text-ink/75 sm:text-2xl">
            Websites and digital experiences shaped by code, illustration and storytelling.
          </p>
        </div>

        <Image
          src="/Wulfriclunaread.png"
          alt="Luna reading with Wulfric"
          width={2974}
          height={2131}
          priority
          sizes="(min-width: 1024px) 67vw, 145vw"
          className="relative z-0 mt-8 ml-auto -mr-[46%] h-auto w-[148%] max-w-none sm:-mr-[25%] sm:w-[112%] lg:absolute lg:right-[-6%] lg:bottom-[-1%] lg:mt-0 lg:mr-0 lg:w-[61%]"
        />
      </div>
    </section>
  );
}
