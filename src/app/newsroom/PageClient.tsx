"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AuroraBackground from "@/components/AuroraBackground";

export default function NewsroomPageClient() {
  return (
    <div className="pt-[72px]">
      <section className="relative min-h-[45vh] flex items-center overflow-hidden">
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
                Newsroom
              </span>
            </div>
            <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold tracking-[-0.03em] leading-[0.95]">
              <span className="text-gradient-2">Latest</span>
              <br />
              <span className="text-white/50">from SP NET</span>
            </h1>
            <p className="mt-5 max-w-lg text-[15px] text-white/50 font-light leading-relaxed">
              Product launches, company announcements, and ecosystem developments — all in one place.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-1"
            >
              <h2 className="text-[28px] font-bold tracking-[-0.03em] text-white mb-4">Media Center</h2>
              <p className="text-sm text-white/40 font-light leading-relaxed">
                Stay informed with the latest news, press releases, and updates from the SP NET team.
              </p>
              <div className="mt-8 space-y-4">
                {["All Updates", "Product News", "Company Updates", "Press Releases"].map((cat) => (
                  <button
                    key={cat}
                    className="block w-full text-left px-4 py-2.5 rounded-lg text-[13px] text-white/50 hover:text-white/80 hover:bg-white/[0.03] transition-all duration-300 font-light"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-2"
            >
              <div className="text-center py-20 px-6 rounded-2xl border border-white/[0.04] bg-white/[0.015]">
                <div className="w-16 h-16 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mx-auto mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="12" y1="18" x2="12" y2="12" />
                    <line x1="9" y1="15" x2="15" y2="15" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white/50 mb-3">No announcements yet</h2>
                <p className="text-sm text-white/40 font-light max-w-md mx-auto leading-relaxed">
                  Our first announcement is coming soon. Check back for product launches, company updates, and news from the SP NET team.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <p className="text-sm text-white/40 font-light mb-6">
              Want to receive updates? Reach out to our team.
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
