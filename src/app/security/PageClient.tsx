"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AuroraBackground from "@/components/AuroraBackground";

const securityFeatures = [
  {
    title: "End-to-End Encryption",
    description: "Messages and data are encrypted end-to-end by default. Your conversations stay private — we cannot read them, and neither can anyone else.",
    accent: "#00d4ff",
    status: "current",
  },
  {
    title: "Privacy by Design",
    description: "Privacy is built into every layer of our architecture — not added as an afterthought. Minimal data collection, maximum user control.",
    accent: "#7b61ff",
    status: "current",
  },
  {
    title: "Content Moderation",
    description: "Community-driven moderation tools with automated filters, reporting systems, and appeal workflows to keep communities safe.",
    accent: "#10b981",
    status: "in-development",
  },
  {
    title: "Zero-Trust Architecture",
    description: "Planned zero-trust security model ensuring every access request is authenticated, authorized, and continuously validated.",
    accent: "#f59e0b",
    status: "planned",
  },
  {
    title: "Threat Intelligence",
    description: "Planned proactive threat detection and response systems to identify and mitigate security risks before they impact users.",
    accent: "#ef4444",
    status: "planned",
  },
  {
    title: "Compliance Automation",
    description: "Planned automated compliance tools for regulatory requirements, audit trails, and security certifications.",
    accent: "#b366ff",
    status: "planned",
  },
];

const statusStyles: Record<string, string> = {
  current: "text-[#00d4ff] bg-[#00d4ff]/10 border-[#00d4ff]/20",
  "in-development": "text-[#7b61ff] bg-[#7b61ff]/10 border-[#7b61ff]/20",
  planned: "text-[#f59e0b] bg-[#f59e0b]/10 border-[#f59e0b]/20",
};

export default function SecurityPageClient() {
  return (
    <div className="pt-[72px]">
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <AuroraBackground colors={["rgba(16,185,129,0.25)", "rgba(0,212,255,0.2)", "rgba(123,97,255,0.2)"]} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-white/10" />
              <span className="text-[10px] font-semibold text-white/20 uppercase tracking-[0.2em]">
                Security
              </span>
            </div>
            <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold tracking-[-0.03em] leading-[0.95]">
              <span className="text-gradient-1">Trust.</span>
              <br />
              <span className="text-white/30">Engineered.</span>
            </h1>
            <p className="mt-5 max-w-lg text-[15px] text-white/30 font-light leading-relaxed">
              Security and privacy are the foundation of everything we build — from end-to-end encryption today to enterprise-grade security on the roadmap.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
            {securityFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="group p-6 md:p-7 rounded-2xl border border-white/[0.04] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: feature.accent }}
                  />
                  <span
                    className={`text-[9px] font-medium px-2 py-0.5 rounded-full border uppercase tracking-wider ${
                      statusStyles[feature.status] || "text-white/30 bg-white/[0.04] border-white/[0.06]"
                    }`}
                  >
                    {feature.status === "current" ? "Current" : feature.status === "in-development" ? "In Development" : "Planned"}
                  </span>
                </div>
                <h3 className="text-[17px] font-bold text-white/80 group-hover:text-white transition-colors duration-300 mb-2">
                  {feature.title}
                </h3>
                <p className="text-[13px] text-white/25 leading-relaxed font-light">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <p className="text-sm text-white/25 font-light mb-6">
              Security is a journey, not a destination. We are committed to transparency every step of the way.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black text-sm font-semibold transition-all duration-500 hover:scale-[1.03] active:scale-[0.97]"
            >
              Ask about security
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
