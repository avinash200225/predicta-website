"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LiveBadge } from "@/components/ui/live-dot";
import { RENDERS } from "@/lib/screens";

const STATS = [
  { value: "< 90s", label: "Typical prediction window" },
  { value: "40+", label: "Live moments per game" },
  { value: "Every play", label: "A new reason to watch" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 lg:pt-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines opacity-70" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full opacity-60 blur-[120px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(255,90,31,0.16) 0%, transparent 70%)",
        }}
      />

      <div className="rail relative grid gap-14 pb-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-10 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-line bg-ink-850 px-3 py-1.5">
            <LiveBadge label="Live now" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-chalk-muted">
              Nanobetting by Predicta
            </span>
          </div>

          <h1 className="display mt-6 text-[40px] sm:text-[58px] lg:text-[66px]">
            Sports move fast.
            <br />
            <span className="text-flare">Your picks should too.</span>
          </h1>

          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-chalk sm:text-[19px]">
            Predict live moments as they happen with Predicta Nanobetting.
          </p>
          <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-chalk-muted sm:text-[15px]">
            From the next possession to the next scorer, Predicta transforms live games into a
            continuous stream of short-duration prediction opportunities.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="#nanobetting">
              <Button size="lg" className="w-full sm:w-auto">
                Explore Nanobetting
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="#product">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                See the product
              </Button>
            </Link>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-line-soft pt-6">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="num text-[20px] font-semibold text-chalk sm:text-[24px]">
                  {s.value}
                </dt>
                <dd className="mt-1 text-[10px] uppercase leading-relaxed tracking-[0.12em] text-chalk-faint">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
          className="relative mx-auto w-full max-w-[420px]"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-10 -z-10 rounded-[60px] opacity-90 blur-3xl"
            style={{
              background:
                "radial-gradient(55% 55% at 55% 40%, rgba(255,90,31,0.22) 0%, transparent 70%)",
            }}
          />
          <Image
            src={RENDERS.slipFront.src}
            alt="The Predicta app showing a live nanobet on the next possession"
            width={RENDERS.slipFront.width}
            height={RENDERS.slipFront.height}
            priority
            className="h-auto w-full drop-shadow-[0_45px_80px_rgba(0,0,0,0.75)]"
            sizes="(max-width: 1024px) 75vw, 420px"
          />

        </motion.div>
      </div>
    </section>
  );
}
