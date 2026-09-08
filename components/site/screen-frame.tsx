"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ScreenSpec {
  src: string;
  width: number;
  height: number;
  label: string;
  caption: string;
}

/**
 * Device frame around an official Predicta product screen. The screens are
 * captured at full length, so the frame crops from the top and fades out.
 */
export function ScreenFrame({
  screen,
  width = 300,
  viewport = 600,
  className,
  glow = true,
  delay = 0,
}: {
  screen: ScreenSpec;
  width?: number;
  viewport?: number;
  className?: string;
  glow?: boolean;
  delay?: number;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className={cn("relative mx-auto w-full", className)}
      style={{ maxWidth: width }}
    >
      {glow ? (
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-8 -z-10 rounded-[60px] opacity-70 blur-3xl"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 30%, rgba(255,90,31,0.15) 0%, transparent 70%)",
          }}
        />
      ) : null}

      <div className="rounded-[38px] border border-line-strong bg-ink-900 p-2 shadow-[0_50px_120px_-45px_rgba(0,0,0,0.95)]">
        <div
          className="relative overflow-hidden rounded-[30px] border border-line bg-ink-950"
          style={{ height: viewport }}
        >
          <Image
            src={screen.src}
            alt={screen.caption}
            width={screen.width}
            height={screen.height}
            className="w-full"
            sizes="(max-width: 768px) 90vw, 340px"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink-950 via-ink-950/70 to-transparent" />
        </div>
      </div>

      <figcaption className="mt-5 text-center">
        <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-flare">
          {screen.label}
        </div>
        <p className="mx-auto mt-1.5 max-w-[260px] text-[12px] leading-relaxed text-chalk-muted">
          {screen.caption}
        </p>
      </figcaption>
    </motion.figure>
  );
}
