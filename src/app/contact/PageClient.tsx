"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AuroraBackground from "@/components/AuroraBackground";
import { contactInfo } from "@/data/contact";
import { site } from "@/data/site";

export default function ContactPageClient() {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
        <AuroraBackground colors={["rgba(168,85,247,0.3)", "rgba(123,97,255,0.3)", "rgba(0,212,255,0.2)"]} density="high" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-block text-[10px] font-semibold text-white/15 uppercase tracking-[0.25em] mb-6">
                Contact
              </span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95]">
                <span className="text-white">Tell us what</span>
                <br />
                <span className="text-gradient">you&apos;re building.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 text-base text-white/25 leading-relaxed font-light max-w-lg"
            >
              {contactInfo.ctaText}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10"
            >
              <div className="inline-flex flex-col gap-2 p-6 md:p-8 rounded-2xl border border-white/[0.04] bg-white/[0.015]">
                <Link
                  href={`mailto:${contactInfo.email}`}
                  className="text-xl md:text-2xl font-medium text-white/80 hover:text-white transition-colors duration-300"
                >
                  {contactInfo.email}
                </Link>
                <span className="text-xs text-white/20 font-light">
                  {site.foundedBy} — {site.founderRole}
                </span>
                <span className="text-[11px] text-white/15 font-light mt-1">
                  {contactInfo.responseTime}
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-16 flex flex-wrap items-center gap-6 text-sm text-white/20 font-light"
            >
              <span>Based in {site.location}</span>
              <span className="text-white/10 hidden sm:inline" aria-hidden="true">/</span>
              <span>Founded {site.yearEstablished}</span>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
