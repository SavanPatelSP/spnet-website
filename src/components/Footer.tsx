import Link from "next/link";
import { footerGroups } from "@/data/navigation";
import { site } from "@/data/site";
import VerificationBadge from "@/components/VerificationBadge";

const trustIndicators = [
  { label: "Independent", sub: "Technology Company" },
  { label: "Founder Led", sub: "Savan Patel" },
  { label: "Made in India", sub: "Built with purpose" },
  { label: "Privacy First", sub: "End-to-end encrypted" },
  { label: "Security Focused", sub: "Zero-trust architecture" },
] as const;

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] bg-[#030303]" role="contentinfo">
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#00d4ff]/[0.025] to-transparent rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#7b61ff]/[0.025] to-transparent rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/[0.02] to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 mb-16">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2.5 text-base font-bold tracking-tight group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00d4ff]/10 via-[#7b61ff]/10 to-[#b366ff]/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(123,97,255,0.15)]">
                <span className="text-[11px] font-bold text-gradient">S</span>
              </div>
              <span className="inline-flex items-center gap-1.5">
                <span className="text-gradient">{site.name}</span>
                <span className="text-white/40 ml-0.5 font-normal transition-colors duration-300 group-hover:text-white/40">INC</span>
                <VerificationBadge />
              </span>
            </Link>

            <p className="mt-6 text-[13px] text-white/40 leading-relaxed max-w-[320px] font-light">
              {site.tagline}
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#00d4ff]/[0.06] to-[#7b61ff]/[0.06] border border-white/[0.06] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[12px] text-white/50 font-medium">
                    Founded and led by <span className="text-white/50">{site.foundedBy}</span>
                  </p>
                  <div className="mt-1 flex items-center gap-2 text-[11px] text-white/35 font-light">
                    <span>{site.location}</span>
                    <span className="text-white/[0.25]" aria-hidden="true">•</span>
                    <span>Independent Technology Company</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#00d4ff]/[0.06] to-[#7b61ff]/[0.06] border border-white/[0.06] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p className="text-[12px] text-white/50 font-medium mb-0.5">Official Contact</p>
                  <a
                    href="mailto:contact@sp-net.in"
                    className="text-[12px] text-white/40 hover:text-white/70 transition-colors duration-300 font-light"
                  >
                    contact@sp-net.in
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-2">
              {trustIndicators.map((indicator) => (
                <div
                  key={indicator.label}
                  className="px-3 py-2 rounded-lg bg-white/[0.015] border border-white/[0.04] hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-300"
                >
                  <p className="text-[10px] font-semibold text-white/50">{indicator.label}</p>
                  <p className="text-[9px] text-white/30 font-light mt-0.5">{indicator.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title} className="lg:col-span-2">
              <h4 className="text-[10px] font-semibold text-white/35 uppercase tracking-[0.18em] mb-6">
                {group.title}
              </h4>
              <ul className="space-y-3.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-white/50 hover:text-white/80 transition-all duration-300 font-light hover:translate-x-0.5 inline-flex items-center gap-1.5 group/link"
                    >
                      <span className="w-0 h-px bg-white/30 group-hover/link:w-2 transition-all duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="relative pt-8">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6">
            <p className="text-[11px] text-white/30 font-light order-2 md:order-1">
              &copy; {site.year} {site.fullName}. All Rights Reserved.
            </p>
            <nav className="flex items-center gap-6 order-1 md:order-2" aria-label="Legal links">
              <Link href="/contact" className="text-[11px] text-white/35 hover:text-white/50 transition-colors duration-300 font-light">Privacy Policy</Link>
              <span className="text-white/[0.15]" aria-hidden="true">/</span>
              <Link href="/contact" className="text-[11px] text-white/35 hover:text-white/50 transition-colors duration-300 font-light">Terms of Service</Link>
              <span className="text-white/[0.15]" aria-hidden="true">/</span>
              <Link href="/contact" className="text-[11px] text-white/35 hover:text-white/50 transition-colors duration-300 font-light">Cookie Policy</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
