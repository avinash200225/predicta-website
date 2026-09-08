"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section";

const POINTS = [
  {
    kicker: "01",
    title: "Attention lives in the moment",
    copy: "Fans watch with a phone in hand and react possession by possession. The product they are offered still resolves at the final buzzer.",
  },
  {
    kicker: "02",
    title: "A full game is one decision",
    copy: "Traditional props ask for a single call, usually before tip-off. A three-hour broadcast contains hundreds of decision points that go unused.",
  },
  {
    kicker: "03",
    title: "Short windows change the rhythm",
    copy: "When an opportunity opens and settles inside a possession, engagement is spread across the whole game instead of front-loaded at the start.",
  },
];

export function WhyNow() {
  return (
    <section id="opportunity" className="border-t border-line-soft py-20 lg:py-28">
      <div className="rail">
        <SectionHeading
          eyebrow="The opportunity"
          title={
            <>
              Live is where the
              <br />
              attention is.
            </>
          }
          copy="Predicta is built for the part of the game fans are already reacting to — the next possession, the next shot, the next ninety seconds."
        />

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-3">
          {POINTS.map((p, i) => (
            <motion.div
              key={p.kicker}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="bg-ink-900 p-7 lg:p-8"
            >
              <span className="num text-[12px] font-semibold text-flare">{p.kicker}</span>
              <h3 className="mt-4 text-[17px] font-semibold leading-snug text-chalk">{p.title}</h3>
              <p className="mt-3 text-[13px] leading-relaxed text-chalk-muted">{p.copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
