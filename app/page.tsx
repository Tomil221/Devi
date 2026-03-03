import { LanguageProvider } from "@/components/context/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeatureGrid } from "@/components/FeatureGrid";
import { WhatWeOffer } from "@/components/WhatWeOffer";
import { ServiceDetails } from "@/components/ServiceDetails";
import { AboutSection } from "@/components/AboutSection";
import { EuropeMap } from "@/components/EuropeMap";
import { ContactSection } from "@/components/ContactSection";
import { CTAFooter } from "@/components/CTAFooter";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="font-sans">
        <Navbar />
        <HeroSection />
        <FeatureGrid />
        <WhatWeOffer />
        <ServiceDetails />
        <AboutSection />
        <EuropeMap />
        <ContactSection />
        <CTAFooter />
      </main>
    </LanguageProvider>
  );
}
