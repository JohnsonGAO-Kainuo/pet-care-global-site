import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Partners } from "@/components/sections/Partners";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { SuccessStories } from "@/components/sections/Stories";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdfdfc]">
      <Navbar />
      <Hero />
      <Partners />
      <Services />
      <About />
      <WhyChooseUs />
      <SuccessStories />
      <Footer />
    </main>
  );
}
