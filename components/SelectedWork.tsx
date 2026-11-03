import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    number: "01",
    title: "ReadFlow",
    category: "FEATURED PRODUCT · EDTECH",
    description:
      "An adaptive reading experience designed to make stories more accessible and engaging.",
    colour: "bg-soft",
    image: "/Wulfriclunaread.png",
    imageAlt: "Luna reading a book beside Wulfric, from the ReadFlow universe",
    href: "/readflow",
    cta: "View the case",
  },
  {
    number: "02",
    title: "Tarot",
    category: "INTERACTIVE · STATE · RANDOMISATION",
    description:
      "An illustrated experience exploring interaction, state and playful randomisation.",
    colour: "bg-pink",
    image: "/projects/tarot/the-fool.svg",
    imageAlt: "The Fool, an original illustrated card from the Tarot experience",
    href: "https://katrinerosa.com/tarot",
    cta: "Explore Tarot",
  },
  {
    number: "03",
    title: "Haunted House",
    category: "CREATIVE DEVELOPMENT · INTERACTION",
    description:
      "An atmospheric web experience combining illustration, interaction, sound and code.",
    colour: "bg-warm",
    image: "/projects/haunted-house/preview.jpg",
    imageAlt: "The illustrated haunted house from the interactive Haunted House experience",
    href: "https://katrinerosa.com/haunted-house",
    cta: "Enter the house",
  },
];

export default function SelectedWork() {
  return (
    <section
      id="selected-work"
      className="bg-canvas px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-col gap-5 border-b border-brand/20 pb-8 md:flex-row md:items-end md:justify-between">
          <h2 className="text-4xl font-black tracking-[-0.04em] text-brand sm:text-6xl">
            Selected Work
          </h2>
          <p className="max-w-[34rem] text-lg leading-relaxed text-ink/70">
            Digital experiences shaped by code, illustration and storytelling.
          </p>
        </div>

        <div className="grid gap-x-6 gap-y-14 pt-8 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.number} className="flex min-w-0 flex-col">
              <Link href={project.href} aria-label={project.title === "ReadFlow" ? "View the ReadFlow case" : `Explore ${project.title}`} className={`relative block aspect-[4/3] w-full overflow-hidden rounded-[var(--rf-radius-md)] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-coral ${project.colour}`}>
                <Image src={project.image} alt={project.imageAlt} fill sizes="(min-width: 1280px) 400px, (min-width: 768px) 32vw, calc(100vw - 48px)" className={project.title === "Haunted House" ? "object-cover" : "object-contain p-5"} />
              </Link>

              <div className="flex flex-1 flex-col pt-6">
                <p className="font-mono text-[0.68rem] font-semibold tracking-[0.15em] text-brand/65 uppercase">
                  {project.number} / {project.category}
                </p>
                <h3 className="mt-4 text-3xl font-black tracking-[-0.035em] text-brand">
                  {project.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-ink/70">
                  {project.description}
                </p>

                <div className="mt-auto pt-7">
                  {project.href ? (
                    <Link
                      href={project.href}
                      className="inline-flex border-b-2 border-coral pb-1 text-sm font-bold text-brand transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    >
                      {project.cta} <span aria-hidden="true">&nbsp;→</span>
                    </Link>
                  ) : (
                    <span className="inline-flex border-b-2 border-coral pb-1 text-sm font-bold text-brand">
                      {project.cta} <span aria-hidden="true">&nbsp;→</span>
                    </span>
                  )}
                  {project.title === "ReadFlow" && <a href="https://readflow.dk" className="ml-5 inline-flex min-h-11 items-center text-sm font-bold text-brand underline decoration-coral decoration-2 underline-offset-8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">Explore ReadFlow <span aria-hidden="true">&nbsp;↗</span></a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
