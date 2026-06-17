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

export default function EcosystemPageClient() {
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
              <span className="text-[10px] font-semibold text-white/20 uppercase tracking-[0.2em]">
                Ecosystem
              </span>
            </div>
            <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold tracking-[-0.03em] leading-[0.95]">
              <span className="text-gradient-2">Connected</span>
              <br />
              <span className="text-white/30">by design</span>
            </h1>
            <p className="mt-5 max-w-lg text-[15px] text-white/30 font-light leading-relaxed">
              Every product in the SPNET ecosystem is built to work together — creating a unified experience greater than the sum of its parts.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {ecosystemItems.map((item, i) => {
            const statusKey = item.status as string;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group p-7 md:p-8 rounded-2xl border border-white/[0.04] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-500 overflow-hidden"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-[9px] font-semibold text-white/20 uppercase tracking-[0.15em]">
                    {item.tagline}
                  </span>
                  <span className={`ml-auto text-[8px] font-medium px-2 py-0.5 rounded-full uppercase tracking-wider ${
                    item.status === "current" ? "text-[#00d4ff] bg-[#00d4ff]/10" :
                    item.status === "in-development" ? "text-[#7b61ff] bg-[#7b61ff]/10" :
                    item.status === "planned" ? "text-[#f59e0b] bg-[#f59e0b]/10" :
                    "text-white/30 bg-white/[0.04]"
                  }`}>
                    {statusLabels[statusKey] || "Future"}
                  </span>
                </div>
                <h2 className="text-[22px] font-bold text-white/80 group-hover:text-white transition-colors duration-300 mb-2">
                  {item.name}
                </h2>
                <p className="text-[13px] text-white/25 leading-relaxed font-light mb-5">
                  {item.description}
                </p>
                <div>
                  <span className="text-[9px] font-semibold text-white/15 uppercase tracking-[0.15em]">Connects to</span>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {item.connections.map((conn) => (
                      <span
                        key={conn}
                        className="px-2.5 py-1 text-[11px] text-white/30 bg-white/[0.03] border border-white/[0.04] rounded-full font-light"
                      >
                        {conn}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
