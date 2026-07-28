import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function StoryPage() {
    return (
        <main className="flex min-h-screen flex-col bg-[#f7f4ee]">
            <Header />

            <section className="px-6 py-14 sm:py-20">
                <div className="mx-auto max-w-[920px]">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1f286c]">
                        My Story
                    </p>
                    <h1 className="mt-4 text-4xl font-black leading-tight text-[#1f2144] sm:text-6xl">
                        The Story Behind Pensel & Pixel
                    </h1>

                    <p className="mt-6 text-lg leading-relaxed text-[#4f4a4f] sm:text-2xl">
                        Some of the best ideas start in ordinary moments.
                    </p>

                    <p className="mt-6 text-lg leading-relaxed text-[#4f4a4f] sm:text-2xl">
                        Mine began during a JavaScript class.
                    </p>

                    <p className="mt-6 text-lg leading-relaxed text-[#4f4a4f] sm:text-2xl">
                        We were learning how software could respond to user interactions-how a
                        program could react, adapt and change based on what the user did. As I
                        listened, my mind wandered in a different direction.
                    </p>

                    <p className="mt-6 text-lg font-semibold leading-relaxed text-[#1f286c] sm:text-2xl">
                        What if a reading platform could respond to the reader in the same way?
                    </p>

                    <p className="mt-6 text-lg leading-relaxed text-[#4f4a4f] sm:text-2xl">
                        As a teacher, I had seen how easily reading could be interrupted. A single
                        unfamiliar word could break concentration, confidence and the enjoyment of
                        a story. At home, I saw the same struggle through my son, who has
                        dyslexia. He worked incredibly hard to read, but he rarely experienced what
                        many readers take for granted: the feeling of becoming completely absorbed
                        in a story.
                    </p>

                    <p className="mt-6 text-lg leading-relaxed text-[#4f4a4f] sm:text-2xl">
                        Reading became an exercise in decoding instead of discovering.
                    </p>

                    <p className="mt-6 text-lg leading-relaxed text-[#4f4a4f] sm:text-2xl">
                        That experience stayed with me.
                    </p>

                    <p className="mt-6 text-lg leading-relaxed text-[#4f4a4f] sm:text-2xl">
                        I started imagining a different kind of reading platform-one that could
                        quietly respond to each reader's interactions, offering support exactly when
                        it was needed, so they could continue reading without losing the flow of
                        the story.
                    </p>

                    <p className="mt-6 text-lg leading-relaxed text-[#4f4a4f] sm:text-2xl">
                        That idea became <strong>ReadFlow</strong>.
                    </p>

                    <p className="mt-6 text-lg leading-relaxed text-[#4f4a4f] sm:text-2xl">
                        Today, ReadFlow is the first product from <strong>Pensel & Pixel</strong>,
                        created with a simple belief:
                    </p>

                    <p className="mt-6 text-lg font-semibold leading-relaxed text-[#1f286c] sm:text-2xl">
                        Every reader deserves the chance to stay immersed in the story.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
