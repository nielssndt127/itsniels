"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, CheckCircle, AlertCircle } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-transparent border-b border-[#333333] py-4 text-white placeholder:text-[#666666] focus:outline-none focus:border-[#007AFF] transition-colors duration-200 text-sm font-sans";

  return (
    <section id="contact" className="px-6 md:px-12 py-32 max-w-screen-xl mx-auto">
      <div className="w-full h-px bg-[#2a2a2a]" />
      <div className="grid grid-cols-12 gap-4 pt-24">
        {/* Label */}
        <div className="col-span-12 md:col-span-3">
          <Reveal>
            <p className="font-mono text-xs text-[#888888] uppercase tracking-widest sticky top-32">
              Contact &#x2F;&#x2F; Hire Me
            </p>
          </Reveal>
        </div>

        {/* Form */}
        <div className="col-span-12 md:col-span-7 lg:col-span-6">
          <Reveal delay={0.1}>
            <p className="font-mono text-xs text-[#007AFF] uppercase tracking-widest mb-6">
              Let&apos;s Work Together
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight text-white mb-4">
              Tell me about
              <br />
              your growth challenge.
            </h2>
            <p className="text-[#999999] mb-4 leading-relaxed text-[15px]">
              I work with a small number of clients at a time — so I can give each one
              proper senior-level attention. If you&apos;re a tech company or scale-up
              looking to build or improve your paid acquisition, attribution, or growth
              infrastructure, get in touch.
            </p>
            <p className="text-[#888888] mb-16 text-sm">
              I&apos;ll respond within one business day.
            </p>
          </Reveal>

          {status === "success" ? (
            <Reveal>
              <div className="flex items-start gap-4 border-t border-[#1a1a1a] pt-8">
                <CheckCircle className="w-5 h-5 text-[#007AFF] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold mb-1">Message sent.</p>
                  <p className="text-[#888888] text-sm">I&apos;ll be in touch within 24 hours.</p>
                </div>
              </div>
            </Reveal>
          ) : (
            <Reveal delay={0.2}>
              <form onSubmit={handleSubmit} className="flex flex-col gap-0">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
                <textarea
                  name="message"
                  placeholder="Tell me about your growth challenge and where you are right now..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`${inputClass} resize-none`}
                />

                <div className="flex items-center justify-between pt-8">
                  {status === "error" && (
                    <span className="flex items-center gap-2 font-mono text-xs text-red-500">
                      <AlertCircle className="w-3 h-3" />
                      Something went wrong. Try again.
                    </span>
                  )}
                  <div className={status === "error" ? "" : "ml-auto"}>
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="group inline-flex items-center gap-2 bg-white text-black text-sm font-semibold px-6 py-3 hover:bg-[#007AFF] hover:text-white transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      {status === "loading" ? (
                        "Sending..."
                      ) : (
                        <>
                          Send message
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
