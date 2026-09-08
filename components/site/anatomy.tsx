"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Coins, Layers, Timer, Zap } from "lucide-react";
import { SectionHeading } from "@/components/ui/section";
import { RENDERS } from "@/lib/screens";

const PARTS = [
  {
    icon: Zap,
    label: "The moment",
    copy: "One clear question tied to what is about to happen on the floor, in plain language.",
  },
  {
    icon: Timer,
    label: "The window",
    copy: "A visible countdown. The bettor can see exactly how long the market stays open.",
  },
  {
    icon: Layers,
    label: "The outcomes",
    copy: "A short set of choices with live prices and the exact return on each, before tapping.",
  },
  {
    icon: Coins,
    label: "The stake",
    copy: "Preset amounts sized for fast, repeat play, and the payout updates as they change.",
  },
];

export function Anatomy() {
  return (
    <section className="border-t border-line-soft py-20 lg:py-28">
      <div className="rail grid gap-16 lg:grid-cols-[420px_1fr] lg:items-center lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[400px]"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-10 -z-10 rounded-[60px] blur-3xl"
            style={{
              background:
                "radial-gradient(55% 50% at 50% 45%, rgba(255,90,31,0.18) 0%, transparent 70%)",
            }}
          />
          <Image
            src={RENDERS.slipAngle.src}
            alt="A Predicta nanobet: the question, countdown, outcomes and stake"
            width={RENDERS.slipAngle.width}
            height={RENDERS.slipAngle.height}
            className="h-auto w-full drop-shadow-[0_40px_70px_rgba(0,0,0,0.7)]"
            sizes="(max-width: 1024px) 85vw, 400px"
          />
        </motion.div>

        <div>
          <SectionHeading
            eyebrow="Anatomy of a nanobet"
            title={
              <>
                Everything a bettor
                <br />
                needs, in one card.
              </>
            }
            copy="No sub-menus, no bet builder, no waiting for the whistle. The question, the clock, the price and the payout sit on a single screen — and the whole decision takes a couple of seconds."
          />

          <ol className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {PARTS.map((part, i) => {
              const Icon = part.icon;
              return (
                <motion.li
                  key={part.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="bg-ink-900 p-6"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-ink-850">
                      <Icon className="h-4 w-4 text-flare" strokeWidth={1.9} />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-chalk">
                      {part.label}
                    </span>
                  </div>
                  <p className="mt-3 text-[13px] leading-relaxed text-chalk-muted">{part.copy}</p>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
