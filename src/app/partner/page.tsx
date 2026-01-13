import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PartnerHero, PartnerServices, PartnerTrusted } from "@/components/sections/partner/PartnerPage";

export default function PartnerPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PartnerHero />
      <PartnerServices />
      <PartnerTrusted />
      <Footer brand="GloCare" />
    </main>
  );
}
