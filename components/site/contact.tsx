"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_ACCESS_KEY, CONTACT_ENDPOINT } from "@/lib/contact";
import { cn } from "@/lib/utils";

type State = "idle" | "sending" | "sent" | "error";

const inputClass = cn(
  "focus-ring mt-2 w-full rounded-xl border border-line bg-ink-900 px-3.5 py-3 text-[14px] text-chalk",
  "placeholder:text-chalk-faint focus:border-flare/60",
);

export function Contact() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [botField, setBotField] = useState("");
  const [state, setState] = useState<State>("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (botField) return; // honeypot: silently drop bots
    setState("sending");
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: CONTACT_ACCESS_KEY,
          subject: company ? `Predicta demo request — ${company}` : "Predicta demo request",
          from_name: "Predicta website",
          email,
          company: company || "—",
          message: message || "(no message)",
        }),
      });
      setState(res.ok ? "sent" : "error");
    } catch {
      setState("error");
    }
  }

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
                a live game. Tell us a little about you and we&apos;ll be in touch.
              </p>
            </div>

            {state === "sent" ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="card-soft flex flex-col items-center px-6 py-10 text-center"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gain/40 bg-gain-soft">
                  <Check className="h-5 w-5 text-gain" strokeWidth={2.5} />
                </span>
                <p className="mt-4 text-[15px] font-semibold text-chalk">Request received</p>
                <p className="mt-1.5 text-[13px] text-chalk-muted">
                  We&apos;ll be in touch to schedule your walkthrough.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={submit} className="card-soft space-y-3 p-5">
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
                    className={inputClass}
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
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="eyebrow">
                    Message <span className="normal-case tracking-normal">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="What would you like to see?"
                    className={cn(inputClass, "resize-none")}
                  />
                </div>

                {/* honeypot — hidden from people, filled by bots */}
                <input
                  type="text"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden
                  value={botField}
                  onChange={(e) => setBotField(e.target.value)}
                  className="hidden"
                />

                <Button type="submit" size="block" className="mt-1" disabled={state === "sending"}>
                  {state === "sending" ? (
                    <>
                      Sending
                      <Loader2 className="h-4 w-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      Request demo
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </Button>

                {state === "error" ? (
                  <p className="text-center text-[11px] leading-relaxed text-loss">
                    Something went wrong sending that. Please try again in a moment.
                  </p>
                ) : (
                  <p className="text-center text-[10px] leading-relaxed text-chalk-faint">
                    We only use your details to arrange the walkthrough.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
