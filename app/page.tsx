import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f7f4ee]">
      <Header />
      <Hero />
      <Footer />
    </main>
  );
}