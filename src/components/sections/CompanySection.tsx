"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { companyData } from "@/data/company";

export default function CompanySection() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden" role="region" aria-label="Company">
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
              Company
            </span>
          </div>
          <h2 className="text-[34px] sm:text-[44px] md:text-[56px] font-bold tracking-[-0.03em] leading-[1.05]">
            <span className="text-gradient-2">Who we are</span>
            <br />
            <span className="text-white/60">what we stand for</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2"
          >
            <p className="text-base md:text-lg text-white/50 leading-relaxed font-light">
              Founded by {companyData.founder.name}, SP NET INC is building the future of connected communities through secure communication, digital economies, and intelligent platforms.
            </p>
            <div className="mt-6 h-px w-12 bg-white/[0.08]" />
            <p className="mt-6 text-sm text-white/40 leading-relaxed font-light max-w-sm">
              {companyData.mission}
            </p>
          </motion.div>

          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {companyData.values.slice(0, 4).map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="group p-5 rounded-2xl border border-white/[0.04] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-500"
                >
                  <div className="w-6 h-px bg-white/15 mb-4 group-hover:w-10 transition-all duration-500" />
                  <h3 className="text-[15px] font-bold text-white/80 group-hover:text-white transition-colors duration-300 mb-1.5">
                    {value.title}
                  </h3>
                  <p className="text-[12px] text-white/40 leading-relaxed font-light">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 text-center"
        >
          <Link
            href="/company"
            className="group inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white/70 transition-colors duration-300 font-light"
          >
            Learn more about SP NET
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
              <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
