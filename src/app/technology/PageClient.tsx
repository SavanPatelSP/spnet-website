"use client";

import { motion } from "framer-motion";
import AuroraBackground from "@/components/AuroraBackground";
import { technologies } from "@/data/technology";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

const statusConfig = {
  current: "text-[#00d4ff] bg-[#00d4ff]/10 border-[#00d4ff]/20",
  planned: "text-[#f59e0b] bg-[#f59e0b]/10 border-[#f59e0b]/20",
};

export default function TechnologyPageClient() {
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
                Technology
              </span>
            </div>
            <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold tracking-[-0.03em] leading-[0.95]">
              <span className="text-gradient-1">The stack</span>
              <br />
              <span className="text-white/50">behind the ecosystem</span>
            </h1>
            <p className="mt-5 max-w-lg text-[15px] text-white/50 font-light leading-relaxed">
              Our technology architecture is built from the ground up for scale, security, and intelligence — with a clear roadmap for the future.
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
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {technologies.map((tech) => (
              <motion.div
                key={tech.category}
                variants={item}
                className="group p-7 md:p-8 rounded-2xl border border-white/[0.04] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                    style={{ backgroundColor: `${tech.accent}10`, color: tech.accent }}
                  >
                    {tech.category[0]}
                  </div>
                  <span className={`text-[9px] font-medium px-2 py-0.5 rounded-full border uppercase tracking-wider ${statusConfig[tech.status as keyof typeof statusConfig] || "text-white/50 bg-white/[0.04] border-white/[0.06]"}`}>
                    {tech.status === "current" ? "Current" : "Planned"}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-white/80 mb-1.5">{tech.category}</h2>
                <p className="text-[13px] text-white/60 mb-5 leading-relaxed font-light">{tech.description}</p>
                <ul className="space-y-2">
                  {tech.items.map((t) => (
                    <li key={t} className="flex items-center gap-2.5 text-[13px] text-white/40">
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: tech.accent }} />
                      {t}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
