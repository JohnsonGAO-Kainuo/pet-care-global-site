import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DistributionHero, DistributionFeatured, DistributionWhy } from "@/components/sections/distribution/DistributionPage";

export default function DistributionPage() {
  return (
    <main className="min-h-screen bg-[#FDFDFC]">
      <Navbar />
      <DistributionHero />
      <DistributionFeatured />
      <DistributionWhy />
      <Footer brand="GloCare" />
    </main>
  );
}
