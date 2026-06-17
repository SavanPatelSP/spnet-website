"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent");
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] w-[calc(100%-2rem)] max-w-lg"
          role="dialog"
          aria-label="Cookie consent"
        >
          <div className="rounded-2xl border border-white/[0.06] bg-[rgba(12,12,14,0.96)] backdrop-blur-2xl p-5 shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
            <p className="text-[13px] text-white/50 leading-relaxed font-light mb-4">
              We use essential cookies to ensure the site works properly. No tracking or analytics cookies are used.
            </p>
            <div className="flex items-center gap-2.5">
              <button
                onClick={accept}
                className="flex-1 px-4 py-2.5 rounded-xl bg-white text-black text-[12px] font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Accept
              </button>
              <button
                onClick={decline}
                className="flex-1 px-4 py-2.5 rounded-xl border border-white/[0.08] text-white/40 text-[12px] font-medium transition-all duration-300 hover:bg-white/[0.04] hover:text-white/60"
              >
                Decline
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
