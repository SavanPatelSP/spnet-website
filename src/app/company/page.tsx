"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AuroraBackground from "@/components/AuroraBackground";
import { companyData } from "@/data/company";

export default function CompanyPage() {
  return (
    <div className="pt-[72px]">
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <AuroraBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-white/10" />
              <span className="text-[10px] font-semibold text-white/20 uppercase tracking-[0.2em]">
                Company
              </span>
            </div>
            <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold tracking-[-0.03em] leading-[0.95]">
              <span className="text-gradient-2">Who we are</span>
              <br />
              <span className="text-white/30">what we stand for</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Founder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mb-28"
          >
            <span className="inline-block text-[10px] font-semibold text-white/15 uppercase tracking-[0.25em] mb-5">
              Origin
            </span>
            <p className="text-xl md:text-2xl text-white/30 leading-relaxed font-light">
              Founded by <span className="text-white/60">{companyData.founder.name}</span>, SPNET INC started with a simple idea:
              build technology that puts community first. What began as a vision for better communication has grown into a
              multi-product ecosystem spanning messaging, membership, digital economy, and administration tools —
              with AI, cloud, and enterprise products on the horizon.
            </p>
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-28">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-white/10" />
                <span className="text-[10px] font-semibold text-white/20 uppercase tracking-[0.2em]">
                  Our Mission
                </span>
              </div>
              <p className="text-[24px] md:text-[28px] font-bold text-white/75 leading-relaxed tracking-tight">
                {companyData.mission}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-white/10" />
                <span className="text-[10px] font-semibold text-white/20 uppercase tracking-[0.2em]">
                  Our Vision
                </span>
              </div>
              <p className="text-[24px] md:text-[28px] font-bold text-white/75 leading-relaxed tracking-tight">
                {companyData.vision}
              </p>
            </motion.div>
          </div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-white/10" />
              <span className="text-[10px] font-semibold text-white/20 uppercase tracking-[0.2em]">
                Our Values
              </span>
            </div>
            <h2 className="text-[32px] md:text-[44px] font-bold tracking-[-0.03em]">
              <span className="text-gradient-1">Principles</span>
              <span className="text-white/30"> that guide us</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-28">
            {companyData.values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="group p-7 rounded-2xl border border-white/[0.04] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-500"
              >
                <div className="w-7 h-px bg-white/15 mb-5 group-hover:w-12 transition-all duration-500" />
                <h3 className="text-[17px] font-bold text-white/80 group-hover:text-white transition-colors duration-300 mb-2">
                  {value.title}
                </h3>
                <p className="text-[13px] text-white/25 leading-relaxed font-light">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Leadership */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-white/10" />
                <span className="text-[10px] font-semibold text-white/20 uppercase tracking-[0.2em]">
                  Leadership
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-md p-7 md:p-8 rounded-2xl border border-white/[0.04] bg-white/[0.015]"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00d4ff]/10 via-[#7b61ff]/10 to-[#b366ff]/10 flex items-center justify-center mb-5">
                <span className="text-xl font-bold text-gradient">SP</span>
              </div>
              <h3 className="text-[22px] font-bold text-white/85">{companyData.founder.name}</h3>
              <p className="text-sm text-white/35 mt-0.5 font-light">{companyData.founder.role}</p>
              <p className="mt-4 text-[13px] text-white/25 leading-relaxed font-light">
                {companyData.founder.bio}
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-16 text-center"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black text-sm font-semibold transition-all duration-500 hover:scale-[1.03] active:scale-[0.97]"
            >
              Start a conversation
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
