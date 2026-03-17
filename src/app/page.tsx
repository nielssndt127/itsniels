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
        Hire me ↗
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
        <div className="col-span-12 md:col-span-10 lg:col-span-8">
          <motion.p
            {...fadeUp(0.1)}
            className="font-mono text-xs text-[#888888] uppercase tracking-widest mb-8"
          >
            Freelance Performance Marketing &#x2F;&#x2F; Paid Acquisition &amp; Growth
          </motion.p>
          <motion.h1
            {...fadeUp(0.2)}
            className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.92] text-white mb-10"
          >
            Paid acquisition.
            <br />
            <span className="text-[#007AFF]">Built to scale.</span>
          </motion.h1>
          <motion.p
            {...fadeUp(0.35)}
            className="text-base md:text-lg text-[#999999] leading-relaxed max-w-2xl mb-16"
          >
            First marketing hire at DeepL. Ex-Performance Lead. I help tech companies and
            scale-ups build the paid acquisition, tracking, and growth infrastructure
            needed to scale profitably — with full visibility into what&apos;s working.
          </motion.p>
          <motion.div {...fadeUp(0.5)} className="flex items-center gap-8">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-white text-black text-sm font-semibold px-6 py-3 hover:bg-[#007AFF] hover:text-white transition-all duration-200"
            >
              Work with me
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
   2. Credibility Strip
───────────────────────────────────────────── */
const pastCompanies = ["DeepL", "Tripadvisor", "Viator", "Criteo", "Marin Software"];

function CredibilityStrip() {
  return (
    <section className="px-6 md:px-12 py-16 max-w-screen-xl mx-auto">
      <Divider />
      <div className="pt-12 pb-4">
        <Reveal>
          <p className="font-mono text-xs text-[#555555] uppercase tracking-widest mb-8">
            Previously built and scaled growth at
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            {pastCompanies.map((company, i) => (
              <span
                key={company}
                className="text-[#444444] text-sm font-semibold tracking-tight"
              >
                {company}
                {i < pastCompanies.length - 1 && (
                  <span className="ml-8 text-[#2a2a2a]">·</span>
                )}
              </span>
            ))}
          </div>
          <p className="font-mono text-xs text-[#333333] uppercase tracking-widest mt-6">
            Experience across global platforms, ad tech, and high-growth scale-ups
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   3. Founder / About
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
              <span className="text-[#007AFF]">&amp; Growth Operator.</span>
            </h2>
            <p className="text-[#999999] leading-relaxed mb-6 max-w-lg text-[15px]">
              I&apos;m a freelance performance marketing and growth operator specialising in
              paid acquisition, measurement, attribution, and growth infrastructure for
              tech companies and scale-ups.
            </p>
            <p className="text-[#999999] leading-relaxed mb-6 max-w-lg text-[15px]">
              I joined DeepL as their first marketing hire and built the performance
              marketing function from scratch — developing the acquisition systems,
              tracking foundations, and paid growth engine that scaled across 30+ markets
              during their hypergrowth period. Today I bring that same level of rigour
              and execution to high-growth SaaS and tech businesses.
            </p>
            <p className="text-[#999999] leading-relaxed mb-10 max-w-lg text-[15px]">
              I also build my own products — including Castlytics, an attribution platform
              for performance marketers, and Tymedrop, an iOS productivity app. Both are
              a direct reflection of how I think: analytically, technically, and with a
              bias toward execution.
            </p>

            {/* Personal trust element */}
            <div className="border-t border-[#1a1a1a] pt-8 max-w-lg">
              <p className="font-mono text-xs text-[#555555] uppercase tracking-widest mb-3">
                Off the clock
              </p>
              <p className="text-[#666666] leading-relaxed text-sm">
                Father of two, dog owner, and a former high-performance canoe athlete —
                I competed at World and European Championships. The discipline, structure,
                and relentless iteration that competitive sport demands is something I
                carry directly into how I work.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   4. DeepL Case Study
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
              Paid Growth &#x2F;&#x2F; 0 to Global Scale
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight text-white mb-8">
              From Zero to
              <br />
              Global Scale.
            </h2>
            <p className="text-base md:text-lg text-[#999999] leading-relaxed max-w-2xl mb-6">
              Joined DeepL as the first marketing hire, brought in specifically to build
              the performance marketing function from the ground up. Scaled paid
              acquisition across 30+ markets — building the acquisition systems,
              attribution foundations, tracking infrastructure, and measurement stack
              that powered DeepL&apos;s paid growth engine during their hypergrowth to
              unicorn status.
            </p>
            <p className="text-sm text-[#666666] leading-relaxed max-w-xl mb-20">
              Scope included: multi-channel paid acquisition strategy, cross-market
              campaign architecture, attribution and tracking setup, performance
              reporting infrastructure, and team and function build-out from zero.
            </p>
          </Reveal>

          {/* Metric Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8">
            <MetricCard
              value="30+"
              label="Markets Launched"
              accentColor="blue"
              delay={0.1}
            />
            <MetricCard
              value="0→1"
              label="Function Built from Scratch"
              accentColor="lime"
              delay={0.2}
            />
            <MetricCard
              value="Unicorn"
              label="Growth Stage Reached"
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
   5. Product Lab
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
        <p className="text-[#999999] leading-relaxed mb-4 max-w-lg text-[15px]">{description}</p>
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
              My Products &#x2F;&#x2F; Built from Scratch
            </p>
          </Reveal>
        </div>

        <div className="col-span-12 md:col-span-9">
          <Reveal delay={0.1}>
            <p className="font-mono text-xs text-[#DFFF00] uppercase tracking-widest mb-6">
              Founder
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight text-white mb-8">
              I don&apos;t just run
              <br />
              growth. I build.
            </h2>
            <p className="text-base md:text-lg text-[#999999] leading-relaxed max-w-xl mb-20">
              Alongside client work, I build my own products. These aren&apos;t side
              projects — they reflect how I actually think about acquisition, attribution,
              and product growth. Both are live and built entirely by me.
            </p>
          </Reveal>

          <div className="flex flex-col gap-0">
            <ProductCard
              name="Castlytics"
              url="https://castlytics.app"
              category="Attribution &#x2F;&#x2F; SaaS Platform"
              description="An attribution and analytics platform I built for creator-led performance marketing. Castlytics connects ad spend to real outcomes — filling a gap I experienced first-hand working in performance marketing. It's practitioner-built attribution for people who care about what actually drives results."
              detail="castlytics.app — Attribution &amp; Performance Analytics"
              delay={0.1}
            />
            <ProductCard
              name="Tymedrop"
              url="https://apps.apple.com"
              category="iOS &#x2F;&#x2F; Productivity App"
              description="A time management app for parents, built and launched entirely by me. Tymedrop demonstrates that I can take a product from zero to real adoption — I'm actively growing it toward becoming one of the top time management apps for parents on the App Store."
              detail="Available on the App Store — Growing from 0 to adoption"
              delay={0.2}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   6. Services
───────────────────────────────────────────── */
const services = [
  {
    id: "01",
    title: "Paid Acquisition",
    description:
      "I run and scale paid media across Google, Meta, and programmatic channels. From campaign architecture and bidding strategy to creative testing and spend efficiency — built to perform at volume and remain profitable as you scale.",
  },
  {
    id: "02",
    title: "Attribution & Measurement",
    description:
      "I build the measurement layer that shows what's actually driving growth. Multi-touch attribution, media mix modelling, incrementality testing, and tracking infrastructure that makes your reporting trustworthy and your decisions defensible.",
  },
  {
    id: "03",
    title: "Growth Infrastructure",
    description:
      "I set up the technical foundations that make scaling predictable. Tracking stacks, data pipelines, analytics dashboards, and automation that give you reliable signals — so you can grow without flying blind.",
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
        <div className="col-span-11 md:col-span-4">
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white group-hover:text-[#007AFF] transition-colors duration-200">
            {title}
          </h3>
        </div>
        <div className="col-span-11 col-start-2 md:col-span-6 md:col-start-auto">
          <p className="text-[#999999] leading-relaxed text-sm">{description}</p>
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
            Services &#x2F;&#x2F; What I Do
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-white mb-4">
            The Work.
          </h2>
          <p className="text-[#999999] text-sm leading-relaxed max-w-lg mb-20">
            Senior-level execution, not strategy decks. I work directly with founders,
            CMOs, and growth leads at tech companies and SaaS scale-ups.
          </p>
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
            <span>Ready to scale predictably? Let&apos;s talk.</span>
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
   7. Footer
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
            Hire me ↗
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
      <CredibilityStrip />
      <Founder />
      <DeepLSection />
      <ProductLab />
      <Services />
      <ContactForm />
      <Footer />
    </main>
  );
}
