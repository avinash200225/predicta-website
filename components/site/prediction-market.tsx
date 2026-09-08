"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeftRight, LineChart, LogOut } from "lucide-react";
import { SectionHeading } from "@/components/ui/section";
import { RENDERS } from "@/lib/screens";

const POINTS = [
  {
    icon: ArrowLeftRight,
    copy: "A placed pick can convert into a tradable contract with a clear yes and no price.",
  },
  {
    icon: LineChart,
    copy: "Prices move with the game, so a bettor can see what their position is worth right now.",
  },
  {
    icon: LogOut,
    copy: "They can take a return before the outcome resolves instead of waiting for the whistle.",
  },
];

export function PredictionMarket() {
  return (
    <section className="border-t border-line-soft py-20 lg:py-28">
      <div className="rail grid gap-14 lg:grid-cols-[1fr_380px] lg:items-center lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Beyond the pick"
            title={
              <>
                A pick can become
                <br />
                a position.
              </>
            }
            copy="Nanobets do not have to end as a single yes or no. In the app, a live pick can be converted into a prediction market contract that the bettor can trade while the game is still running."
          />
          <ul className="mt-9 space-y-4">
            {POINTS.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.li
                  key={p.copy}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex items-start gap-4"
                >
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-line bg-ink-850">
                    <Icon className="h-4 w-4 text-gain" strokeWidth={1.9} />
                  </span>
                  <p className="text-[14px] leading-relaxed text-chalk-muted">{p.copy}</p>
                </motion.li>
              );
            })}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[360px]"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-10 -z-10 rounded-[60px] blur-3xl"
            style={{
              background:
                "radial-gradient(55% 50% at 50% 45%, rgba(47,208,138,0.16) 0%, transparent 70%)",
            }}
          />
          <Image
            src={RENDERS.marketConvert.src}
            alt="Converting a nanobet into a tradable prediction market contract in the Predicta app"
            width={RENDERS.marketConvert.width}
            height={RENDERS.marketConvert.height}
            className="h-auto w-full drop-shadow-[0_40px_70px_rgba(0,0,0,0.7)]"
            sizes="(max-width: 1024px) 80vw, 360px"
          />
        </motion.div>
      </div>
    </section>
  );
}
