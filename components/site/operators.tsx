"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Activity, Blocks, Puzzle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section";

const BENEFITS = [
  {
    icon: Activity,
    title: "More live engagement",
    copy: "Keep users interacting throughout the game, not only at tip-off and the final whistle.",
  },
  {
    icon: Blocks,
    title: "Depth without a desk",
    copy: "Moment-level markets that scale with the schedule instead of with the number of people employed to run them.",
  },
  {
    icon: Zap,
    title: "Faster interaction",
    copy: "Short-duration prediction opportunities designed around live moments.",
  },
  {
    icon: Puzzle,
    title: "Flexible experience",
    copy: "Designed to complement existing sportsbook and prediction experiences.",
  },
];

export function Operators() {
  return (
    <section id="operators" className="border-t border-line-soft py-20 lg:py-28">
      <div className="rail">
        <SectionHeading
          eyebrow="For operators"
          title={
            <>
              A new live engagement
              <br />
              layer for sportsbooks.
            </>
          }
          copy="Predicta is designed to help sports platforms create richer, faster, and more interactive live sports experiences."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {BENEFITS.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="card flex gap-5 p-6"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-ink-800">
                  <Icon className="h-4 w-4 text-flare" strokeWidth={1.9} />
                </span>
                <div>
                  <h3 className="text-[13px] font-bold uppercase tracking-[0.14em] text-chalk">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-chalk-muted">{b.copy}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="#contact">
            <Button size="lg">
              Partner with Predicta
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
