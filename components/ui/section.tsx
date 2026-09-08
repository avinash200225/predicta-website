"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  copy?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <div className="mb-4 flex items-center gap-2.5" style={align === "center" ? { justifyContent: "center" } : undefined}>
          <span className="h-px w-6 bg-flare" />
          <span className="eyebrow text-flare">{eyebrow}</span>
        </div>
      ) : null}
      <h2 className="display text-[30px] sm:text-[38px] lg:text-[46px]">{title}</h2>
      {copy ? (
        <p className="mt-4 text-[15px] leading-relaxed text-chalk-muted sm:text-base">{copy}</p>
      ) : null}
    </motion.div>
  );
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
