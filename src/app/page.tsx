"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";
import { ContactForm } from "@/components/ContactForm";

/* ─────────────────────────────────────────────
   Shared animation helpers
───────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay },
});

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
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

/* ─────────────────────────────────────────────
   Divider
───────────────────────────────────────────── */
function Divider() {
  return <div className="w-full h-px bg-[#1a1a1a]" />;
}

/* ─────────────────────────────────────────────
   Nav
───────────────────────────────────────────── */
function Nav() {
  return (
    <motion.nav
      {...fadeUp(0)}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6"
      style={{ background: "linear-gradient(to bottom, #000 60%, transparent)" }}
    >
      <span className="font-mono text-xs text-[#888888] tracking-widest uppercase">
        itsniels.com
      </span>
      <a
        href="#contact"
        className="font-mono text-xs text-[#888888] hover:text-white transition-colors duration-200 tracking-widest uppercase"
      >
        Get in touch ↗
      </a>
    </motion.nav>
  );
}

/* ─────────────────────────────────────────────
   1. Hero
───────────────────────────────────────────── */
function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-end px-6 md:px-12 pb-24 pt-32 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-9 lg:col-span-7">
          <motion.p
            {...fadeUp(0.1)}
            className="font-mono text-xs text-[#888888] uppercase tracking-widest mb-8"
          >
            Performance Engineering &#x2F;&#x2F; Growth Infrastructure
          </motion.p>
          <motion.h1
            {...fadeUp(0.2)}
            className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.92] text-white mb-10"
          >
            Performance
            <br />
            Engineering
            <br />
            <span className="text-[#007AFF]">for Hypergrowth.</span>
          </motion.h1>
          <motion.p
            {...fadeUp(0.35)}
            className="text-lg md:text-xl text-[#888888] leading-relaxed max-w-2xl mb-16"
          >
            Ex-DeepL Performance Lead. I help ambitious companies build the growth
            infrastructure that turns traction into category dominance.
          </motion.p>
          <motion.div {...fadeUp(0.5)} className="flex items-center gap-8">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-white text-black text-sm font-semibold px-6 py-3 hover:bg-[#007AFF] hover:text-white transition-all duration-200"
            >
              Work with us
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#deepl"
              className="font-mono text-xs text-[#888888] hover:text-white transition-colors tracking-widest uppercase"
            >
              See the work ↓
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   2. Founder
───────────────────────────────────────────── */
function Founder() {
  return (
    <section className="px-6 md:px-12 py-32 max-w-screen-xl mx-auto">
      <Divider />
      <div className="grid grid-cols-12 gap-4 pt-24 items-start">
        {/* Photo */}
        <div className="col-span-12 md:col-span-5 lg:col-span-4">
          <Reveal>
            <div className="relative overflow-hidden aspect-[4/5] w-full max-w-sm">
              <Image
                src="/niels.png"
                alt="Niels Schnadt"
                fill
                className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
          </Reveal>
        </div>

        {/* Bio */}
        <div className="col-span-12 md:col-span-7 lg:col-span-6 lg:col-start-6 flex flex-col justify-center">
          <Reveal delay={0.1}>
            <p className="font-mono text-xs text-[#888888] uppercase tracking-widest mb-8">
              About &#x2F;&#x2F; Niels Schnadt
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-tight text-white mb-8">
              Performance Marketing
              <br />
              <span className="text-[#007AFF]">&amp; Growth Expert.</span>
            </h2>
            <p className="text-[#888888] leading-relaxed mb-6 max-w-lg">
              I&apos;ve spent my career at the intersection of data, technology,
              and growth — turning paid acquisition into compounding
              infrastructure rather than just ad spend.
            </p>
            <p className="text-[#888888] leading-relaxed max-w-lg">
              At DeepL, I was one of the first marketing hires and built the
              performance function from the ground up. Today I work with
              ambitious companies who want that same level of precision applied
              to their growth engine.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   3. DeepL Unicorn Proof
───────────────────────────────────────────── */
function DeepLSection() {
  return (
    <section id="deepl" className="px-6 md:px-12 py-32 max-w-screen-xl mx-auto">
      <Divider />
      <div className="grid grid-cols-12 gap-4 pt-24">
        {/* Label */}
        <div className="col-span-12 md:col-span-3">
          <Reveal>
            <p className="font-mono text-xs text-[#888888] uppercase tracking-widest sticky top-32">
              Case Study &#x2F;&#x2F; DeepL
            </p>
          </Reveal>
        </div>

        {/* Content */}
        <div className="col-span-12 md:col-span-9">
          <Reveal delay={0.1}>
            <p className="font-mono text-xs text-[#007AFF] uppercase tracking-widest mb-6">
              Unicorn Proof
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight text-white mb-8">
              Scalability at
              <br />
              Unicorn Speed.
            </h2>
            <p className="text-lg text-[#888888] leading-relaxed max-w-xl mb-20">
              One of DeepL&apos;s first marketing hires — brought in specifically to
              build the performance marketing function from zero. Designed the
              entire acquisition infrastructure that scaled across 30+ markets
              as the company grew into a global Unicorn.
            </p>
          </Reveal>

          {/* Metric Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8">
            <MetricCard
              value="Global Scale"
              label="Market Reach"
              accentColor="blue"
              delay={0.1}
            />
            <MetricCard
              value="30+"
              label="Markets Launched"
              accentColor="lime"
              delay={0.2}
            />
            <MetricCard
              value="Unicorn"
              label="Growth Stage"
              accentColor="blue"
              delay={0.3}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   3. Product Lab
───────────────────────────────────────────── */
interface ProductCardProps {
  name: string;
  url: string;
  category: string;
  description: string;
  detail: string;
  delay?: number;
}

function ProductCard({ name, url, category, description, detail, delay = 0 }: ProductCardProps) {
  return (
    <Reveal delay={delay} className="group">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block border-t border-[#1a1a1a] pt-8 pb-10 hover:border-[#007AFF] transition-colors duration-300"
      >
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="font-mono text-xs text-[#888888] uppercase tracking-widest mb-2">
              {category}
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white group-hover:text-[#007AFF] transition-colors duration-200">
              {name}
            </h3>
          </div>
          <ExternalLink className="w-4 h-4 text-[#333] group-hover:text-[#007AFF] transition-colors duration-200 mt-2 flex-shrink-0" />
        </div>
        <p className="text-[#888888] leading-relaxed mb-4 max-w-lg">{description}</p>
        <p className="font-mono text-xs text-[#555] uppercase tracking-widest">{detail}</p>
      </a>
    </Reveal>
  );
}

function ProductLab() {
  return (
    <section className="px-6 md:px-12 py-32 max-w-screen-xl mx-auto">
      <Divider />
      <div className="grid grid-cols-12 gap-4 pt-24">
        <div className="col-span-12 md:col-span-3">
          <Reveal>
            <p className="font-mono text-xs text-[#888888] uppercase tracking-widest sticky top-32">
              Product Lab &#x2F;&#x2F; Built by Us
            </p>
          </Reveal>
        </div>

        <div className="col-span-12 md:col-span-9">
          <Reveal delay={0.1}>
            <p className="font-mono text-xs text-[#DFFF00] uppercase tracking-widest mb-6">
              Practitioners
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight text-white mb-8">
              Built by
              <br />
              Practitioners.
            </h2>
            <p className="text-lg text-[#888888] leading-relaxed max-w-xl mb-20">
              We don&apos;t just use tools — we build them. Our marketing strategies
              are informed by the same technical rigor used to create Castlytics
              and Tymedrop.
            </p>
          </Reveal>

          <div className="flex flex-col gap-0">
            <ProductCard
              name="Castlytics"
              url="https://castlytics.app"
              category="SaaS &#x2F;&#x2F; Marketing Analytics"
              description="Marketing analytics built for performance teams. Real attribution, real data, built by someone who needed it in the field."
              detail="Castlytics.app — Marketing Infrastructure"
              delay={0.1}
            />
            <ProductCard
              name="Tymedrop"
              url="https://apps.apple.com"
              category="iOS &#x2F;&#x2F; Productivity"
              description="iOS productivity app engineered for high-output operators. Time management built with the same precision as performance campaigns."
              detail="Available on the App Store — iOS"
              delay={0.2}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   4. Services
───────────────────────────────────────────── */
const services = [
  {
    id: "01",
    title: "Paid Acquisition",
    description:
      "High-scale paid media across Search, Social, and Programmatic. Architecture built for efficiency at volume.",
  },
  {
    id: "02",
    title: "Attribution Systems",
    description:
      "MTA, MMM, and incrementality testing. Know exactly what is working and where every dollar compounds.",
  },
  {
    id: "03",
    title: "Growth Infrastructure",
    description:
      "End-to-end growth systems: tracking stacks, data pipelines, dashboards, and automation layers.",
  },
];

function ServiceRow({
  id,
  title,
  description,
  delay,
}: {
  id: string;
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="group grid grid-cols-12 gap-4 border-t border-[#1a1a1a] py-10 hover:border-white/10 transition-colors duration-300 cursor-default">
        <div className="col-span-1">
          <span className="font-mono text-xs text-[#333] group-hover:text-[#555] transition-colors">
            {id}
          </span>
        </div>
        <div className="col-span-11 md:col-span-5">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white group-hover:text-[#007AFF] transition-colors duration-200">
            {title}
          </h3>
        </div>
        <div className="col-span-11 col-start-2 md:col-span-5 md:col-start-auto">
          <p className="text-[#888888] leading-relaxed text-sm">{description}</p>
        </div>
        <div className="hidden md:flex col-span-1 items-center justify-end">
          <ArrowUpRight className="w-4 h-4 text-[#1a1a1a] group-hover:text-[#007AFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
        </div>
      </div>
    </Reveal>
  );
}

function Services() {
  return (
    <section className="px-6 md:px-12 py-32 max-w-screen-xl mx-auto">
      <Divider />
      <div className="pt-24">
        <Reveal>
          <p className="font-mono text-xs text-[#888888] uppercase tracking-widest mb-6">
            Services &#x2F;&#x2F; What We Do
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-white mb-20">
            The Stack.
          </h2>
        </Reveal>

        <div>
          {services.map((s, i) => (
            <ServiceRow key={s.id} {...s} delay={i * 0.1} />
          ))}
          <div className="border-t border-[#1a1a1a]" />
        </div>

        <Reveal delay={0.2} className="mt-16">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 font-mono text-sm text-[#888888] hover:text-white transition-colors duration-200"
          >
            <span>Ready to build your growth infrastructure?</span>
            <span className="text-[#007AFF] group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   5. Footer
───────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="px-6 md:px-12 py-16 max-w-screen-xl mx-auto">
      <Divider />
      <div className="grid grid-cols-12 gap-4 pt-12 items-end">
        <div className="col-span-12 md:col-span-6">
          <p className="font-mono text-xs text-[#555] leading-loose">
            itsniels.com
            <br />
            Based in Wendover, UK.
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 flex items-center gap-6 md:justify-end">
          <a
            href="https://linkedin.com/in/nielsschnadt"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-[#555] hover:text-white uppercase tracking-widest transition-colors duration-200"
          >
            LinkedIn ↗
          </a>
          <a
            href="#contact"
            className="font-mono text-xs text-[#555] hover:text-white uppercase tracking-widest transition-colors duration-200"
          >
            Contact ↗
          </a>
        </div>
        <div className="col-span-12 mt-8">
          <p className="font-mono text-[10px] text-[#333] uppercase tracking-widest">
            © {new Date().getFullYear()} Niels Schnadt &#x2F;&#x2F; All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */
export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Nav />
      <Hero />
      <Founder />
      <DeepLSection />
      <ProductLab />
      <Services />
      <ContactForm />
      <Footer />
    </main>
  );
}
