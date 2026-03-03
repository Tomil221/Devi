import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { FeatureGrid } from "./components/FeatureGrid";
import { WhatWeOffer } from "./components/WhatWeOffer";
import { ServiceDetails } from "./components/ServiceDetails";
import { AboutSection } from "./components/AboutSection";
import { EuropeMap } from "./components/EuropeMap";
import { ContactSection } from "./components/ContactSection";
import { CTAFooter } from "./components/CTAFooter";
import { LanguageProvider } from "./context/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <div style={{ fontFamily: "'Poppins', sans-serif" }}>
        <Navbar />
        <HeroSection />
        <FeatureGrid />
        <WhatWeOffer />
        <ServiceDetails />
        <AboutSection />
        <EuropeMap />
        <ContactSection />
        <CTAFooter />
      </div>
    </LanguageProvider>
  );
}