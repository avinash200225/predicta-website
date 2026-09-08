"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Minus } from "lucide-react";
import { SectionHeading } from "@/components/ui/section";

const TRADITIONAL = ["Player points", "Player assists", "Game spread", "Game total"];

const NANOBETS = [
  "Next scorer",
  "Next possession",
  "Next three-pointer",
  "Next assist",
  "Next turnover",
  "Next 90 seconds",
  "Next scoring sequence",
  "Timed player actions",
];

export function Comparison() {
  return (
    <section className="border-t border-line-soft py-20 lg:py-28">
      <div className="rail">
        <SectionHeading
          eyebrow="Beyond traditional props"
          title={
            <>
              From betting on the game
              <br />
              <span className="text-flare">to predicting the moment.</span>
            </>
          }
        />

        <div className="mt-12 grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1.35fr]">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45 }}
            className="card p-6"
          >
            <div className="eyebrow">Traditional</div>
            <p className="mt-2 text-[12px] text-chalk-faint">Settles at the final buzzer.</p>
            <ul className="mt-6 space-y-3">
              {TRADITIONAL.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-line bg-ink-800">
                    <Minus className="h-3 w-3 text-chalk-faint" />
                  </span>
                  <span className="text-[14px] text-chalk-muted">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="flex items-center justify-center">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-flare/40 bg-flare-wash">
              <ArrowRight className="h-4 w-4 text-flare" />
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="card relative overflow-hidden border-flare/30 p-6"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-60 blur-3xl"
              style={{
                background:
                  "radial-gradient(50% 50% at 50% 50%, rgba(255,90,31,0.18) 0%, transparent 70%)",
              }}
            />
            <div className="eyebrow text-flare">Predicta Nanobetting</div>
            <p className="mt-2 text-[12px] text-chalk-faint">
              Opens and settles inside the live broadcast.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {NANOBETS.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.05 * i }}
                  className="flex items-center gap-3"
                >
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-flare/40 bg-flare-wash">
                    <Check className="h-3 w-3 text-flare" strokeWidth={3} />
                  </span>
                  <span className="text-[14px] font-medium text-chalk">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
