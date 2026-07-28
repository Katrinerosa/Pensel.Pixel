"use client";

import TypewriterTicker from "@/components/TypewriterTicker";

const manifesto =
  "Technology Stories Illustrations";

export default function HeroHeading() {
  return (
    <section className="w-full px-6 pt-14 pb-10 lg:pt-20 lg:pb-14">
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