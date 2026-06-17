"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { contactInfo } from "@/data/contact";
import { site } from "@/data/site";

export default function ContactSection() {
  return (
    <section className="relative py-28 md:py-36" role="region" aria-label="Contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2"
          >
            <span className="inline-block text-[10px] font-semibold text-white/15 uppercase tracking-[0.25em] mb-5">
              Contact
            </span>
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-tight leading-[1.05] text-white">
              Let&apos;s build something together.
            </h2>
            <div className="mt-6 h-px w-12 bg-white/[0.08]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <p className="text-base md:text-lg text-white/30 leading-relaxed font-light max-w-xl mb-10">
              {contactInfo.ctaText}
            </p>

            <div className="p-6 md:p-8 rounded-2xl border border-white/[0.04] bg-white/[0.015] inline-block">
              <Link
                href={`mailto:${contactInfo.email}`}
                className="text-xl md:text-2xl font-medium text-white/80 hover:text-white transition-colors duration-300"
              >
                {contactInfo.email}
              </Link>
              <div className="mt-3 flex items-center gap-3 text-xs text-white/20 font-light">
                <span>{site.foundedBy} — {site.founderRole}</span>
                <span className="text-white/10" aria-hidden="true">/</span>
                <span>{contactInfo.responseTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
