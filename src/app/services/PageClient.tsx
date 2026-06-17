"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AuroraBackground from "@/components/AuroraBackground";
import { services } from "@/data/services";

const tileThemes = [
  { bg: "rgba(0,212,255,0.04)", border: "rgba(0,212,255,0.08)" },
  { bg: "rgba(123,97,255,0.04)", border: "rgba(123,97,255,0.08)" },
  { bg: "rgba(16,185,129,0.04)", border: "rgba(16,185,129,0.08)" },
  { bg: "rgba(245,158,11,0.04)", border: "rgba(245,158,11,0.08)" },
];

export default function ServicesPageClient() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center overflow-hidden pt-32 pb-16">
        <AuroraBackground density="high" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <span className="inline-block text-[10px] font-semibold text-white/15 uppercase tracking-[0.25em] mb-6">
              Services
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95]">
              <span className="text-white">Future</span>
              <br />
              <span className="text-gradient">enterprise services</span>
            </h1>
            <p className="mt-6 text-base text-white/25 max-w-lg leading-relaxed font-light">
              As SPNET grows, we plan to offer enterprise-grade services built on the same technology powering our products. These are future offerings — part of our long-term vision.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative pb-28 md:pb-36">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {services.map((service, i) => {
              const theme = tileThemes[i % tileThemes.length];
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.05, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="group p-8 md:p-10 rounded-2xl border transition-all duration-500"
                  style={{
                    borderColor: theme.border,
                    background: `linear-gradient(135deg, ${theme.bg}, transparent)`,
                  }}
                >
                  <div className="flex items-start gap-3 mb-6">
                    <span className="text-[11px] font-mono text-white/15 mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-xl font-semibold text-white/90 group-hover:text-white transition-colors duration-300">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-sm text-white/25 leading-relaxed font-light ml-7 mb-8">
                    {service.description}
                  </p>

                  <div className="ml-7 pt-6 border-t border-white/[0.04]">
                    <span className="text-[9px] font-semibold text-white/20 uppercase tracking-[0.15em]">
                      Capabilities
                    </span>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {service.capabilities.map((cap) => (
                        <span
                          key={cap}
                          className="text-[11px] px-3 py-1.5 rounded-full border border-white/[0.06] text-white/25 font-light"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-sm text-white/25 font-light mb-6">
              Interested in future enterprise offerings?
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black text-sm font-semibold transition-all duration-500 hover:scale-[1.03] active:scale-[0.97]"
            >
              Get in touch
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
