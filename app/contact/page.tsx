import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ContactForm from "@/app/contact/contact-form";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f7f4ee]">
      <Header />

      <section className="px-6 py-14 sm:py-20">
        <div className="mx-auto max-w-[980px]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1f286c]">
            Contact
          </p>

          <h1 className="mt-4 text-4xl font-black leading-tight text-[#1f2144] sm:text-6xl">
            Let&apos;s connect
          </h1>

          <p className="mt-8 text-lg leading-relaxed text-[#3f3d40] sm:text-2xl">
            If you would like to collaborate, learn more about ReadFlow, or
            follow the journey, you can connect with Pensel & Pixel here:
          </p>

          <ContactForm />

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <a
              href="https://www.instagram.com/katrinerosan/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-[#1f286c]/20 bg-white p-5 text-lg font-semibold text-[#1f2144] transition hover:border-[#1f286c] hover:bg-[#f2f5ff]"
            >
              Instagram
            </a>

            <a
              href="https://www.linkedin.com/in/katrine-rosa-beck-90b5769"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-[#1f286c]/20 bg-white p-5 text-lg font-semibold text-[#1f2144] transition hover:border-[#1f286c] hover:bg-[#f2f5ff]"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/Katrinerosa"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-[#1f286c]/20 bg-white p-5 text-lg font-semibold text-[#1f2144] transition hover:border-[#1f286c] hover:bg-[#f2f5ff]"
            >
              GitHub
            </a>

            <a
              href="https://readflow.dk"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-[#1f286c]/20 bg-white p-5 text-lg font-semibold text-[#1f2144] transition hover:border-[#1f286c] hover:bg-[#f2f5ff]"
            >
              ReadFlow.dk
            </a>
          </div>

          <p className="mt-10 mb-20 text-base leading-relaxed text-[#4f4a4f] sm:text-xl">
            Founded and built by Katrine Rosa Beck.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
