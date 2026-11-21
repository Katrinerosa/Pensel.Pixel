import StudioImage from "@/components/StudioImage";
import Link from "next/link";

const projects = [
  {
    title: "Katrine Rosa — Portfolio",
    category: "PERSONAL PROJECT · WEBSITE",
    brief: "Bring development, illustration and interactive work together in one place.",
    contribution: "Visual design, frontend development and original illustration.",
    outcome: "A responsive portfolio with Danish and English pages, project stories and an image gallery.",
    colour: "bg-pink",
    image: null,
    imageAlt: "",
    href: "https://katrinerosa.com",
    cta: "Visit the portfolio",
  },
  {
    title: "ReadFlow",
    category: "OWN PRODUCT · LEARNING",
    brief: "Make it more inviting for children to choose a story and start reading.",
    contribution: "Product concept, UX and original illustrations. I built the Next.js frontend and connected it to the existing reader, which I maintain and continue to develop.",
    outcome: "A working reading prototype. Adaptive support and the chatbot are still in development.",
    colour: "bg-soft",
    image: "luna-reading",
    imageAlt: "Luna reading a book beside Wulfric, from the ReadFlow universe",
    href: "/readflow",
    cta: "Read the case",
  },
  {
    title: "Haunted House",
    category: "PERSONAL PROJECT · INTERACTIVE",
    brief: "Turn an illustrated house into a web experience visitors can explore.",
    contribution: "Illustration and creative frontend development, bringing interaction, animation and sound together.",
    outcome: "An interactive experiment showing how a visual story can become part of the interface.",
    colour: "bg-warm",
    image: "haunted-house",
    imageAlt: "The illustrated haunted house from the interactive Haunted House experience",
    href: "https://katrinerosa.com/haunted-house",
    cta: "Explore the house",
  },
] as const;

export default function SelectedWork() {
  return (
    <section id="selected-work" aria-labelledby="selected-work-title" className="bg-canvas px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-col gap-5 border-b border-brand/20 pb-8 md:flex-row md:items-end md:justify-between">
          <h2 id="selected-work-title" className="text-4xl font-black tracking-[-0.04em] text-brand sm:text-6xl">Selected work</h2>
          <p className="max-w-[34rem] text-lg leading-relaxed text-ink/70">A look at my own products and personal projects, and the thinking behind them.</p>
        </div>
        <div className="grid gap-x-6 gap-y-14 pt-8 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="flex min-w-0 flex-col">
              <Link href={project.href} aria-label={project.cta} className={`relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-[var(--rf-radius-md)] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-coral ${project.colour}`}>
                {project.image ? (
                  <StudioImage
                    image={project.image}
                    alt={project.imageAlt}
                    sizes="(min-width: 1280px) 400px, (min-width: 768px) 32vw, calc(100vw - 48px)"
                    className={project.image === "haunted-house"
                      ? "absolute inset-0 h-full w-full object-cover"
                      : "absolute inset-0 h-full w-full object-contain p-5"}
                  />
                ) : (
                  <div aria-hidden="true" className="flex h-full w-full flex-col justify-between p-7 text-brand sm:p-8">
                    <span className="text-sm font-semibold">Design · Code · Illustration</span>
                    <span className="text-[clamp(2rem,4vw,3.25rem)] font-black leading-none tracking-tight">Katrine<br />Rosa<span className="text-accent">.</span></span>
                    <span className="text-sm font-semibold">A personal portfolio</span>
                  </div>
                )}
              </Link>
              <div className="flex flex-1 flex-col pt-6">
                <p className="font-mono text-sm font-semibold tracking-[0.08em] text-brand/75 uppercase">{project.category}</p>
                <h3 className="mt-4 text-3xl font-black tracking-[-0.035em] text-brand">{project.title}</h3>
                <p className="mt-3 text-base leading-7 text-ink/80">{project.brief}</p>
                <dl className="mt-5 space-y-4 text-base leading-7">
                  <div><dt className="font-bold text-brand">My contribution</dt><dd className="mt-1 text-ink/75">{project.contribution}</dd></div>
                  <div><dt className="font-bold text-brand">The result</dt><dd className="mt-1 text-ink/75">{project.outcome}</dd></div>
                </dl>
                <div className="mt-auto pt-7">
                  <Link href={project.href} className="inline-flex min-h-11 items-center border-b-2 border-coral text-base font-bold text-brand transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">{project.cta}</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-brand/20 pt-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <div className="max-w-2xl">
            <h3 className="text-xl font-bold text-brand">A lighter Tarot experience</h3>
            <p className="mt-2 text-base leading-7 text-ink/75">I reduced the total size of the illustrated Tarot deck&apos;s images by 93% and made each card turn once its artwork is ready.</p>
          </div>
          <a href="https://katrinerosa.com/tarot" className="inline-flex min-h-11 shrink-0 items-center self-start font-semibold text-brand underline decoration-coral decoration-2 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:self-center">Try the Tarot project <span aria-hidden="true" className="ml-2">↗</span></a>
        </div>
      </div>
    </section>
  );
}
