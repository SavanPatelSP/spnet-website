"use client";

import { motion } from "framer-motion";

interface Props {
  colors?: [string, string, string];
  density?: "high" | "low";
}

const palettes: Record<string, [string, string, string]> = {
  default: ["rgba(0,212,255,0.35)", "rgba(123,97,255,0.35)", "rgba(179,102,255,0.25)"],
  warm: ["rgba(255,107,107,0.3)", "rgba(238,90,36,0.25)", "rgba(240,147,251,0.2)"],
  cool: ["rgba(0,212,255,0.25)", "rgba(16,185,129,0.25)", "rgba(123,97,255,0.2)"],
  amber: ["rgba(245,158,11,0.3)", "rgba(239,68,68,0.2)", "rgba(168,85,247,0.2)"],
};

export default function AuroraBackground({ colors, density = "low" }: Props) {
  const [c1, c2, c3] = colors || palettes.default;
  const mult = density === "high" ? 1.4 : 1;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <motion.div
        animate={{
          x: [0, 120 * mult, -60 * mult, 0],
          y: [0, -60 * mult, 80 * mult, 0],
        }}
        transition={{ duration: 25 / mult, repeat: Infinity, ease: "linear" }}
        className="aurora animate-breathe"
        style={{
          width: "700px", height: "700px", top: "5%", left: "-5%",
          background: `radial-gradient(circle at center, ${c1}, transparent 70%)`,
        }}
      />
      <motion.div
        animate={{
          x: [0, -100 * mult, 80 * mult, 0],
          y: [0, 80 * mult, -40 * mult, 0],
        }}
        transition={{ duration: 30 / mult, repeat: Infinity, ease: "linear" }}
        className="aurora"
        style={{
          width: "600px", height: "600px", top: "35%", right: "-5%",
          background: `radial-gradient(circle at center, ${c2}, transparent 70%)`,
        }}
      />
      <motion.div
        animate={{
          x: [0, 60 * mult, -100 * mult, 0],
          y: [0, -40 * mult, 80 * mult, 0],
        }}
        transition={{ duration: 22 / mult, repeat: Infinity, ease: "linear" }}
        className="aurora"
        style={{
          width: "500px", height: "500px", bottom: "10%", left: "20%",
          background: `radial-gradient(circle at center, ${c3}, transparent 70%)`,
        }}
      />
    </div>
  );
}
