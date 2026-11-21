import Link from "next/link";

const services = [
  {
    title: "A new website",
    description: "A clear, welcoming home for your business, shaped around what you do and the people you want to reach.",
    deliverables: ["Design and frontend development", "Layouts for mobile, tablet and desktop", "Contact forms, content setup and launch support"],
    colour: "bg-soft",
  },
  {
    title: "A better existing website",
    description: "Focused improvements when your website needs attention, whether that is one page or a frustrating user journey.",
    deliverables: ["React and Next.js pages and features", "Forms, navigation and mobile layouts", "Accessibility and performance improvements"],
    colour: "bg-pink",
  },
  {
    title: "Something more creative",
    description: "Original illustration and interactive details that give your project a personality of its own.",
    deliverables: ["Illustration and visual storytelling", "Interactive pages and web experiences", "Learning experiences informed by my teaching background"],
    colour: "bg-[var(--rf-sky)]",
  },
];

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="bg-warm px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1240px]">
        <p className="font-mono text-sm font-semibold tracking-[0.12em] text-brand uppercase">How I can help</p>
        <h2 id="services-title" className="mt-4 text-4xl font-black tracking-[-0.04em] text-brand sm:text-6xl">What does your website need?</h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/75">A new beginning, a practical improvement or a little more imagination. We agree on the scope before the work starts.</p>
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className={`min-w-0 rounded-[var(--rf-radius-md)] p-7 sm:p-8 ${service.colour}`}>
              <h3 className="text-2xl font-bold leading-tight text-brand">{service.title}</h3>
              <p className="mt-4 text-base leading-7 text-ink">{service.description}</p>
              <ul className="mt-6 space-y-3 border-t border-brand/15 pt-5 text-base leading-7 text-ink">
                {service.deliverables.map((item) => <li key={item} className="flex gap-3"><span aria-hidden="true" className="text-brand">✓</span><span>{item}</span></li>)}
              </ul>
            </article>
          ))}
        </div>
        <Link href="/contact" className="rf-button rf-button--primary mt-8">Discuss your website</Link>
      </div>
    </section>
  );
}
