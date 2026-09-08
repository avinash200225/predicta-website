"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/site/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/#product", label: "Product" },
  { href: "/#nanobetting", label: "Nanobetting" },
  { href: "/#operators", label: "For Operators" },
  { href: "/#about", label: "About" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-line bg-ink-950/85 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav className="rail flex h-16 items-center justify-between gap-6">
        <Link href="/" className="focus-ring rounded-md" aria-label="Predicta home">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="focus-ring rounded text-[12px] font-semibold uppercase tracking-[0.12em] text-chalk-muted transition-colors hover:text-chalk"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link href="/#contact" className="hidden sm:block">
            <Button size="sm">Request Demo</Button>
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line text-chalk lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-line bg-ink-950/97 backdrop-blur-xl lg:hidden"
          >
            <ul className="rail flex flex-col py-3">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-line-soft py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-chalk-muted"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <Link href="/#contact" onClick={() => setOpen(false)}>
                  <Button size="block">Request Demo</Button>
                </Link>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
