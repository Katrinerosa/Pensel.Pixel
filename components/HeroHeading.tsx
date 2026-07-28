"use client";

import TypewriterTicker from "@/components/TypewriterTicker";

const manifesto =
  "Educational Technology • Illustration • Storytelling";

export default function HeroHeading() {
  return (
    <section className="w-full px-4 pt-[clamp(1.5rem,4vw,2.75rem)] pb-[clamp(0.75rem,2vw,1.25rem)] sm:px-6 lg:pt-[clamp(2rem,4vw,3.5rem)] lg:pb-[clamp(1rem,3vw,1.75rem)]">
      <TypewriterTicker
        text={manifesto}
        ariaLabel="Inclusivity statement"
        typingDelay={24}
        pauseDelay={500}
        repeat={false}
        viewportClassName="mx-auto max-w-[1900px] text-center"
      />
    </section>
  );
}