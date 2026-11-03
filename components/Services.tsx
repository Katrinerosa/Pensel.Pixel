import Link from "next/link";

const services = [
  { title: "Web Development", description: "Custom websites, responsive design and frontend development.", colour: "bg-soft" },
  { title: "Illustration & Design", description: "Original illustrations, visual storytelling and digital assets.", colour: "bg-pink" },
  { title: "EdTech & Accessibility", description: "Inclusive learning experiences, reading tools and accessible UI.", colour: "bg-[var(--rf-sky)]" },
];

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="bg-warm px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1240px]">
        <p className="font-mono text-xs font-semibold tracking-[0.12em] text-brand uppercase">What I can do for you</p>
        <h2 id="services-title" className="mt-4 text-4xl font-black tracking-[-0.04em] text-brand sm:text-6xl">Creative services.</h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/75">Thoughtful digital experiences, from first idea to finished product.</p>
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <article key={service.title} className={`min-w-0 rounded-[var(--rf-radius-md)] p-7 sm:p-8 ${service.colour}`}>
              <p className="font-mono text-xs font-semibold text-brand" aria-hidden="true">0{index + 1}</p>
              <h3 className="mt-7 text-2xl font-bold leading-tight text-brand">{service.title}</h3>
              <p className="mt-4 text-base leading-7 text-ink">{service.description}</p>
            </article>
          ))}
        </div>
        <Link href="/contact" className="rf-button rf-button--primary mt-8">Discuss your project <span aria-hidden="true">↗</span></Link>
      </div>
    </section>
  );
}
