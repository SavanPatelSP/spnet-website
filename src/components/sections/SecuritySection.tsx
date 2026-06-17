"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  {
    title: "End-to-End Encryption",
    description: "Messages and data encrypted end-to-end by default. Your conversations stay private — we cannot read them, and neither can anyone else.",
    accent: "#00d4ff",
  },
  {
    title: "Privacy by Design",
    description: "Privacy built into every layer of our architecture, not added as an afterthought. Minimal data collection with maximum user control.",
    accent: "#7b61ff",
  },
  {
    title: "Zero-Trust Architecture",
    description: "Every access request authenticated, authorized, and continuously validated. No implicit trust — ever.",
    accent: "#10b981",
  },
  {
    title: "Platform Integrity",
    description: "Continuous monitoring, proactive threat detection, and automated response systems keeping every layer of the ecosystem secure.",
    accent: "#f59e0b",
  },
];

export default function SecuritySection() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden" role="region" aria-label="Security">
      <div className="max-w-7xl mx-auto px-6">
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
              Security
            </span>
          </div>
          <h2 className="text-[34px] sm:text-[44px] md:text-[56px] font-bold tracking-[-0.03em] leading-[1.05]">
            <span className="text-gradient-3">Trust.</span>{" "}
            <span className="text-white/60">Engineered</span>
            <br />
            <span className="text-white/60">by default.</span>
          </h2>
          <p className="mt-5 text-[15px] text-white/40 max-w-lg font-light leading-relaxed">
            Security is not a feature — it is the foundation. Every product built with encryption, privacy, and integrity from day one.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-7 rounded-2xl border border-white/[0.04] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-500 overflow-hidden"
            >
              <div
                className="absolute top-0 right-0 w-40 h-40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full"
                style={{
                  background: `radial-gradient(circle at center, ${feature.accent}06, transparent 70%)`,
                }}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${feature.accent}10` }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={feature.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: feature.accent }} />
                </div>
                <h3 className="text-[17px] font-bold text-white/80 group-hover:text-white transition-colors duration-300 mb-2">
                  {feature.title}
                </h3>
                <p className="text-[13px] text-white/40 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 text-center"
        >
          <Link
            href="/security"
            className="group inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white/70 transition-colors duration-300 font-light"
          >
            View security architecture
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
              <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
