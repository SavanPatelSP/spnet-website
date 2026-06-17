"use client";

import { motion } from "framer-motion";
import { team } from "@/data/team";

export default function TeamSection() {
  return (
    <section className="relative py-28 md:py-36" role="region" aria-label="Team">
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
              People
            </span>
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-tight leading-[1.05] text-white">
              Small team. Big vision.
            </h2>
            <div className="mt-6 h-px w-12 bg-white/[0.08]" />
            <p className="mt-6 text-sm text-white/25 leading-relaxed font-light max-w-sm">
              We are building a team of people who care deeply about community, technology, and craftsmanship. If that sounds like you — join us.
            </p>
          </motion.div>

          <div className="lg:col-span-3">
            <div className="space-y-3">
              {team.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex items-center gap-5 p-5 rounded-2xl border border-transparent hover:border-white/[0.06] hover:bg-white/[0.015] transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-full bg-white/[0.06] flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-white/[0.1]">
                    <span className="text-sm font-semibold text-white/40 transition-colors duration-500 group-hover:text-white/60">
                      {member.initials}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-white/90 transition-colors duration-500 group-hover:text-white">
                      {member.name}
                    </h3>
                    <p className="text-xs text-white/25 font-light mt-0.5">
                      {member.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
