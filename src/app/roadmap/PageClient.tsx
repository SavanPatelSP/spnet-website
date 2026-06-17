"use client";

import { motion } from "framer-motion";
import AuroraBackground from "@/components/AuroraBackground";
import { roadmapPhases } from "@/data/roadmap";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const phaseAnim = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function RoadmapPageClient() {
  return (
    <div className="pt-[72px]">
      <section className="relative min-h-[45vh] flex items-center overflow-hidden">
        <AuroraBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-white/10" />
              <span className="text-[10px] font-semibold text-white/35 uppercase tracking-[0.2em]">
                Roadmap
              </span>
            </div>
            <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold tracking-[-0.03em] leading-[0.95]">
              <span className="text-gradient-1">Our journey</span>
              <br />
              <span className="text-white/50">ahead</span>
            </h1>
            <p className="mt-5 max-w-lg text-[15px] text-white/50 font-light leading-relaxed">
              A transparent look at what we are building, what is coming next, and where we are headed.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative">
            <div className="absolute left-[19px] top-8 bottom-8 w-[1px] bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-transparent hidden md:block" />

            {roadmapPhases.map((phase, i) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="mb-16 last:mb-0"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative flex-shrink-0">
                    <div className={`w-[38px] h-[38px] rounded-full border-2 flex items-center justify-center ${
                      i === 0 ? "border-[#7b61ff] bg-[#7b61ff]/10" : "border-white/10 bg-white/[0.02]"
                    }`}>
                      <span className={`text-[11px] font-bold ${i === 0 ? "text-[#7b61ff]" : "text-white/50"}`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2.5 mb-0.5">
                      <span className="text-[9px] font-semibold text-white/35 uppercase tracking-[0.2em]">{phase.phase}</span>
                      <span className="text-white/[0.15] text-[10px]">|</span>
                      <span className="text-[9px] text-white/35">{phase.period}</span>
                    </div>
                    <h2 className="text-[22px] md:text-[26px] font-bold text-white/60">{phase.title}</h2>
                  </div>
                  <div className="h-px flex-1 bg-white/[0.04] hidden md:block" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {phase.items.map((item) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="group p-5 rounded-xl border border-white/[0.04] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-500"
                    >
                      <div className="flex items-center gap-2.5 mb-2">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            item.status === "current"
                              ? "bg-[#7b61ff] shadow-[0_0_10px_rgba(123,97,255,0.5)]"
                              : "bg-white/15"
                          }`}
                        />
                        <span className="text-[11px] font-semibold text-white/40">{item.date}</span>
                        {item.status === "current" && (
                          <span className="px-2 py-0.5 text-[8px] font-medium text-[#7b61ff] bg-[#7b61ff]/10 rounded-full uppercase tracking-wider">
                            Now
                          </span>
                        )}
                      </div>
                      <h3 className="text-[15px] font-bold text-white/75 ml-[18px] group-hover:text-white transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-[12px] text-white/40 ml-[18px] mt-1 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
