"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AuroraBackground from "@/components/AuroraBackground";
import { departments, benefits } from "@/data/careers";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemAnim = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function CareersPageClient() {
  return (
    <div className="pt-[72px]">
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <AuroraBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-white/10" />
              <span className="text-[10px] font-semibold text-white/35 uppercase tracking-[0.2em]">
                Careers
              </span>
            </div>
            <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold tracking-[-0.03em] leading-[0.95]">
              <span className="text-gradient-1">Join the team</span>
              <br />
              <span className="text-white/50">building the future</span>
            </h1>
            <p className="mt-5 max-w-lg text-[15px] text-white/50 font-light leading-relaxed">
              We are looking for people who want to build technology that empowers communities. If that sounds like you, we want to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-14"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-white/10" />
              <span className="text-[10px] font-semibold text-white/35 uppercase tracking-[0.2em]">
Why SP NET

              
              </span>
            </div>
            <h2 className="text-[32px] md:text-[44px] font-bold tracking-[-0.03em]">
              <span className="text-white/50">Build with</span>{" "}
              <span className="text-gradient-2">purpose</span>
            </h2>
            <p className="mt-4 text-[15px] text-white/40 max-w-xl font-light leading-relaxed">
              At SP NET, we are building technology that connects communities, empowers creators, and creates economic opportunity. Every role contributes to that mission.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="mb-20"
          >
            <h3 className="text-[10px] font-semibold text-white/35 uppercase tracking-[0.2em] mb-6">Culture &amp; Benefits</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {benefits.map((benefit) => (
                <motion.div
                  key={benefit}
                  variants={itemAnim}
                  className="p-5 rounded-xl border border-white/[0.04] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-500 text-center"
                >
                  <div className="w-8 h-8 rounded-full bg-white/[0.04] flex items-center justify-center mx-auto mb-3">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-[13px] text-white/40 font-light">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-white/10" />
              <span className="text-[10px] font-semibold text-white/35 uppercase tracking-[0.2em]">
                Open positions
              </span>
            </div>
            <h2 className="text-[32px] md:text-[44px] font-bold tracking-[-0.03em]">
              <span className="text-white/50">Future</span>{" "}
              <span className="text-gradient-1">opportunities</span>
            </h2>
            <p className="mt-4 text-[15px] text-white/40 max-w-xl font-light leading-relaxed">
              We are building our team for the future. If you share our vision, we want to connect.
            </p>
          </motion.div>

          <div className="space-y-4">
            {departments.map((dept) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group p-6 md:p-7 rounded-2xl border border-white/[0.04] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: dept.accent }} />
                  <h3 className="text-[17px] font-bold text-white/75">{dept.name}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {dept.roles.map((role) => (
                    <span
                      key={role}
                      className="px-3.5 py-2.5 rounded-lg border border-white/[0.04] bg-white/[0.02] text-[13px] text-white/60 font-light"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-14 text-center"
          >
            <p className="text-sm text-white/40 font-light mb-6">
              No open roles yet — but we are building our team. Reach out and let us know how you can contribute.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black text-sm font-semibold transition-all duration-500 hover:scale-[1.03] active:scale-[0.97]"
            >
              Get in touch
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
