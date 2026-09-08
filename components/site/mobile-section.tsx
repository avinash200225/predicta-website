"use client";

import { LayoutGrid, MessageSquare, Radio, Ticket, User } from "lucide-react";
import { SectionHeading } from "@/components/ui/section";
import Image from "next/image";
import { motion } from "framer-motion";
import { RENDERS } from "@/lib/screens";

const NAV_NOTES = [
  { icon: LayoutGrid, label: "Board", copy: "Every live and upcoming game in one list." },
  { icon: Radio, label: "Live", copy: "Scoreboard, category tabs and the moment feed." },
  { icon: Ticket, label: "My Bets", copy: "Open predictions tracking in real time." },
  { icon: MessageSquare, label: "Feed", copy: "A vertical stream of what is opening now." },
  { icon: User, label: "Profile", copy: "Balance, history and play controls." },
];

export function MobileSection() {
  return (
    <section className="border-t border-line-soft py-20 lg:py-28">
      <div className="rail grid gap-14 lg:grid-cols-[1fr_400px] lg:items-center lg:gap-16">
        <div className="order-2 lg:order-1">
          <SectionHeading
            eyebrow="Mobile product"
            title={
              <>
                A native-feeling
                <br />
                second screen.
              </>
            }
            copy="Predicta is built phone-first. The game stays at the top, the moments move underneath it, and a pick takes a single tap."
          />
          <ul className="mt-8 divide-y divide-line-soft border-y border-line-soft">
            {NAV_NOTES.map((n) => {
              const Icon = n.icon;
              return (
                <li key={n.label} className="flex items-start gap-4 py-4">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-line bg-ink-850">
                    <Icon className="h-4 w-4 text-flare" strokeWidth={1.9} />
                  </span>
                  <div>
                    <div className="text-[12px] font-bold uppercase tracking-[0.14em] text-chalk">
                      {n.label}
                    </div>
                    <p className="mt-1 text-[13px] leading-relaxed text-chalk-muted">{n.copy}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative order-1 mx-auto w-full max-w-[400px] lg:order-2"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-10 -z-10 rounded-[60px] blur-3xl"
            style={{
              background:
                "radial-gradient(55% 50% at 50% 45%, rgba(255,90,31,0.16) 0%, transparent 70%)",
            }}
          />
          <Image
            src={RENDERS.slipWindow.src}
            alt="The Predicta app showing a live player nanobet with a selectable time window, odds and the bottom navigation"
            width={RENDERS.slipWindow.width}
            height={RENDERS.slipWindow.height}
            className="h-auto w-full drop-shadow-[0_40px_70px_rgba(0,0,0,0.7)]"
            sizes="(max-width: 1024px) 85vw, 400px"
          />
        </motion.div>
      </div>
    </section>
  );
}
