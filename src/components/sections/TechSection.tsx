"use client";

import { motion } from "framer-motion";
import { technologies as techList } from "@/data/tech";

const categoryColors: Record<string, string> = {
  frontend: "rgba(0,212,255,0.15)", language: "rgba(123,97,255,0.15)",
  backend: "rgba(16,185,129,0.15)", database: "rgba(245,158,11,0.15)",
  infra: "rgba(239,68,68,0.15)", api: "rgba(168,85,247,0.15)",
  protocol: "rgba(236,72,153,0.15)", ai: "rgba(34,211,238,0.15)",
};

export default function TechSection() {
  return (
    <section className="relative py-28 md:py-36" role="region" aria-label="Technologies">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-lg mb-16"
        >
          <span className="inline-block text-[10px] font-semibold text-white/15 uppercase tracking-[0.25em] mb-5">
            Toolchain
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-tight leading-[1.05] text-white">
            The tools we reach for.
          </h2>
          <p className="mt-5 text-sm text-white/25 leading-relaxed font-light">
            From frontend to infrastructure — the technologies powering the SPNET ecosystem today.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2">
          {techList.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: i * 0.02, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="group relative px-4 py-3 rounded-xl border border-white/[0.04] transition-all duration-300 hover:scale-[1.02] cursor-default"
              style={{ background: categoryColors[tech.category] || "rgba(255,255,255,0.02)" }}
            >
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-bold text-white/25 w-4 text-center">{tech.icon}</span>
                <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
