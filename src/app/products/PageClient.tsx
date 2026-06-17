"use client";

import { motion } from "framer-motion";
import AuroraBackground from "@/components/AuroraBackground";
import { products } from "@/data/products";
import type { ProductStatus } from "@/data/products";

const statusConfig: Record<ProductStatus, { label: string; className: string }> = {
  current: { label: "Current", className: "text-[#00d4ff] bg-[#00d4ff]/10 border-[#00d4ff]/20" },
  "in-development": { label: "In Development", className: "text-[#7b61ff] bg-[#7b61ff]/10 border-[#7b61ff]/20" },
  planned: { label: "Planned", className: "text-[#f59e0b] bg-[#f59e0b]/10 border-[#f59e0b]/20" },
  future: { label: "Future", className: "text-white/50 bg-white/[0.04] border-white/[0.06]" },
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemAnim = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function ProductsPageClient() {
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
              <span className="text-[10px] font-semibold text-white/35 uppercase tracking-[0.2em]">
                Products
              </span>
            </div>
            <h1 className="text-[clamp(3rem,8vw,6rem)] font-bold tracking-[-0.03em] leading-[0.95]">
              <span className="text-gradient">Products</span>
              <br />
              <span className="text-white/50">for every layer</span>
            </h1>
            <p className="mt-5 max-w-lg text-[15px] text-white/50 font-light leading-relaxed">
              From messaging to infrastructure — each product engineered to connect, empower, and scale.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-5"
          >
            {products.map((product) => {
              const status = statusConfig[product.status];
              return (
                <motion.div
                  key={product.name}
                  variants={itemAnim}
                  className="group relative p-[1px] rounded-2xl overflow-hidden"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative p-7 md:p-10 rounded-2xl bg-[rgba(255,255,255,0.015)] border border-white/[0.04] group-hover:border-white/[0.08] transition-all duration-500 overflow-hidden">
                    <div
                      className="absolute top-0 right-0 w-[300px] h-[300px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full"
                      style={{
                        background: `radial-gradient(circle at center, ${product.accent}08, transparent 70%)`,
                      }}
                    />
                    <ProductVisual name={product.name} accent={product.accent} />
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10 items-start">
                      <div className="lg:col-span-3">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: product.accent }} />
                          <span className={`text-[9px] font-medium px-2 py-0.5 rounded-full border ${status.className} uppercase tracking-wider`}>
                            {status.label}
                          </span>
                        </div>
                        <h2 className="text-[24px] md:text-[32px] font-bold text-white/80 group-hover:text-white transition-colors duration-300">
                          {product.name}
                        </h2>
                        <p className="mt-1 text-sm font-medium text-white/50">{product.tagline}</p>
                        <p className="mt-3 text-[13px] text-white/60 leading-relaxed font-light max-w-xl">
                          {product.description}
                        </p>
                      </div>
                      <div className="lg:col-span-2">
                        <h4 className="text-[9px] font-semibold text-white/35 uppercase tracking-[0.15em] mb-3">
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {product.features.map((f) => (
                            <li key={f} className="flex items-center gap-2.5 text-[13px] text-white/40">
                              <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: product.accent }} />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ProductVisual({ name, accent }: { name: string; accent: string }) {
  const initials = name
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="relative z-10 mb-8 lg:mb-10 overflow-hidden rounded-xl bg-white/[0.02] border border-white/[0.04]">
      <svg width="100%" height="140" viewBox="0 0 400 140" preserveAspectRatio="none" className="block">
        <defs>
          <linearGradient id={`visual-bg-${name}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={accent} stopOpacity="0.06" />
            <stop offset="100%" stopColor={accent} stopOpacity="0.01" />
          </linearGradient>
          <linearGradient id={`visual-fg-${name}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={accent} stopOpacity="0.4" />
            <stop offset="100%" stopColor={accent} stopOpacity="0.15" />
          </linearGradient>
        </defs>
        <rect width="400" height="140" fill={`url(#visual-bg-${name})`} rx="12" />
        <text
          x="24"
          y="100"
          fontFamily="system-ui, sans-serif"
          fontSize="56"
          fontWeight="700"
          fill={`url(#visual-fg-${name})`}
        >
          {initials}
        </text>
        <circle cx="340" cy="30" r="40" fill={accent} opacity="0.04" />
        <circle cx="370" cy="90" r="24" fill={accent} opacity="0.03" />
        <circle cx="24" cy="40" r="6" fill={accent} opacity="0.15" />
        <circle cx="48" cy="24" r="3" fill={accent} opacity="0.12" />
        <rect x="310" y="110" width="60" height="3" rx="1.5" fill={accent} opacity="0.1" />
      </svg>
    </div>
  );
}
