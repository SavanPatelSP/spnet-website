"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { roadmapMilestones } from "@/data/roadmap";

export default function RoadmapSection() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden" role="region" aria-label="Roadmap">
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
              Roadmap
            </span>
          </div>
          <h2 className="text-[34px] sm:text-[44px] md:text-[56px] font-bold tracking-[-0.03em] leading-[1.05]">
            <span className="text-gradient-1">What&apos;s next</span>
            <br />
            <span className="text-white/60">for SP NET</span>
          </h2>
          <p className="mt-5 text-[15px] text-white/40 max-w-lg font-light leading-relaxed">
            A transparent look at what we are building, what is coming next, and where we are headed.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-[9px] top-3 bottom-3 w-[1px] bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-transparent" />

          {roadmapMilestones.map((milestone, i) => (
            <motion.div
              key={milestone.title}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-10 pb-10 last:pb-0"
            >
              <div className="absolute left-0 top-1.5">
                <div
                  className={`w-[19px] h-[19px] rounded-full border-2 flex items-center justify-center ${
                    milestone.status === "current"
                      ? "border-[#7b61ff] bg-[#7b61ff] shadow-[0_0_20px_rgba(123,97,255,0.3)]"
                      : "border-white/15 bg-[#030303]"
                  }`}
                >
                  {milestone.status === "current" && (
                    <motion.div
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-1.5 h-1.5 rounded-full bg-white"
                    />
                  )}
                </div>
              </div>

              <div className="group p-5 md:p-6 rounded-xl border border-white/[0.04] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-500">
                <div className="flex items-center gap-2.5 mb-2">
                  <span
                    className={`text-[11px] font-semibold ${
                      milestone.status === "current" ? "text-[#7b61ff]" : "text-white/40"
                    }`}
                  >
                    {milestone.date}
                  </span>
                  {milestone.status === "current" && (
                    <span className="px-2 py-0.5 text-[9px] font-medium text-[#7b61ff] bg-[#7b61ff]/10 rounded-full tracking-wider uppercase">
                      In Progress
                    </span>
                  )}
                </div>
                <h3 className="text-[17px] font-bold text-white/75 group-hover:text-white transition-colors duration-300 mb-1">
                  {milestone.title}
                </h3>
                <p className="text-[13px] text-white/40 leading-relaxed font-light">
                  {milestone.description}
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
            href="/roadmap"
            className="group inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white/70 transition-colors duration-300 font-light"
          >
            View full roadmap
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
              <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
