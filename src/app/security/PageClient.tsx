"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AuroraBackground from "@/components/AuroraBackground";

const securityPillars = [
  {
    title: "Security Architecture",
    description: "Multi-layered security architecture with defense-in-depth principles. Every layer of the stack is designed with security as a foundational requirement, not an afterthought.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    accent: "#00d4ff",
  },
  {
    title: "Data Protection",
    description: "End-to-end encryption by default. Data is encrypted in transit and at rest using industry-standard protocols. Zero-knowledge architecture ensures we cannot access user content.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
    accent: "#7b61ff",
  },
  {
    title: "Access Controls",
    description: "Granular permission systems with role-based access control (RBAC). Every access request is authenticated, authorized, and audited. Zero-trust principles applied across the platform.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
      </svg>
    ),
    accent: "#10b981",
  },
  {
    title: "Encryption",
    description: "Industry-standard encryption protocols including AES-256, TLS 1.3, and forward secrecy. Custom encryption layer for messaging with perfect forward secrecy built in.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    accent: "#f59e0b",
  },
  {
    title: "Platform Integrity",
    description: "Continuous monitoring, automated threat detection, and real-time alerting. Regular security audits, penetration testing, and vulnerability assessments ensure platform resilience.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 3 21 3 21 8" /><line x1="4" y1="20" x2="21" y2="3" /><polyline points="21 16 21 21 16 21" />
      </svg>
    ),
    accent: "#b366ff",
  },
  {
    title: "Responsible Disclosure",
    description: "We believe in transparency and community collaboration. Our responsible disclosure program invites security researchers to help us keep the platform safe.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
      </svg>
    ),
    accent: "#ef4444",
  },
  {
    title: "Transparency Principles",
    description: "Clear documentation of security practices, data handling policies, and infrastructure architecture. We publish transparency reports and maintain open communication with our community.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    accent: "#00d4ff",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const itemAnim = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function SecurityPageClient() {
  return (
    <div className="pt-[72px]">
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
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
              <span className="text-[10px] font-semibold text-white/35 uppercase tracking-[0.2em]">
                Security
              </span>
            </div>
            <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold tracking-[-0.03em] leading-[0.95]">
              <span className="text-gradient-1">Trust.</span>
              <br />
              <span className="text-white/50">Engineered.</span>
            </h1>
            <p className="mt-5 max-w-lg text-[15px] text-white/50 font-light leading-relaxed">
              Security and privacy are the foundation of everything we build — from end-to-end encryption today to enterprise-grade security on the roadmap.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20"
          >
            {securityPillars.map((pillar) => (
              <motion.div
                key={pillar.title}
                variants={itemAnim}
                className="group p-7 rounded-2xl border border-white/[0.04] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-500 overflow-hidden"
              >
                <div
                  className="absolute top-0 right-0 w-40 h-40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full"
                  style={{
                    background: `radial-gradient(circle at center, ${pillar.accent}06, transparent 70%)`,
                  }}
                />
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${pillar.accent}10`, color: pillar.accent }}>
                    {pillar.icon}
                  </div>
                  <h3 className="text-[17px] font-bold text-white/80 group-hover:text-white transition-colors duration-300 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-[13px] text-white/40 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <p className="text-sm text-white/40 font-light mb-6 max-w-lg mx-auto">
              Security is a journey, not a destination. We are committed to transparency every step of the way.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black text-sm font-semibold transition-all duration-500 hover:scale-[1.03] active:scale-[0.97]"
            >
              Ask about security
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
