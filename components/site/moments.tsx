"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section";
import { categoryIcon } from "@/components/nanobet/icons";
import { MARKETS } from "@/lib/data";
import { formatOdds } from "@/lib/utils";

const ROWS = [
  "m-next-possession",
  "m-next-90",
  "m-next-basket",
  "m-curry-three",
  "m-assist",
  "m-turnover",
]
  .map((id) => MARKETS.find((m) => m.id === id)!)
  .filter(Boolean);

export function Moments() {
  return (
    <section id="nanobetting" className="border-t border-line-soft py-20 lg:py-28">
      <div className="rail">
        <SectionHeading
          eyebrow="Nanobetting"
          title={
            <>
              One game.
              <br />
              Hundreds of moments.
            </>
          }
          copy="A full-game market gives a bettor one decision. Predicta turns the same broadcast into a stream of short, self-contained moments that open and settle while the game is still moving."
        />

        <div className="mt-12 overflow-hidden rounded-2xl border border-line">
          {ROWS.map((market, i) => {
            const Icon = categoryIcon[market.category];
            return (
              <motion.div
                key={market.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex flex-col gap-3 border-b border-line-soft bg-ink-900 px-5 py-4 last:border-b-0 sm:flex-row sm:items-center sm:gap-6 sm:px-7 sm:py-5"
              >
                <span className="flex w-[150px] shrink-0 items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-flare">
                  <Icon className="h-3.5 w-3.5" strokeWidth={2} />
                  {market.kicker}
                </span>
                <span className="flex-1 text-[14px] font-medium leading-snug text-chalk sm:text-[15px]">
                  {market.question}
                </span>
                <span className="flex shrink-0 items-center gap-2">
                  {market.outcomes.slice(0, 2).map((o) => (
                    <span
                      key={o.id}
                      className="num rounded-lg border border-line bg-ink-850 px-2.5 py-1.5 text-[12px] font-semibold text-chalk-muted"
                    >
                      {o.label} {formatOdds(o.odds)}
                    </span>
                  ))}
                </span>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-6 text-[13px] text-chalk-faint">
          A sample. Dozens more open across possessions, players, scoring sequences and timed
          windows over the course of a single game.
        </p>
      </div>
    </section>
  );
}
