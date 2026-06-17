"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { benefits } from "@/data/careers";

export default function CareersSection() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden" role="region" aria-label="Careers">
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
              Careers
            </span>
          </div>
          <h2 className="text-[34px] sm:text-[44px] md:text-[56px] font-bold tracking-[-0.03em] leading-[1.05]">
            <span className="text-gradient-1">Join the team</span>
            <br />
            <span className="text-white/60">building the future</span>
          </h2>
          <p className="mt-5 text-[15px] text-white/40 max-w-lg font-light leading-relaxed">
            We are looking for people who want to build technology that empowers communities.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {benefits.slice(0, 4).map((benefit, i) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="p-4 rounded-xl border border-white/[0.04] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/[0.08] hover:scale-[1.03] transition-all duration-500 text-center"
            >
              <div className="w-5 h-5 rounded-full bg-white/[0.04] flex items-center justify-center mx-auto mb-2">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="text-[12px] text-white/40 font-light">{benefit}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <Link
            href="/careers"
            className="group inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white/70 transition-colors duration-300 font-light"
          >
            View open positions
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
              <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
