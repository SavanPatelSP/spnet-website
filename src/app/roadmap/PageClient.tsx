"use client";

import { motion } from "framer-motion";
import AuroraBackground from "@/components/AuroraBackground";
import { roadmapPhases } from "@/data/roadmap";

export default function RoadmapPageClient() {
  return (
    <div className="pt-[72px]">
      <section className="relative min-h-[40vh] flex items-center overflow-hidden">
        <AuroraBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-white/10" />
              <span className="text-[10px] font-semibold text-white/20 uppercase tracking-[0.2em]">
                Roadmap
              </span>
            </div>
            <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold tracking-[-0.03em] leading-[0.95]">
              <span className="text-gradient-1">Our journey</span>
              <br />
              <span className="text-white/30">ahead</span>
            </h1>
            <p className="mt-5 max-w-lg text-[15px] text-white/30 font-light leading-relaxed">
              A transparent look at what we are building, what is coming next, and where we are headed.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          {roadmapPhases.map((phase, i) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="mb-14 last:mb-0"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[9px] font-semibold text-white/20 uppercase tracking-[0.2em]">{phase.phase}</span>
                <span className="text-[9px] text-white/15">|</span>
                <span className="text-[9px] text-white/20">{phase.period}</span>
                <div className="h-px flex-1 bg-white/[0.04]" />
              </div>
              <h2 className="text-[24px] md:text-[28px] font-bold text-white/50 mb-6">{phase.title}</h2>
              <div className="space-y-3">
                {phase.items.map((item) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="group p-5 rounded-xl border border-white/[0.04] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-500"
                  >
                    <div className="flex items-center gap-3 mb-1.5">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          item.status === "current"
                            ? "bg-[#7b61ff] shadow-[0_0_10px_rgba(123,97,255,0.5)]"
                            : "bg-white/15"
                        }`}
                      />
                      <span className="text-[11px] font-semibold text-white/25">{item.date}</span>
                      {item.status === "current" && (
                        <span className="px-2 py-0.5 text-[8px] font-medium text-[#7b61ff] bg-[#7b61ff]/10 rounded-full uppercase tracking-wider">
                          Now
                        </span>
                      )}
                    </div>
                    <h3 className="text-[16px] font-bold text-white/75 ml-5 group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-[13px] text-white/25 ml-5 mt-0.5 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
