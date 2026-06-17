"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative py-36 md:py-48 overflow-hidden" role="region" aria-label="Call to action">
      <div className="absolute inset-0">
        <motion.div
          animate={{ x: [0, 80, -40, 0], y: [0, -40, 60, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="aurora aurora-1"
          style={{ width: "800px", height: "800px", top: "50%", left: "50%", transform: "translate(-50%,-50%)", opacity: 0.08 }}
        />
        <motion.div
          animate={{ x: [0, -60, 80, 0], y: [0, 60, -30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="aurora aurora-2"
          style={{ width: "600px", height: "600px", top: "50%", left: "30%", transform: "translate(-50%,-50%)", opacity: 0.06 }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold tracking-[-0.03em] leading-[1.05]">
            <span className="text-white/85">Join the</span>
            <br />
            <span className="text-gradient-2">SP NET ecosystem</span>
          </h2>

          <p className="mt-6 text-[15px] text-white/40 max-w-lg mx-auto font-light leading-relaxed">
            Whether you want to use our products, build on our platform, or join our team — there is a place for you in the SP NET ecosystem.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="group relative px-7 py-3.5 text-[13px] font-medium text-white bg-white/[0.06] border border-white/[0.1] rounded-full overflow-hidden transition-all duration-500 hover:bg-white/[0.1] hover:shadow-[0_0_30px_rgba(123,97,255,0.15)]"
            >
              <span className="relative z-10">Get in Touch</span>
              <motion.div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff]/15 via-[#7b61ff]/15 to-[#b366ff]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
            <Link
              href="/careers"
              className="group relative px-7 py-3.5 text-[13px] font-medium text-white/40 hover:text-white/80 border border-white/[0.06] rounded-full transition-all duration-500 hover:border-white/[0.15] hover:bg-white/[0.02]"
            >
              View Careers
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="inline-block ml-1.5 group-hover:translate-x-1 transition-transform duration-300">
                <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
