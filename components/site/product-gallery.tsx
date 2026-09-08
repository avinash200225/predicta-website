"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section";
import { ScreenFrame } from "@/components/site/screen-frame";
import { SCREENS } from "@/lib/screens";

const GALLERY = [SCREENS.clutch, SCREENS.timedWindow, SCREENS.nextBasket];

export function ProductGallery() {
  return (
    <section id="product" className="border-t border-line-soft py-20 lg:py-28">
      <div className="rail">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="The product"
            title={
              <>
                A different question
                <br />
                every possession.
              </>
            }
            copy="Player scoring, timed windows, how the next basket happens. The shape of the card stays the same, so a bettor never has to learn a new screen."
          />
          <Link href="#contact" className="shrink-0">
            <Button>
              Request a walkthrough
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {GALLERY.map((screen, i) => (
            <ScreenFrame
              key={screen.src}
              screen={screen}
              delay={i * 0.08}
              className={i === 1 ? "lg:-translate-y-6" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
