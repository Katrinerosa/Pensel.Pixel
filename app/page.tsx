import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import Footer from "@/components/Footer";
import StudioUpdates from "@/components/StudioUpdates";
import Services from "@/components/Services";
import Founder from "@/components/Founder";
import Process from "@/components/Process";

export const metadata: Metadata = {
  title: "Websites & creative frontend development | Pensel & Pixel",
  description: "Independent web developer and illustrator Katrine Rosa Beck. Responsive websites, website improvements and creative digital experiences for small businesses and creative people.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-canvas">
      <Header />
      <Hero />
      <Services />
      <SelectedWork />
      <Process />
      <Founder showAboutLink />
      <StudioUpdates />
      <Footer />
    </main>
  );
}
