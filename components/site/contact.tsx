"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL } from "@/lib/contact";
import { cn } from "@/lib/utils";

export function Contact() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [sent, setSent] = useState(false);

  const compose = () => {
    const subject = company
      ? `Predicta demo request — ${company}`
      : "Predicta demo request";
    const body = [
      "Hi Avinash,",
      "",
      "I'd like to see Nanobetting on a live game.",
      "",
      `Company: ${company || "—"}`,
      `Reply to: ${email}`,
      "",
    ].join("\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="contact" className="border-t border-line-soft py-20 lg:py-28">
      <div className="rail">
        <div className="card relative overflow-hidden p-8 sm:p-12 lg:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-70 blur-3xl"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(255,90,31,0.2) 0%, transparent 70%)",
            }}
          />
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="eyebrow text-flare">Request demo</span>
              <h2 className="display mt-4 text-[30px] sm:text-[40px]">
                See Nanobetting
                <br />
                on a live game.
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-chalk-muted">
                Walk through the product with our team and see how moment-level markets sit inside
                a live game.
              </p>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="focus-ring mt-7 inline-flex items-center gap-3 rounded-xl border border-line bg-ink-900 px-4 py-3 transition-colors hover:border-flare/50"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-ink-850">
                  <Mail className="h-4 w-4 text-flare" strokeWidth={1.9} />
                </span>
                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-chalk-faint">
                    Or email us directly
                  </span>
                  <span className="mt-0.5 block text-[14px] font-semibold text-chalk">
                    {CONTACT_EMAIL}
                  </span>
                </span>
              </a>
            </div>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="card-soft flex flex-col items-center px-6 py-10 text-center"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gain/40 bg-gain-soft">
                  <Check className="h-5 w-5 text-gain" strokeWidth={2.5} />
                </span>
                <p className="mt-4 text-[15px] font-semibold text-chalk">Your email is ready</p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-chalk-muted">
                  We opened a pre-filled message in your mail app. If nothing appeared, write to{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="font-semibold text-flare underline underline-offset-2"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  compose();
                }}
                className="card-soft space-y-3 p-5"
              >
                <div>
                  <label htmlFor="email" className="eyebrow">
                    Work email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@sportsbook.com"
                    className={cn(
                      "focus-ring mt-2 w-full rounded-xl border border-line bg-ink-900 px-3.5 py-3 text-[14px] text-chalk",
                      "placeholder:text-chalk-faint focus:border-flare/60",
                    )}
                  />
                </div>
                <div>
                  <label htmlFor="company" className="eyebrow">
                    Company
                  </label>
                  <input
                    id="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Company name"
                    className="focus-ring mt-2 w-full rounded-xl border border-line bg-ink-900 px-3.5 py-3 text-[14px] text-chalk placeholder:text-chalk-faint focus:border-flare/60"
                  />
                </div>
                <Button type="submit" size="block" className="mt-1">
                  Request demo
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <p className="text-center text-[10px] leading-relaxed text-chalk-faint">
                  Opens a pre-filled email to {CONTACT_EMAIL}.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
