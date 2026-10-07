import Link from "next/link";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function ContactThanksPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f7f4ee]">
      <Header />

      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-[820px] rounded-3xl bg-white p-8 text-center shadow-[0_14px_36px_rgba(28,24,24,0.1)] sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1f286c]">
            Message sent
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-[#1f2144] sm:text-6xl">
            Thank you for your message
          </h1>
          <p className="mx-auto mt-6 max-w-[620px] text-lg leading-relaxed text-[#3f3d40] sm:text-2xl">
            We have received your message and will get back to you as soon as
            possible.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="rounded-full bg-[#1f286c] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#17205a]"
            >
              Back to home
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-[#1f286c]/30 px-6 py-3 text-base font-semibold text-[#1f286c] transition hover:border-[#1f286c] hover:bg-[#f2f5ff]"
            >
              Send another message
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
