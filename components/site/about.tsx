"use client";

import { SectionHeading, Reveal } from "@/components/ui/section";

const POINTS = [
  {
    title: "What we build",
    copy: "A live prediction experience for sports fans, centred on short-duration moments inside the game rather than the final result.",
  },
  {
    title: "Who it is for",
    copy: "Fans who want to stay involved possession by possession, and the platforms that want to keep them there.",
  },
  {
    title: "How we work",
    copy: "The live board is designed to run itself — our goal is zero people managing it. The product surface is what we show; the rest stays under the hood.",
  },
];

export function About() {
  return (
    <section id="about" className="border-t border-line-soft py-20 lg:py-28">
      <div className="rail grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <SectionHeading
          eyebrow="About"
          title={
            <>
              Live sports,
              <br />
              made interactive.
            </>
          }
        />
        <div className="space-y-6">
          {POINTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07}>
              <div className="border-l border-line pl-6">
                <h3 className="text-[12px] font-bold uppercase tracking-[0.16em] text-flare">
                  {p.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-chalk-muted">{p.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
