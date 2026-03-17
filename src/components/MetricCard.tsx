"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

interface MetricCardProps {
  value: string;
  label: string;
  suffix?: string;
  accentColor?: "blue" | "lime";
  delay?: number;
}

function AnimatedNumber({
  target,
  suffix = "",
  isPrefix = false,
}: {
  target: number;
  suffix?: string;
  isPrefix?: boolean;
}) {
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 20, mass: 1 });
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  useEffect(() => {
    if (inView) motionVal.set(target);
  }, [inView, motionVal, target]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => {
      setDisplay(
        target >= 100
          ? Math.round(v).toLocaleString()
          : v.toFixed(target % 1 !== 0 ? 1 : 0)
      );
    });
    return unsub;
  }, [spring, target]);

  return (
    <span ref={ref}>
      {isPrefix && suffix}
      {display}
      {!isPrefix && suffix}
    </span>
  );
}

export function MetricCard({
  value,
  label,
  accentColor = "blue",
  delay = 0,
}: MetricCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-5% 0px" });

  // Parse numeric values like "30+", "$4M", "100%", "Global Scale"
  const numericMatch = value.match(/^(\D*)(\d+(?:\.\d+)?)(\D*)$/);
  const isNumeric = !!numericMatch;
  const prefix = numericMatch?.[1] ?? "";
  const numericPart = numericMatch ? parseFloat(numericMatch[2]) : 0;
  const rawSuffix = numericMatch?.[3] ?? "";

  const accentClass =
    accentColor === "lime" ? "text-[#DFFF00]" : "text-[#007AFF]";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
      className="flex flex-col gap-3"
    >
      <div
        className={`font-mono text-4xl md:text-5xl font-semibold tracking-tight leading-none ${accentClass}`}
      >
        {isNumeric ? (
          <>
            {prefix && <span>{prefix}</span>}
            <AnimatedNumber target={numericPart} />
            {rawSuffix && <span>{rawSuffix}</span>}
          </>
        ) : (
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: delay + 0.2 }}
          >
            {value}
          </motion.span>
        )}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: delay + 0.3 }}
        className="text-sm text-[#888888] uppercase tracking-widest font-mono"
      >
        {label}
      </motion.p>
    </motion.div>
  );
}
