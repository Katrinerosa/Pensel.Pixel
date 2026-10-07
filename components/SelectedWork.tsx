import Link from "next/link";

const projects = [
  {
    number: "01",
    title: "ReadFlow",
    category: "PRODUCT · ADAPTIVE TECHNOLOGY",
    description:
      "An adaptive reading universe where children discover stories and read at their own pace.",
    colour: "bg-soft",
    href: "/readflow",
  },
  {
    number: "02",
    title: "Tarot",
    category: "INTERACTIVE · STATE · RANDOMISATION",
    description:
      "An illustrated experience exploring interaction, state and playful randomisation.",
    colour: "bg-[#d396a6]",
  },
  {
    number: "03",
    title: "Haunted House",
    category: "CREATIVE DEVELOPMENT · INTERACTION",
    description:
      "An atmospheric web experience combining illustration, interaction, sound and code.",
    colour: "bg-warm",
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
              <div
                className={"aspect-[4/3] w-full " + project.colour}
                aria-hidden="true"
              />

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
                      View project <span aria-hidden="true">&nbsp;→</span>
                    </Link>
                  ) : (
                    <span className="inline-flex border-b-2 border-coral pb-1 text-sm font-bold text-brand">
                      View project <span aria-hidden="true">&nbsp;→</span>
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
