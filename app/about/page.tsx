import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-canvas">
      <Header />

      <article>
        <header className="bg-canvas px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <p className="font-mono text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                About
              </p>
              <h1 className="mt-5 text-5xl font-black leading-[0.94] tracking-[-0.05em] text-brand sm:text-7xl">
                Pensel &amp; Pixel
              </h1>
            </div>

            <div className="max-w-[720px] border-t border-brand/20 pt-7 lg:col-span-7 lg:col-start-6 lg:mt-12">
              <p className="text-xl leading-relaxed text-ink sm:text-3xl">
                Pensel & Pixel is a creative digital studio combining web
                development, illustration and storytelling.
              </p>
              <p className="mt-7 text-lg leading-relaxed text-ink/75 sm:text-2xl">
                We create websites, interactive digital experiences and original
                products where technology and visual storytelling work together.
              </p>
            </div>
          </div>
        </header>

        <section className="bg-soft px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-12 lg:gap-12">
            <h2 className="text-4xl font-black tracking-[-0.04em] text-brand sm:text-6xl lg:col-span-4">
              Our Focus
            </h2>

            <div className="max-w-[720px] lg:col-span-7 lg:col-start-6">
              <p className="text-xl leading-relaxed text-ink sm:text-2xl">
                We work across web development, creative technology and
                illustration — from accessible websites and interactive
                experiences to our own digital products.
              </p>
              <p className="mt-7 border-t border-brand/20 pt-7 text-lg leading-relaxed text-ink/75 sm:text-xl">
                ReadFlow is our first educational technology product, exploring
                how adaptive technology can support readers without interrupting
                the story.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-warm px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-12 lg:gap-12">
            <h2 className="text-4xl font-black tracking-[-0.04em] text-brand sm:text-6xl lg:col-span-4">
              Founder
            </h2>

            <p className="max-w-[760px] text-xl leading-relaxed text-ink sm:text-3xl lg:col-span-7 lg:col-start-6">
              Pensel & Pixel was founded by Katrine Rosa Beck, a frontend
              developer, illustrator and former teacher working at the
              intersection of technology, visual storytelling and accessible
              design.
            </p>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}
