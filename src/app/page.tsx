"use client";

import HeroSection from "@/components/sections/HeroSection";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import EcosystemSection from "@/components/sections/EcosystemSection";
import WhySpnet from "@/components/sections/WhySpnet";
import RoadmapSection from "@/components/sections/RoadmapSection";
import TechSection from "@/components/sections/TechSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";

const Divider = () => (
  <div className="max-w-7xl mx-auto px-6 py-8 md:py-12" aria-hidden="true">
    <div className="flex items-center gap-4">
      <div className="h-px flex-1 bg-white/[0.04]" />
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
        <circle cx="4" cy="4" r="3" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      </svg>
      <div className="h-px flex-1 bg-white/[0.04]" />
    </div>
  </div>
);

export default function Home() {
  return (
    <>
      <HeroSection />
      <Divider />
      <div className="bg-white/[0.005]"><FeaturedProducts /></div>
      <Divider />
      <EcosystemSection />
      <Divider />
      <div className="bg-white/[0.005]"><WhySpnet /></div>
      <Divider />
      <RoadmapSection />
      <Divider />
      <div className="bg-white/[0.005]"><TechSection /></div>
      <Divider />
      <CTASection />
      <Divider />
      <ContactSection />
    </>
  );
}
