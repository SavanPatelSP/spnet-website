"use client";

import HeroSection from "@/components/sections/HeroSection";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import EcosystemSection from "@/components/sections/EcosystemSection";
import SecuritySection from "@/components/sections/SecuritySection";
import RoadmapSection from "@/components/sections/RoadmapSection";
import CompanySection from "@/components/sections/CompanySection";
import TrustSection from "@/components/sections/TrustSection";
import NewsroomSection from "@/components/sections/NewsroomSection";
import CareersSection from "@/components/sections/CareersSection";
import CTASection from "@/components/sections/CTASection";

const Divider = () => (
  <div className="max-w-7xl mx-auto px-6 py-8 md:py-12" aria-hidden="true">
    <div className="flex items-center gap-4">
      <div className="h-px flex-1 bg-white/[0.03]" />
      <svg width="6" height="6" viewBox="0 0 6 6" fill="none">
        <circle cx="3" cy="3" r="2.5" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      </svg>
      <div className="h-px flex-1 bg-white/[0.03]" />
    </div>
  </div>
);

export default function Home() {
  return (
    <>
      <HeroSection />
      <Divider />
      <FeaturedProducts />
      <Divider />
      <EcosystemSection />
      <Divider />
      <SecuritySection />
      <Divider />
      <RoadmapSection />
      <Divider />
      <CompanySection />
      <Divider />
      <TrustSection />
      <Divider />
      <NewsroomSection />
      <Divider />
      <CareersSection />
      <Divider />
      <CTASection />
    </>
  );
}
