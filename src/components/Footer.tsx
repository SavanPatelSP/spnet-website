import Link from "next/link";
import { footerGroups } from "@/data/navigation";
import { site } from "@/data/site";
import VerificationBadge from "@/components/VerificationBadge";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] bg-[#030303]" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-20">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 text-base font-bold tracking-tight group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00d4ff]/10 via-[#7b61ff]/10 to-[#b366ff]/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <span className="text-[10px] font-bold text-gradient">S</span>
              </div>
              <span className="inline-flex items-center gap-1.5">
                <VerificationBadge />
                <span className="text-gradient">{site.name}</span>
                <span className="text-white/30 ml-0.5 font-normal">INC</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-white/25 leading-relaxed max-w-[240px] font-light">
              {site.tagline}
            </p>
            <div className="mt-8 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <p className="text-[11px] text-white/15 font-light">
                  Founded by <span className="text-white/30">{site.foundedBy}</span>
                </p>
                <p className="text-[11px] text-white/15 font-light">
                  {site.location} — Est. {site.yearEstablished}
                </p>
              </div>
            </div>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-[10px] font-semibold text-white/25 uppercase tracking-[0.15em] mb-5">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/35 hover:text-white/80 transition-all duration-300 font-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-10 border-t border-white/[0.04]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <p className="text-[11px] text-white/15 font-light">
                &copy; {site.year} {site.fullName}. All rights reserved.
              </p>
              <div className="flex items-center gap-4" aria-label="Legal links">
                <span className="text-[11px] text-white/15 font-light">Privacy Policy</span>
                <span className="text-white/[0.04] text-[10px]" aria-hidden="true">|</span>
                <span className="text-[11px] text-white/15 font-light">Terms of Service</span>
                <span className="text-white/[0.04] text-[10px]" aria-hidden="true">|</span>
                <span className="text-[11px] text-white/15 font-light">Cookie Policy</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
