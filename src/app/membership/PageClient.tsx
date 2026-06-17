"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AuroraBackground from "@/components/AuroraBackground";

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    features: ["Basic messaging", "Standard support", "Community access", "Public channels"],
    accent: "rgba(255,255,255,0.1)",
    border: "rgba(255,255,255,0.06)",
  },
  {
    name: "Premium",
    price: "TBD",
    period: "per month",
    features: ["All Free features", "Exclusive channels", "Priority support", "Extended message history", "Custom profile", "Early feature access"],
    accent: "rgba(123,97,255,0.12)",
    border: "rgba(123,97,255,0.15)",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "TBD",
    period: "custom",
    features: ["All Premium features", "Dedicated infrastructure", "Admin controls", "Audit logs", "Custom integrations", "SLA support"],
    accent: "rgba(0,212,255,0.12)",
    border: "rgba(0,212,255,0.15)",
  },
];

export default function MembershipPageClient() {
  return (
    <div className="pt-[72px]">
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <AuroraBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-white/10" />
              <span className="text-[10px] font-semibold text-white/20 uppercase tracking-[0.2em]">
                Membership
              </span>
            </div>
            <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold tracking-[-0.03em] leading-[0.95]">
              <span className="text-gradient">Premium</span>
              <br />
              <span className="text-white/30">membership</span>
            </h1>
            <p className="mt-5 max-w-lg text-[15px] text-white/30 font-light leading-relaxed">
              Unlock exclusive features, earn rewards, and get closer to the communities that matter to you.
            </p>
            <span className="inline-block mt-4 text-[11px] font-medium px-3 py-1.5 rounded-full text-[#7b61ff] bg-[#7b61ff]/10 border border-[#7b61ff]/20">
              In Development
            </span>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative p-[1px] rounded-2xl overflow-hidden ${tier.highlighted ? "" : ""}`}
                style={{
                  background: tier.highlighted ? "linear-gradient(135deg, rgba(123,97,255,0.3), rgba(179,102,255,0.15))" : "none",
                }}
              >
                <div className="relative p-7 md:p-8 rounded-2xl bg-[rgba(255,255,255,0.015)] border border-white/[0.04] h-full flex flex-col"
                  style={{
                    background: `linear-gradient(135deg, ${tier.accent}, transparent)`,
                    borderColor: tier.border,
                  }}
                >
                  <h3 className="text-xl font-bold text-white/85 mb-1">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-white">{tier.price}</span>
                    <span className="text-sm text-white/30 ml-1">/{tier.period}</span>
                  </div>
                  <ul className="space-y-2.5 mb-8 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-[13px] text-white/40">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-white/20 shrink-0">
                          <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
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
            <p className="text-sm text-white/25 font-light mb-6">
              Membership details are being finalized. Join the waitlist to be first to know.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black text-sm font-semibold transition-all duration-500 hover:scale-[1.03] active:scale-[0.97]"
            >
              Join waitlist
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
