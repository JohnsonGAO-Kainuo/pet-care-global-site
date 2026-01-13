import { Navbar } from "@/components/sections/Navbar";
import { HeroDark } from "@/components/sections/HeroDark";
import { Partners } from "@/components/sections/Partners";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { SuccessStories } from "@/components/sections/Stories";
import { Footer } from "@/components/sections/Footer";

export default function GlobalPage() {
  return (
    <main className="min-h-screen bg-[#0d213b]">
      <Navbar />
      <HeroDark />
      <Partners />
      <Services />
      <About />
      <WhyChooseUs />
      <SuccessStories />
      <Footer />
    </main>
  );
}
