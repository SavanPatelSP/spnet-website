"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/data/navigation";
import { site } from "@/data/site";
import VerificationBadge from "@/components/VerificationBadge";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-[rgba(3,3,3,0.88)] backdrop-blur-2xl border-b border-white/[0.04] shadow-[0_1px_0_0_rgba(255,255,255,0.02)]"
            : "bg-transparent"
        }`}
        role="banner"
      >
        <nav className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between" aria-label="Main navigation">
          <Link href="/" className="relative z-10 group" aria-label={`${site.fullName} home`}>
            <span className="text-lg font-bold tracking-tight inline-flex items-center">
              <span className="text-gradient">{site.name}</span>
              <span className="text-white/50 ml-0.5 font-normal transition-colors duration-300 group-hover:text-white/50">INC</span>
              <span className="ml-1.5"><VerificationBadge /></span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-[16px] py-2 text-[13px] font-medium tracking-wide transition-all duration-300 rounded-[10px] hover:bg-white/[0.04]"
                  style={{ color: isActive ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.4)" }}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 bg-white/[0.07] rounded-[10px] -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-10 w-9 h-9 flex items-center justify-center rounded-lg hover:bg-white/[0.04] transition-colors focus-visible:outline focus-visible:outline-1 focus-visible:outline-white/30"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="transition-transform duration-300">
              <motion.rect
                x="1" y="4" width="16" height="1.5" rx="0.75" fill="white"
                animate={mobileOpen ? { rotate: 45, y: 4.5, x: 0 } : { rotate: 0, y: 0, x: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: "center" }}
              />
              <motion.rect
                x="1" y="12.5" width="16" height="1.5" rx="0.75" fill="white"
                animate={mobileOpen ? { rotate: -45, y: -4.5, x: 0 } : { rotate: 0, y: 0, x: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: "center" }}
              />
            </svg>
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(40px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[rgba(0,0,0,0.96)] lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-6" aria-label="Mobile navigation">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: 0.08 + i * 0.04, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={closeMobile}
                    className={`relative text-[28px] font-light tracking-tight transition-colors duration-300 ${
                      pathname === item.href
                        ? "text-white"
                        : "text-white/50 hover:text-white/70"
                    }`}
                    aria-current={pathname === item.href ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
