import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-canvas">
      <Header />
      <Hero />
      <SelectedWork />
      <Footer />
    </main>
  );
}
