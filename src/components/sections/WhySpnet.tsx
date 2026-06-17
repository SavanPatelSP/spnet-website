"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    number: "01",
    title: "Community First",
    description: "Every product we build starts with community. We design for connection, participation, and shared growth — because strong communities change everything.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Privacy by Design",
    description: "End-to-end encryption and zero-knowledge architectures ensure your data stays yours. Privacy is not an afterthought — it is the foundation.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Transparent Economy",
    description: "Digital economies only work when users trust the system. Fair rules, clear mechanics, and user-controlled transactions built on transparency.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Innovation with Purpose",
    description: "We innovate to solve real problems. Every feature, product, and platform decision is measured against one question: does this empower our community?",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Trust & Security",
    description: "Enterprise-grade protocols, continuous monitoring, and proactive threat detection keep every layer of the ecosystem safe and reliable.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Scalable Architecture",
    description: "Built to grow from a single community to millions of users. Infrastructure that scales seamlessly — from prototype to global platform.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 3 21 3 21 8" /><line x1="4" y1="20" x2="21" y2="3" /><polyline points="21 16 21 21 16 21" /><line x1="15" y1="15" x2="21" y2="21" /><line x1="3" y1="3" x2="9" y2="9" />
      </svg>
    ),
  },
];

export default function WhySpnet() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
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
            <span className="text-[10px] font-semibold text-white/20 uppercase tracking-[0.2em]">
              Why SPNET
            </span>
          </div>
          <h2 className="text-[34px] sm:text-[44px] md:text-[56px] font-bold tracking-[-0.03em] leading-[1.05]">
            <span className="text-white/35">Built on</span>{" "}
            <span className="text-gradient-2">trust</span>
            <br />
            <span className="text-white/35">powered by community</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-6 md:p-7 rounded-2xl border border-white/[0.04] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.04] flex items-center justify-center text-white/30 group-hover:text-white/60 group-hover:bg-white/[0.06] transition-all duration-500 flex-shrink-0">
                  {reason.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <h3 className="text-[17px] font-bold text-white/80 group-hover:text-white transition-colors duration-300">
                      {reason.title}
                    </h3>
                  </div>
                  <p className="text-[13px] text-white/25 leading-relaxed font-light">
                    {reason.description}
                  </p>
                </div>
              </div>
              <span className="text-[40px] font-bold text-white/[0.02] absolute bottom-3 right-4 select-none pointer-events-none">
                {reason.number}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
