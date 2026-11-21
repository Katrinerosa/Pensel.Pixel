import Link from "next/link";

const steps = [
  { title: "Tell me about your project", description: "We talk about your business, your visitors and what you need your website to do." },
  { title: "Agree on the scope", description: "You receive a proposal with the deliverables, price and timeline, so you can decide before the work starts." },
  { title: "Design, build and review", description: "I set the colour palette at the start of the project and carry it through the site. You see the design and build as they take shape." },
  { title: "Launch and handover", description: "We prepare the site for launch and agree on the handover, including how to update it and any ongoing support." },
];

export default function Process() {
  return (
    <section aria-labelledby="process-title" className="bg-soft px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1240px]">
        <p className="font-mono text-sm font-semibold tracking-[0.12em] text-brand uppercase">Working together</p>
        <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <h2 id="process-title" className="max-w-2xl text-4xl font-black tracking-[-0.04em] text-brand sm:text-6xl">A clear path from idea to website.</h2>
          <p className="max-w-sm text-lg leading-relaxed text-ink/75">You work directly with me, with room for questions and feedback along the way.</p>
        </div>
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.title} className="border-t-2 border-brand/25 pt-6">
              <h3 className="text-xl font-bold leading-snug text-brand">{step.title}</h3>
              <p className="mt-4 text-base leading-7 text-ink/80">{step.description}</p>
            </li>
          ))}
        </ol>
        <Link href="/contact" className="rf-button rf-button--primary mt-10">Tell me about your project</Link>
      </div>
    </section>
  );
}
