import ContactForm from "@/app/contact/contact-form";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const contactLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/katrinerosan/",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/katrine-rosa-beck-90b5769",
  },
  { label: "GitHub", href: "https://github.com/Katrinerosa" },
  { label: "ReadFlow.dk", href: "https://readflow.dk" },
];

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-canvas">
      <Header />

      <section className="px-6 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              Contact
            </p>
            <h1 className="mt-5 text-5xl font-black leading-[0.94] tracking-[-0.05em] text-brand sm:text-7xl">
              Let&apos;s connect
            </h1>
            <p className="mt-10 max-w-[650px] text-lg leading-relaxed text-ink sm:text-2xl">
              If you would like to collaborate, learn more about ReadFlow, or
              follow the journey, you can connect with Pensel & Pixel here:
            </p>

            <div className="mt-14 border-t border-brand/25">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between border-b border-brand/25 py-5 text-xl font-semibold text-ink transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:text-2xl"
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className="font-mono text-accent transition-transform group-hover:translate-x-1"
                  >
                    ↗
                  </span>
                </a>
              ))}
            </div>

            <p className="mt-10 font-mono text-xs leading-relaxed tracking-[0.08em] text-ink/65 uppercase sm:text-sm">
              Founded and built by Katrine Rosa Beck.
            </p>
          </div>

          <div className="bg-soft px-6 py-10 sm:px-10 sm:py-12 lg:col-span-6 lg:col-start-7 lg:px-12">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
