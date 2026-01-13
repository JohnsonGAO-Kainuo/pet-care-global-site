import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GlobalHero, GlobalAbout, GlobalStories } from "@/components/sections/global/GlobalPage";

export default function GlobalPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar dark={false} />
      <GlobalHero />
      <GlobalAbout />
      <GlobalStories />
      <Footer brand="GltCare" showSubscribe={true} />
    </main>
  );
}
