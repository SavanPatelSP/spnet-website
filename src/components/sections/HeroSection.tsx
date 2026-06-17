"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AuroraBackground from "@/components/AuroraBackground";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden" role="region" aria-label="Hero">
      <AuroraBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block text-[10px] font-semibold text-white/15 uppercase tracking-[0.25em] mb-8">
              SPNET INC — Multi-Product Ecosystem
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.92]"
          >
            <span className="block text-white">Products that</span>
            <span className="block text-gradient glow-text mt-1">
              connect communities.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-lg md:text-xl text-white/25 max-w-xl leading-relaxed font-light"
          >
            From messaging to membership, economy to administration — SPNET is building the ecosystem that empowers communities to communicate, grow, and thrive.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex flex-col sm:flex-row items-start gap-4"
          >
            <Link
              href="/products"
              className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-black text-sm font-semibold transition-all duration-500 hover:scale-[1.03] active:scale-[0.97]"
            >
              Explore products
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
            <Link
              href="/roadmap"
              className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border border-white/[0.06] text-white/60 text-sm font-medium transition-all duration-500 hover:border-white/20 hover:text-white/90 hover:bg-white/[0.03]"
            >
              View roadmap
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-12 left-6 right-6 max-w-7xl mx-auto hidden md:flex items-end justify-between"
          aria-hidden="true"
        >
          <div className="flex items-center gap-3 text-[10px] text-white/10 uppercase tracking-[0.2em] font-medium">
            <span className="w-8 h-px bg-white/[0.08]" />
            <span>Current + In Development</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-5 h-8 rounded-full border border-white/[0.08] flex items-start justify-center pt-1.5"
            >
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-1.5 rounded-full bg-white/20"
              />
            </motion.div>
          </div>
          <div className="flex items-center gap-3 text-[10px] text-white/10 uppercase tracking-[0.2em] font-medium">
            <span>Planned + Future</span>
            <span className="w-8 h-px bg-white/[0.08]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
