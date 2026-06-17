"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";

const trustIndicators = [
  {
    label: "Made in India",
    description: "Proudly built from India — engineering world-class technology platforms for a global audience. Our roots shape our perspective and our commitment to quality.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    label: "Privacy Focused",
    description: "End-to-end encryption and zero-knowledge architecture. Your data belongs to you — always. We build privacy into every product, not as an afterthought.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
  },
  {
    label: "Security Focused",
    description: "Enterprise-grade security architecture with continuous monitoring, threat detection, and zero-trust principles. Security is the foundation, not a feature.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    label: "Independent Technology Company",
    description: "Privately held and independently operated. Every decision is made with our community, our team, and our long-term vision in mind — not shareholder pressure.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 3 21 3 21 8" />
        <line x1="4" y1="20" x2="21" y2="3" />
        <polyline points="21 16 21 21 16 21" />
        <line x1="15" y1="15" x2="21" y2="21" />
        <line x1="3" y1="3" x2="9" y2="9" />
      </svg>
    ),
  },
  {
    label: "Founder Led",
    description: `Founded and led by ${site.foundedBy}. Vision-driven leadership focused on long-term value, product excellence, and community empowerment over short-term gains.`,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

export default function TrustSection() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden" role="region" aria-label="Trust and credibility">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-[#00d4ff]/[0.015] to-transparent rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-[#7b61ff]/[0.015] to-transparent rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-white/10" />
            <span className="text-[10px] font-semibold text-white/35 uppercase tracking-[0.2em]">
              Trust
            </span>
          </div>
          <h2 className="text-[34px] sm:text-[44px] md:text-[56px] font-bold tracking-[-0.03em] leading-[1.05]">
            <span className="text-gradient-2">Built on</span>{" "}
            <span className="text-white/60">trust</span>
            <br />
            <span className="text-white/60">powered by purpose</span>
          </h2>
          <p className="mt-5 text-[15px] text-white/40 max-w-lg font-light leading-relaxed">
            Every product we build reflects our commitment to privacy, security, independence, and community-first values. We earn trust through transparency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {trustIndicators.map((indicator, i) => (
            <motion.div
              key={indicator.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-[1px] rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/[0.06] via-transparent to-[#7b61ff]/[0.06] rounded-2xl" />
              </div>
              <div className="relative p-7 rounded-2xl border border-white/[0.04] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-500 h-full">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.04] flex items-center justify-center text-white/50 group-hover:text-white/60 group-hover:bg-white/[0.06] group-hover:border-white/[0.08] transition-all duration-500 mb-4">
                  {indicator.icon}
                </div>
                <h3 className="text-[15px] font-bold text-white/80 group-hover:text-white transition-colors duration-300 mb-2">
                  {indicator.label}
                </h3>
                <p className="text-[12px] text-white/40 leading-relaxed font-light">
                  {indicator.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
