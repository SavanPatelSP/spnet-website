"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AuroraBackground from "@/components/AuroraBackground";

const adminFeatures = [
  {
    title: "User Management",
    description: "Comprehensive user administration — manage profiles, permissions, roles, and account status across your community.",
    icon: "👥",
    accent: "#00d4ff",
  },
  {
    title: "Content Moderation",
    description: "Powerful moderation tools for managing messages, media, and community content. Automated filters, manual review queues, and appeal workflows.",
    icon: "🛡️",
    accent: "#7b61ff",
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time analytics and reporting. Track engagement, growth, revenue, and community health metrics in one place.",
    icon: "📊",
    accent: "#10b981",
  },
  {
    title: "Permission Controls",
    description: "Granular permission system with role-based access control. Define exactly who can do what across your community.",
    icon: "🔐",
    accent: "#f59e0b",
  },
  {
    title: "Community Settings",
    description: "Configure every aspect of your community — branding, rules, welcome flows, automated responses, and integration settings.",
    icon: "⚙️",
    accent: "#ef4444",
  },
  {
    title: "Audit & Compliance",
    description: "Full audit logging, compliance reporting, and data export tools. Keep your community safe and accountable.",
    icon: "📋",
    accent: "#b366ff",
  },
];

export default function AdminPageClient() {
  return (
    <div className="pt-[72px]">
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <AuroraBackground colors={["rgba(16,185,129,0.25)", "rgba(123,97,255,0.2)", "rgba(0,212,255,0.2)"]} />
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
                Admin Platform
              </span>
            </div>
            <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold tracking-[-0.03em] leading-[0.95]">
              <span className="text-gradient-1">Control.</span>
              <br />
              <span className="text-white/30">Simplified.</span>
            </h1>
            <p className="mt-5 max-w-lg text-[15px] text-white/30 font-light leading-relaxed">
              Everything you need to manage, moderate, and grow your SPNET community — in one powerful platform.
            </p>
            <span className="inline-block mt-4 text-[11px] font-medium px-3 py-1.5 rounded-full text-[#7b61ff] bg-[#7b61ff]/10 border border-[#7b61ff]/20">
              In Development
            </span>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
            {adminFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="group p-6 md:p-7 rounded-2xl border border-white/[0.04] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-500"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-4"
                  style={{ backgroundColor: `${feature.accent}12` }}
                >
                  {feature.icon}
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
              The Admin Platform is in active development.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black text-sm font-semibold transition-all duration-500 hover:scale-[1.03] active:scale-[0.97]"
            >
              Get early access
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
