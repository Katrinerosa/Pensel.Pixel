import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import Footer from "@/components/Footer";
import StudioUpdates from "@/components/StudioUpdates";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-canvas">
      <Header />
      <Hero />
      <SelectedWork />
      <StudioUpdates />
      <Footer />
    </main>
  );
}
