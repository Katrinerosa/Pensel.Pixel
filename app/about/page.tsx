import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f7f4ee]">
      <Header />

      <section className="px-6 py-14 sm:py-20">
        <div className="mx-auto max-w-[980px]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1f286c]">
            About
          </p>

          <h1 className="mt-4 text-4xl font-black leading-tight text-[#1f2144] sm:text-6xl">
            Pensel & Pixel
          </h1>

          <p className="mt-8 text-lg leading-relaxed text-[#3f3d40] sm:text-2xl">
            Pensel & Pixel is an educational technology studio combining
            illustration, storytelling and learning design.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-[#3f3d40] sm:text-2xl">
            We build reading experiences that support different learning needs
            while keeping the joy and imagination of great stories alive.
          </p>

          <h2 className="mt-12 text-3xl font-black leading-tight text-[#1f286c] sm:text-5xl">
            Our Focus
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-[#3f3d40] sm:text-2xl">
            Our first product, ReadFlow, is designed to help readers stay in the
            flow by offering support when needed, without interrupting the
            reading experience.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-[#3f3d40] sm:text-2xl">
            We believe technology should feel calm, helpful and human-centered,
            especially in learning environments.
          </p>

          <h2 className="mt-12 text-3xl font-black leading-tight text-[#1f286c] sm:text-5xl">
            Founder
          </h2>

          <p className="mt-6 mb-20 text-lg leading-relaxed text-[#3f3d40] sm:text-2xl">
            Pensel & Pixel is founded by Katrine Rosa Beck, a teacher and
            creator with a passion for inclusive literacy and meaningful digital
            learning tools.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
