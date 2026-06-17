"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ecosystemNodes } from "@/data/ecosystem";

export default function EcosystemSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.4, 0.7], [0.9, 1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8], [0.5, 1, 1]);

  return (
    <section ref={ref} className="relative py-28 md:py-36 overflow-hidden">
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
            <span className="text-[10px] font-semibold text-white/20 uppercase tracking-[0.2em]">
              Ecosystem
            </span>
          </div>
          <h2 className="text-[34px] sm:text-[44px] md:text-[56px] font-bold tracking-[-0.03em] leading-[1.05]">
            <span className="text-gradient-2">Connected</span>{" "}
            <span className="text-white/35">by design</span>
          </h2>
        </motion.div>

        <motion.div style={{ scale, opacity }} className="relative">
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href="/products">
                <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full glass glow flex items-center justify-center mb-10 cursor-pointer hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00d4ff]/5 via-[#7b61ff]/5 to-[#b366ff]/5 animate-pulse-glow" />
                  <span className="relative z-10 text-center">
                    <span className="text-gradient block text-base font-bold">SPNET</span>
                    <span className="text-white/30 text-[11px] font-light">Ecosystem</span>
                  </span>
                </div>
              </Link>
            </motion.div>

            <div className="w-px h-10 bg-gradient-to-b from-white/15 to-transparent" />

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full mt-8">
              {ecosystemNodes.map((item) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: item.delay, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href="/ecosystem"
                    className="group relative block p-5 rounded-2xl border border-white/[0.04] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-500 text-center overflow-hidden"
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at center, ${item.color}08, transparent 70%)`,
                      }}
                    />
                    <div className="relative z-10">
                      <div
                        className="w-2 h-2 rounded-full mx-auto mb-3 group-hover:scale-150 transition-transform duration-500"
                        style={{ backgroundColor: item.color }}
                      />
                      <h3 className="text-sm font-bold text-white/70 group-hover:text-white transition-colors duration-300">
                        {item.name}
                      </h3>
                      <p className="text-[11px] text-white/25 mt-1 font-light">{item.desc}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
