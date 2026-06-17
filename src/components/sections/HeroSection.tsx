"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AuroraBackground from "@/components/AuroraBackground";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

const trustItems = [
  "End-to-End Encryption",
  "Real-Time Communication",
  "Community Ecosystem",
  "Enterprise Grade",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden" role="region" aria-label="Hero">
      <AuroraBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 text-[10px] font-semibold text-white/30 uppercase tracking-[0.25em] mb-8">
              <span className="w-6 h-px bg-white/10" />
              SP NET INC — Multi-Product Ecosystem
            </span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.03em] leading-[0.9]">
            <span className="block text-white">Secure digital</span>
            <span className="block text-gradient glow-text mt-1">
              platforms.
            </span>
            <span className="block text-white/40 mt-1 text-[clamp(1.5rem,4vw,3rem)] font-light">
              Built for tomorrow.
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-8 text-lg md:text-xl text-white/40 max-w-xl leading-relaxed font-light">
            From encrypted messaging to digital economies, SP NET is engineering the technology ecosystem that empowers communities and enterprises alike.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-12 flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="/products"
              className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-black text-sm font-semibold transition-all duration-500 hover:scale-[1.03] active:scale-[0.97] hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]"
            >
              Explore products
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link
              href="/roadmap"
              className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border border-white/[0.08] text-white/60 text-sm font-medium transition-all duration-500 hover:border-white/20 hover:text-white/90 hover:bg-white/[0.03]"
            >
              View roadmap
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-16 flex flex-wrap items-center gap-6">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <circle cx="5" cy="5" r="4.5" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  <circle cx="5" cy="5" r="2" fill="rgba(0,212,255,0.3)" />
                </svg>
                <span className="text-[11px] text-white/35 font-medium tracking-wide">{item}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-12 left-6 right-6 max-w-7xl mx-auto hidden md:flex items-end justify-between"
          aria-hidden="true"
        >
          <div className="flex items-center gap-3 text-[10px] text-white/25 uppercase tracking-[0.2em] font-medium">
            <span className="w-8 h-px bg-white/[0.06]" />
            <span>Founded by Savan Patel</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-[9px] text-white/25 font-light">Scroll</span>
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
          <div className="flex items-center gap-3 text-[10px] text-white/25 uppercase tracking-[0.2em] font-medium">
            <span className="w-8 h-px bg-white/[0.06]" />
            <span>Made in India</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
