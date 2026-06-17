"use client";

import { motion } from "framer-motion";
import AuroraBackground from "@/components/AuroraBackground";
import { ecosystemItems } from "@/data/ecosystem";

const statusLabels: Record<string, string> = {
  current: "Current",
  "in-development": "In Development",
  planned: "Planned",
  future: "Future",
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemAnim = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function EcosystemPageClient() {
  return (
    <div className="pt-[72px]">
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <AuroraBackground />
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
                Ecosystem
              </span>
            </div>
            <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold tracking-[-0.03em] leading-[0.95]">
              <span className="text-gradient-2">Connected</span>
              <br />
              <span className="text-white/50">by design</span>
            </h1>
            <p className="mt-5 max-w-xl text-[15px] text-white/50 font-light leading-relaxed">
              Every product in the SP NET ecosystem is engineered to work together — creating a unified platform greater than the sum of its parts.
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
            {ecosystemItems.map((item) => {
              const statusKey = item.status as string;
              return (
                <motion.div
                  key={item.name}
                  variants={itemAnim}
                  className="group p-7 md:p-8 rounded-2xl border border-white/[0.04] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-500 overflow-hidden"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-[9px] font-semibold text-white/35 uppercase tracking-[0.15em]">
                      {item.tagline}
                    </span>
                    <span className={`ml-auto text-[8px] font-medium px-2 py-0.5 rounded-full uppercase tracking-wider ${
                      item.status === "current" ? "text-[#00d4ff] bg-[#00d4ff]/10" :
                      item.status === "in-development" ? "text-[#7b61ff] bg-[#7b61ff]/10" :
                      item.status === "planned" ? "text-[#f59e0b] bg-[#f59e0b]/10" :
                      "text-white/50 bg-white/[0.04]"
                    }`}>
                      {statusLabels[statusKey] || "Future"}
                    </span>
                  </div>
                  <h2 className="text-[22px] font-bold text-white/80 group-hover:text-white transition-colors duration-300 mb-2">
                    {item.name}
                  </h2>
                  <p className="text-[13px] text-white/40 leading-relaxed font-light mb-5">
                    {item.description}
                  </p>
                  <div>
                    <span className="text-[9px] font-semibold text-white/30 uppercase tracking-[0.15em]">Connects to</span>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {item.connections.map((conn) => (
                        <span
                          key={conn}
                          className="px-2.5 py-1 text-[11px] text-white/50 bg-white/[0.03] border border-white/[0.04] rounded-full font-light"
                        >
                          {conn}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-20 relative p-8 md:p-10 rounded-2xl border border-white/[0.04] bg-white/[0.015] overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.03]">
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="80" stroke="url(#g1)" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="50" stroke="url(#g1)" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="20" stroke="url(#g1)" strokeWidth="0.5" />
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="200" y2="200">
                    <stop stopColor="#00d4ff" />
                    <stop offset="1" stopColor="#7b61ff" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="relative z-10 max-w-2xl">
              <h3 className="text-xl font-bold text-white/70 mb-3">Future Ecosystem Components</h3>
              <p className="text-[13px] text-white/40 leading-relaxed font-light">
                The SP NET ecosystem will continue to expand with future APIs, a Telegram Bot Platform, and additional services built on the same secure, interconnected architecture.
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {["Future APIs", "Telegram Bot Platform", "Future Services"].map((item) => (
                  <span key={item} className="px-3 py-1.5 text-[11px] text-white/60 bg-white/[0.03] border border-white/[0.04] rounded-full font-light">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
