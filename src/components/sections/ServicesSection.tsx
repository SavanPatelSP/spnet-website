"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section className="relative py-28 md:py-36" role="region" aria-label="Future Services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2"
          >
            <span className="inline-block text-[10px] font-semibold text-white/15 uppercase tracking-[0.25em] mb-5">
              Future Services
            </span>
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-tight leading-[1.05] text-white">
              Enterprise capabilities on the horizon.
            </h2>
            <div className="mt-6 h-px w-12 bg-white/[0.08]" />
            <p className="mt-6 text-sm text-white/25 leading-relaxed font-light max-w-sm">
              As SPNET grows, we plan to offer enterprise-grade services built on the same technology stack as our products. These are future offerings — part of our long-term vision.
            </p>
            <div className="mt-8">
              <Link
                href="/services"
                className="group inline-flex items-center gap-1.5 text-sm text-white/30 hover:text-white/70 transition-colors duration-300 font-light"
              >
                View future services <span className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>

          <div className="lg:col-span-3 space-y-px">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group relative p-6 md:p-7 rounded-2xl transition-all duration-500 cursor-default overflow-hidden"
                style={{ background: i % 2 === 0 ? "rgba(0,212,255,0.04)" : "rgba(123,97,255,0.04)" }}
              >
                <div className="relative z-10 flex items-start gap-5">
                  <span className="text-[11px] font-mono text-white/15 w-6 shrink-0 pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <h3 className="text-base font-semibold text-white/90">
                        {service.title}
                      </h3>
                      <span className="px-2 py-0.5 text-[9px] font-medium text-white/25 bg-white/[0.04] border border-white/[0.06] rounded-full tracking-wider uppercase">
                        Planned
                      </span>
                    </div>
                    <p className="text-sm text-white/25 leading-relaxed font-light max-w-xl">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
