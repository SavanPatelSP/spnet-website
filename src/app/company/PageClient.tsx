"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AuroraBackground from "@/components/AuroraBackground";
import { companyData } from "@/data/company";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function CompanyPage() {
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
                Company
              </span>
            </div>
            <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold tracking-[-0.03em] leading-[0.95]">
              <span className="text-gradient-2">Who we are</span>
              <br />
              <span className="text-white/50">what we stand for</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="max-w-3xl mb-24"
          >
            <span className="inline-block text-[10px] font-semibold text-white/30 uppercase tracking-[0.25em] mb-5">
              Origin Story
            </span>
            <p className="text-xl md:text-2xl text-white/50 leading-relaxed font-light">
              Founded by <span className="text-white/60">{companyData.founder.name}</span>, SP NET INC started with a simple idea:
              build technology that puts community first. What began as a vision for better communication has grown into a
              multi-product ecosystem spanning messaging, membership, digital economy, and administration tools —
              with AI, cloud, and enterprise products on the horizon.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-white/10" />
                <span className="text-[10px] font-semibold text-white/35 uppercase tracking-[0.2em]">
                  Our Mission
                </span>
              </div>
              <p className="text-[24px] md:text-[28px] font-bold text-white/75 leading-relaxed tracking-tight">
                {companyData.mission}
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-white/10" />
                <span className="text-[10px] font-semibold text-white/35 uppercase tracking-[0.2em]">
                  Our Vision
                </span>
              </div>
              <p className="text-[24px] md:text-[28px] font-bold text-white/75 leading-relaxed tracking-tight">
                {companyData.vision}
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-white/10" />
              <span className="text-[10px] font-semibold text-white/35 uppercase tracking-[0.2em]">
                Our Values
              </span>
            </div>
            <h2 className="text-[32px] md:text-[44px] font-bold tracking-[-0.03em]">
              <span className="text-gradient-1">Principles</span>
              <span className="text-white/50"> that guide us</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-24">
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
                <p className="text-[13px] text-white/40 leading-relaxed font-light">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-white/10" />
              <span className="text-[10px] font-semibold text-white/35 uppercase tracking-[0.2em]">
                Long-Term Direction
              </span>
            </div>
            <h2 className="text-[32px] md:text-[44px] font-bold tracking-[-0.03em]">
              <span className="text-white/50">Building toward</span>
              <br />
              <span className="text-gradient-2">a connected future</span>
            </h2>
            <p className="mt-5 text-[15px] text-white/40 max-w-2xl font-light leading-relaxed">
              Our long-term vision is to become the most trusted technology ecosystem for communities and enterprises worldwide — 
              spanning secure communication, digital economies, AI-powered tools, and cloud infrastructure. We are building for 
              the next decade, not the next quarter.
            </p>
          </motion.div>

          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-white/10" />
                <span className="text-[10px] font-semibold text-white/35 uppercase tracking-[0.2em]">
                  Leadership
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-md p-7 md:p-8 rounded-2xl border border-white/[0.04] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00d4ff]/10 via-[#7b61ff]/10 to-[#b366ff]/10 flex items-center justify-center mb-5">
                <span className="text-xl font-bold text-gradient">SP</span>
              </div>
              <h3 className="text-[22px] font-bold text-white/85">{companyData.founder.name}</h3>
              <p className="text-sm text-white/60 mt-0.5 font-light">{companyData.founder.role}</p>
              <p className="mt-4 text-[13px] text-white/40 leading-relaxed font-light">
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
