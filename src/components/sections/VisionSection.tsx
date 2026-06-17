"use client";

import { motion } from "framer-motion";

export default function VisionSection() {
  const text = "We believe technology should connect communities, not isolate them.";
  const words = text.split(" ");

  return (
    <section className="relative py-36 md:py-48 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="aurora aurora-2" style={{ width: "900px", height: "900px", opacity: 0.06 }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px w-8 bg-white/10" />
            <span className="text-[10px] font-semibold text-white/20 uppercase tracking-[0.2em]">
              Our Vision
            </span>
          </div>

          <div className="max-w-6xl">
            <p className="text-[clamp(2rem,6vw,5.5rem)] font-bold tracking-[-0.03em] leading-[1.05]">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block mr-[0.3em]"
                  style={{
                    color:
                      word === "connect"
                        ? undefined
                        : word === "isolate"
                        ? "rgba(255,255,255,0.4)"
                        : "rgba(255,255,255,0.85)",
                  }}
                >
                  {word === "connect" ? (
                    <span className="text-gradient-1">connect</span>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
            </p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 max-w-xl text-[15px] text-white/25 leading-relaxed font-light tracking-wide"
            >
              A world where every community has the tools to communicate, collaborate, and thrive — powered by secure, accessible, and intelligent technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex items-center gap-3"
            >
              <div className="h-px w-10 bg-white/15" />
              <span className="text-sm text-white/20 font-light tracking-wide">
                Savan Patel &mdash; Founder &amp; CEO
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
