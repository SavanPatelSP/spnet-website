"use client";

import { useState, useCallback, useRef, type ReactNode, type FormEvent } from "react";
import { motion } from "framer-motion";
import AuroraBackground from "@/components/AuroraBackground";
import { contactChannels, contactInfo } from "@/data/contact";
import { site } from "@/data/site";
import type { ContactChannel } from "@/data/contact";

const iconMap: Record<ContactChannel["iconName"], ReactNode> = {
  mail: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  users: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  briefcase: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
    </svg>
  ),
  shield: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
};

function ContactCard({ channel, index }: { channel: ContactChannel; index: number }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(channel.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const el = document.createElement("textarea");
      el.value = channel.email;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [channel.email]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="group relative h-full p-[1px] rounded-2xl overflow-hidden">
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/10 via-transparent to-[#7b61ff]/10 rounded-2xl" />
        </div>
        <div className="relative h-full p-6 md:p-7 rounded-2xl bg-[rgba(255,255,255,0.015)] border border-white/[0.05] group-hover:border-white/[0.1] transition-all duration-500">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-[12px] bg-white/[0.04] border border-white/[0.04] flex items-center justify-center text-white/50 group-hover:text-white/60 group-hover:bg-white/[0.06] group-hover:border-white/[0.08] transition-all duration-500 shrink-0">
              {iconMap[channel.iconName]}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-[15px] font-bold text-white/80 group-hover:text-white transition-colors duration-300 mb-1">
                {channel.label}
              </h3>
              <p className="text-[12px] text-white/40 leading-relaxed font-light mb-3">
                {channel.description}
              </p>
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${channel.email}`}
                  className="text-[13px] text-white/50 hover:text-white transition-colors duration-300 font-medium truncate"
                >
                  {channel.email}
                </a>
                <button
                  onClick={handleCopy}
                  className="relative w-7 h-7 rounded-lg flex items-center justify-center bg-white/[0.04] border border-white/[0.04] hover:bg-white/[0.08] hover:border-white/[0.1] transition-all duration-300 shrink-0 cursor-pointer"
                  aria-label={copied ? "Copied" : `Copy ${channel.email}`}
                >
                  <motion.div
                    initial={false}
                    animate={copied ? { scale: [1, 1.3, 1] } : { scale: 1 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {copied ? (
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                      </svg>
                    )}
                  </motion.div>
                </button>
              </div>
            </div>
          </div>
          {copied && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute top-3 right-3 px-2 py-0.5 text-[9px] font-medium text-[#00d4ff] bg-[#00d4ff]/10 border border-[#00d4ff]/20 rounded-full"
            >
              Copied
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ContactPageClient() {
  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-24">
        <AuroraBackground colors={["rgba(168,85,247,0.3)", "rgba(123,97,255,0.3)", "rgba(0,212,255,0.2)"]} density="high" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-block text-[10px] font-semibold text-white/30 uppercase tracking-[0.25em] mb-6">
                Contact
              </span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95]">
                <span className="text-white">Tell us what</span>
                <br />
                <span className="text-gradient">you&apos;re building.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 text-base text-white/40 leading-relaxed font-light max-w-lg"
            >
              {contactInfo.ctaText}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <span className="text-[11px] text-white/35 font-light flex items-center gap-1.5">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                {contactInfo.responseTime}
              </span>
              <span className="text-white/[0.25]" aria-hidden="true">•</span>
              <span className="text-[11px] text-white/35 font-light">{site.fullName}</span>
              <span className="text-white/[0.25]" aria-hidden="true">•</span>
              <span className="text-[11px] text-white/35 font-light">{site.location}</span>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
            {contactChannels.map((channel, i) => (
              <ContactCard key={channel.email} channel={channel} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-28 max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-white/10" />
              <span className="text-[10px] font-semibold text-white/30 uppercase tracking-[0.25em]">
                Send a message
              </span>
            </div>
            <h2 className="text-[32px] md:text-[44px] font-bold tracking-[-0.03em] leading-[1.08] mb-3">
              <span className="text-white">Let&apos;s start</span>
              <br />
              <span className="text-gradient">a conversation.</span>
            </h2>
            <p className="text-[14px] text-white/40 font-light leading-relaxed mb-10 max-w-lg">
              Fill out the form below and we&apos;ll get back to you within 24 hours.
            </p>
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </>
  );
}

function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [serverError, setServerError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof typeof form, string>>>({});
  const [focused, setFocused] = useState<keyof typeof form | null>(null);
  const [shake, setShake] = useState<keyof typeof form | null>(null);

  const honeypotRef = useRef<HTMLInputElement>(null);
  const MESSAGE_MAX = 500;

  const validate = () => {
    const errs: typeof errors = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email address";
    if (!form.subject.trim()) errs.subject = "Subject is required";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const triggerShake = (key: keyof typeof form) => {
    setShake(key);
    setTimeout(() => setShake(null), 500);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setServerError("");

    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      (Object.keys(errs) as (keyof typeof form)[]).forEach(triggerShake);
      return;
    }

    setState("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          _hp: honeypotRef.current?.value ?? "",
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong");
      }

      setState("sent");
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong");
      setState("error");
    }
  };

  const clearError = (key: keyof typeof form) => {
    if (errors[key]) {
      const next = { ...errors };
      delete next[key];
      setErrors(next);
    }
  };

  if (state === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative rounded-2xl border border-white/[0.06] bg-white/[0.015] p-10 md:p-12 text-center overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: i % 2 === 0 ? "#00d4ff" : "#7b61ff",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0],
                y: [0, -30],
              }}
              transition={{
                duration: 1.5 + Math.random(),
                delay: Math.random() * 0.8,
                ease: "easeOut",
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
          className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#00d4ff]/20 to-[#7b61ff]/20 flex items-center justify-center mx-auto mb-5"
        >
          <motion.svg
            width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <polyline points="20 6 9 17 4 12" />
          </motion.svg>
        </motion.div>
        <p className="relative text-[16px] font-semibold text-white/80 mb-1">Message sent!</p>
        <p className="relative text-[13px] text-white/40 font-light">
          We typically respond within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FloatingField
          label="Your name"
          value={form.name}
          onChange={(v) => { setForm({ ...form, name: v }); clearError("name"); }}
          onFocus={() => setFocused("name")}
          onBlur={() => setFocused(null)}
          error={errors.name}
          shake={shake === "name"}
          isFocused={focused === "name"}
        />
        <FloatingField
          label="Your email"
          type="email"
          value={form.email}
          onChange={(v) => { setForm({ ...form, email: v }); clearError("email"); }}
          onFocus={() => setFocused("email")}
          onBlur={() => setFocused(null)}
          error={errors.email}
          shake={shake === "email"}
          isFocused={focused === "email"}
        />
      </div>
      <FloatingField
        label="Subject"
        value={form.subject}
        onChange={(v) => { setForm({ ...form, subject: v }); clearError("subject"); }}
        onFocus={() => setFocused("subject")}
        onBlur={() => setFocused(null)}
        error={errors.subject}
        shake={shake === "subject"}
        isFocused={focused === "subject"}
      />
      <FloatingField
        label="Your message"
        multiline
        maxLength={MESSAGE_MAX}
        value={form.message}
        onChange={(v) => { setForm({ ...form, message: v }); clearError("message"); }}
        onFocus={() => setFocused("message")}
        onBlur={() => setFocused(null)}
        error={errors.message}
        shake={shake === "message"}
        isFocused={focused === "message"}
        characterCount={form.message.length}
      />
      <input
        ref={honeypotRef}
        type="text"
        name="_hp"
        tabIndex={-1}
        autoComplete="off"
        style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, width: 0 }}
        aria-hidden="true"
      />

      {state === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red/10 border border-red/20"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <p className="text-[12px] text-red/70 font-light">{serverError}</p>
        </motion.div>
      )}

      <div className="flex items-center gap-3 pt-1">
        <motion.button
          type="submit"
          disabled={state === "sending"}
          whileHover={{ scale: state === "sending" ? 1 : 1.01 }}
          whileTap={{ scale: state === "sending" ? 1 : 0.99 }}
          className="flex-1 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#7b61ff] text-black text-[13px] font-semibold transition-opacity duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer relative overflow-hidden group"
        >
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-[#00d4ff]/0 via-white/15 to-[#7b61ff]/0"
            animate={state === "sending" ? {} : { x: ["-100%", "200%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          <span className="relative z-10">
            {state === "sending" ? (
              <span className="flex items-center justify-center gap-2">
                <motion.svg
                  className="shrink-0"
                  width="14" height="14" viewBox="0 0 24 24" fill="none"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="31.4 31.4" strokeLinecap="round" />
                </motion.svg>
                Sending...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                Send message
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </span>
            )}
          </span>
        </motion.button>
      </div>
      <div className="pt-4 border-t border-white/[0.04]">
        <p className="text-[11px] text-white/25 font-light mb-3">Or find us on</p>
        <div className="flex items-center gap-2">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.04] flex items-center justify-center text-white/30 hover:text-white/60 hover:bg-white/[0.06] hover:border-white/[0.08] transition-all duration-300"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </form>
  );
}

function FloatingField({
  label,
  type = "text",
  multiline,
  maxLength,
  value,
  onChange,
  onFocus,
  onBlur,
  error,
  shake: doShake,
  isFocused,
  characterCount,
}: {
  label: string;
  type?: "text" | "email" | "tel" | "url";
  multiline?: boolean;
  maxLength?: number;
  value: string;
  onChange: (val: string) => void;
  onFocus: () => void;
  onBlur: () => void;
  error?: string;
  shake?: boolean;
  isFocused: boolean;
  characterCount?: number;
}) {
  const floating = isFocused || value.length > 0;

  const sharedClasses =
    "block w-full bg-transparent border rounded-xl px-4 pt-5 pb-2.5 text-[13px] text-white/80 font-light transition-all duration-300 focus:outline-none";

  const borderColor = error
    ? "border-red/40"
    : isFocused
      ? "border-white/[0.15]"
      : "border-white/[0.06]";

  return (
    <div className="relative">
      <motion.div
        animate={doShake ? { x: [0, -5, 5, -5, 5, 0] } : { x: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {multiline ? (
          <textarea
            rows={4}
            maxLength={maxLength}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={onFocus}
            onBlur={onBlur}
            className={`${sharedClasses} ${borderColor} resize-none`}
            aria-label={label}
          />
        ) : (
          <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={onFocus}
            onBlur={onBlur}
            className={`${sharedClasses} ${borderColor} h-[52px]`}
            aria-label={label}
          />
        )}
        <label
          className={`absolute left-4 transition-all duration-300 pointer-events-none font-light ${
            floating
              ? "top-1.5 text-[9px] text-white/30"
              : "top-1/2 -translate-y-1/2 text-[13px] text-white/25"
          }`}
        >
          {label}
        </label>
      </motion.div>
      <div className="flex items-center justify-between mt-1.5 px-1">
        {error ? (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] text-red/60"
          >
            {error}
          </motion.p>
        ) : (
          <span />
        )}
        {characterCount !== undefined && maxLength && (
          <span className={`text-[10px] font-medium tabular-nums ${
            characterCount > maxLength * 0.9 ? "text-amber/60" : "text-white/20"
          }`}>
            {characterCount}/{maxLength}
          </span>
        )}
      </div>
    </div>
  );
}

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/sp-net",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://x.com/sp_net",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/sp-net",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];
