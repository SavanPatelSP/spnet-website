"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AuroraBackground from "@/components/AuroraBackground";

const economyFeatures = [
  {
    title: "Coins",
    description: "Everyday currency within the SP NET ecosystem. Earn coins through participation, engagement, and contributions. Spend on features, content, and community perks.",
    icon: "●",
    accent: "#f59e0b",
  },
  {
    title: "Diamonds",
    description: "Premium currency for exclusive items, premium content, and high-value transactions. Diamonds represent the top tier of the SP NET economy.",
    icon: "◆",
    accent: "#00d4ff",
  },
  {
    title: "Earning",
    description: "Multiple ways to earn — community contributions, content creation, engagement rewards, referrals, and premium membership benefits.",
    icon: "↑",
    accent: "#10b981",
  },
  {
    title: "Spending",
    description: "Use your currency for premium features, exclusive content, community perks, customizations, and peer-to-peer transactions within the ecosystem.",
    icon: "→",
    accent: "#7b61ff",
  },
  {
    title: "Trading",
    description: "Peer-to-peer transactions enable a vibrant community economy. Trade coins, gift diamonds, and participate in the ecosystem marketplace.",
    icon: "⇄",
    accent: "#ef4444",
  },
  {
    title: "Transparency",
    description: "All economic activity is recorded and verifiable. Clear rules, fair mechanics, and user-controlled transactions build trust in the system.",
    icon: "◈",
    accent: "#b366ff",
  },
];

export default function EconomyPageClient() {
  return (
    <div className="pt-[72px]">
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <AuroraBackground colors={["rgba(245,158,11,0.25)", "rgba(0,212,255,0.2)", "rgba(123,97,255,0.2)"]} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-white/10" />
              <span className="text-[10px] font-semibold text-white/35 uppercase tracking-[0.2em]">
                Economy
              </span>
            </div>
            <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold tracking-[-0.03em] leading-[0.95]">
              <span className="text-gradient">Coins &</span>
              <br />
              <span className="text-white/50">Diamonds Economy</span>
            </h1>
            <p className="mt-5 max-w-lg text-[15px] text-white/50 font-light leading-relaxed">
              A digital economy built for communities. Earn, spend, and trade — powered by transparency and trust.
            </p>
            <span className="inline-block mt-4 text-[11px] font-medium px-3 py-1.5 rounded-full text-[#7b61ff] bg-[#7b61ff]/10 border border-[#7b61ff]/20">
              In Development
            </span>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
            {economyFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="group p-6 md:p-7 rounded-2xl border border-white/[0.04] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-500"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-4"
                  style={{ backgroundColor: `${feature.accent}12`, color: feature.accent }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-[17px] font-bold text-white/80 group-hover:text-white transition-colors duration-300 mb-2">
                  {feature.title}
                </h3>
                <p className="text-[13px] text-white/40 leading-relaxed font-light">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <p className="text-sm text-white/40 font-light mb-6">
              The SP NET economy is being designed with fairness and transparency at its core.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black text-sm font-semibold transition-all duration-500 hover:scale-[1.03] active:scale-[0.97]"
            >
              Stay updated
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
