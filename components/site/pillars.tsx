"use client";

import { Gauge, Layers, Repeat, UserRound } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section";

const PILLARS = [
  {
    icon: Gauge,
    title: "Fast",
    copy: "Opportunities can focus on the next play or the next few minutes, not the final score.",
  },
  {
    icon: Layers,
    title: "Dynamic",
    copy: "Available predictions evolve as the game changes, quarter by quarter and possession by possession.",
  },
  {
    icon: UserRound,
    title: "Personal",
    copy: "Users can explore moments around the players and teams they actually care about.",
  },
  {
    icon: Repeat,
    title: "Interactive",
    copy: "Every possession can create a reason to stay engaged with the broadcast.",
  },
];

export function Pillars() {
  return (
    <section className="border-t border-line-soft py-20 lg:py-28">
      <div className="rail">
        <SectionHeading
          eyebrow="Why it works"
          title={
            <>
              Built for the speed
              <br />
              of live sports.
            </>
          }
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="card group relative overflow-hidden p-6 transition-colors hover:border-flare/40"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-ink-800 transition-colors group-hover:border-flare/40 group-hover:bg-flare-wash">
                  <Icon className="h-4 w-4 text-flare" strokeWidth={1.9} />
                </span>
                <h3 className="mt-5 text-[13px] font-bold uppercase tracking-[0.16em] text-chalk">
                  {p.title}
                </h3>
                <p className="mt-2.5 text-[13px] leading-relaxed text-chalk-muted">{p.copy}</p>
                <span className="num absolute right-5 top-5 text-[11px] text-ink-700">
                  0{i + 1}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
