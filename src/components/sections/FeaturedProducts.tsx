"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { products, type ProductStatus } from "@/data/products";

const statusConfig: Record<ProductStatus, { label: string; className: string }> = {
  current: { label: "Beta", className: "text-[#00d4ff] bg-[#00d4ff]/10 border-[#00d4ff]/20" },
  "in-development": { label: "In Development", className: "text-[#7b61ff] bg-[#7b61ff]/10 border-[#7b61ff]/20" },
  planned: { label: "Planned", className: "text-[#f59e0b] bg-[#f59e0b]/10 border-[#f59e0b]/20" },
  future: { label: "Future", className: "text-white/50 bg-white/[0.04] border-white/[0.06]" },
};

export default function FeaturedProducts() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} className="relative py-28 md:py-36 overflow-hidden" role="region" aria-label="Products">
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
            <span className="text-[10px] font-semibold text-white/35 uppercase tracking-[0.2em]">
              Products
            </span>
          </div>
          <h2 className="text-[34px] sm:text-[44px] md:text-[56px] font-bold tracking-[-0.03em] leading-[1.05]">
            <span className="text-gradient-1">Building</span>{" "}
            <span className="text-white/60">the</span>
            <br />
            <span className="text-white/60">ecosystem</span>
          </h2>
          <p className="mt-5 text-[15px] text-white/40 max-w-lg font-light leading-relaxed">
            From messaging to infrastructure — every product engineered for security, scale, and community.
          </p>
        </motion.div>

        <motion.div style={{ y }} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {products.slice(0, 4).map((product, i) => {
            const status = statusConfig[product.status];
            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href="/products"
                  className="group relative block p-[1px] rounded-2xl overflow-hidden"
                >
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: `conic-gradient(from 0deg at 50% 50%, ${product.accent}00, ${product.accent}15, ${product.accent}00, ${product.accent}15, ${product.accent}00)`,
                      filter: "blur(4px)",
                    }}
                  />
                  <div className="relative p-7 md:p-8 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-white/[0.05] group-hover:border-white/[0.12] group-hover:scale-[1.01] transition-all duration-500 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: `linear-gradient(135deg, ${product.accent}08, transparent)` }} />
                    <svg className="absolute -top-6 -right-6 w-32 h-32 opacity-20 group-hover:opacity-40 transition-opacity duration-700" viewBox="0 0 200 200" fill="none" preserveAspectRatio="none">
                      <circle cx="160" cy="40" r="80" fill={product.accent} opacity="0.08" />
                      <circle cx="200" cy="100" r="50" fill={product.accent} opacity="0.05" />
                    </svg>
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-5">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-9 h-9 rounded-[10px] flex items-center justify-center text-sm font-bold"
                            style={{ backgroundColor: `${product.accent}12`, color: product.accent }}
                          >
                            {product.name[0]}
                          </div>
                          <div>
                            <span className={`text-[9px] font-medium px-2 py-0.5 rounded-full border ${status.className} uppercase tracking-wider`}>
                              {status.label}
                            </span>
                          </div>
                        </div>
                      </div>
                      <h3 className="text-[22px] font-bold text-white/85 group-hover:text-white transition-colors duration-300 mb-1">
                        {product.name}
                      </h3>
                      <p className="text-[13px] text-white/50 leading-relaxed font-light mb-4">
                        {product.tagline}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {product.features.slice(0, 3).map((f) => (
                          <span
                            key={f}
                            className="px-2.5 py-1 text-[10px] font-medium text-white/40 bg-white/[0.03] border border-white/[0.04] rounded-full"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 text-center"
        >
          <Link
            href="/products"
            className="group inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white/70 transition-colors duration-300 font-light"
          >
            View all products
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
              <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
