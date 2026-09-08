"use client";

import { motion } from "framer-motion";
import { Copy, Layers, Minus, Repeat, Shapes, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/section";

const PROBLEMS = [
  {
    icon: Minus,
    title: "Not enough picks",
    copy: "A live game can run three hours and still offer only a handful of in-play markets.",
  },
  {
    icon: Copy,
    title: "Not enough variety",
    copy: "The same few markets appear game after game, whoever is playing and whatever is happening.",
  },
  {
    icon: Repeat,
    title: "Not enough types",
    copy: "Most live options are the pre-game bet re-priced, not a genuinely different question.",
  },
];

const OUTCOMES = [
  { icon: Layers, label: "More picks per game" },
  { icon: Shapes, label: "More kinds of moments" },
  { icon: Sparkles, label: "A board that keeps changing" },
];

export function Autonomy() {
  return (
    <section id="autonomy" className="border-t border-line-soft py-20 lg:py-28">
      <div className="rail">
        <SectionHeading
          eyebrow="Why live boards stay thin"
          title={
            <>
              Live boards are small
              <br />
              because people build them.
            </>
          }
          copy="On a traditional book, every in-play market is written, priced and watched by someone. Headcount caps the board — so bettors get a short list that looks the same every night."
        />

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-3">
          {PROBLEMS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.42, delay: i * 0.07 }}
                className="bg-ink-900 p-7"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-ink-850">
                  <Icon className="h-4 w-4 text-chalk-faint" strokeWidth={2} />
                </span>
                <h3 className="mt-4 text-[15px] font-semibold text-chalk">{p.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-chalk-muted">{p.copy}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="relative mt-8 overflow-hidden rounded-2xl border border-flare/35 bg-ink-900 p-8 lg:p-10"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-70 blur-3xl"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(255,90,31,0.22) 0%, transparent 70%)",
            }}
          />
          <div className="relative grid gap-10 lg:grid-cols-[260px_1fr] lg:items-center lg:gap-14">
            <div>
              <div className="eyebrow text-flare">Our answer</div>
              <div className="mt-4 flex items-baseline gap-3">
                <span className="num text-[64px] font-semibold leading-none text-chalk">0</span>
                <span className="text-[12px] font-semibold uppercase leading-tight tracking-[0.14em] text-chalk-muted">
                  people
                  <br />
                  running the board
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-[20px] font-semibold leading-snug text-chalk sm:text-[24px]">
                A board nobody has to run.
              </h3>
              <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-chalk-muted sm:text-[15px]">
                Predicta is built so the live board runs itself: moments open, price and settle
                without a desk behind them. We are building toward zero people managing the board,
                which means the number of picks is set by what is happening in the game rather than
                by how many people we can hire.
              </p>

              <ul className="mt-6 flex flex-wrap gap-2.5">
                {OUTCOMES.map((o) => {
                  const Icon = o.icon;
                  return (
                    <li
                      key={o.label}
                      className="inline-flex items-center gap-2 rounded-full border border-line bg-ink-850 px-3.5 py-2 text-[12px] font-semibold text-chalk-muted"
                    >
                      <Icon className="h-3.5 w-3.5 text-flare" strokeWidth={2} />
                      {o.label}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
