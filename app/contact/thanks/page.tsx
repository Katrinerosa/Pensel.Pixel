import Link from "next/link";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function ContactThanksPage() {
  return (
    <main className="flex min-h-screen flex-col bg-canvas">
      <Header />

      <section className="px-6 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto grid max-w-[1240px] gap-10 border-y border-brand/20 bg-soft px-6 py-16 sm:px-12 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:px-16">
          <p className="font-mono text-xs font-semibold tracking-[0.2em] text-accent uppercase lg:col-span-3 lg:pt-3">
            Message sent
          </p>
          <div className="lg:col-span-8">
            <h1 className="text-5xl font-black leading-[0.98] tracking-[-0.04em] text-brand sm:text-7xl">
              Thank you for your message
            </h1>
            <p className="mt-8 max-w-[680px] text-lg leading-relaxed text-ink sm:text-2xl">
              We have received your message and will get back to you as soon as
              possible.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/"
                className="bg-brand px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                Back to home
              </Link>
              <Link
                href="/contact"
                className="border border-brand/30 px-7 py-3 text-base font-semibold text-brand transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                Send another message
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
