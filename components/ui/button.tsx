"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const button = cva(
  "focus-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.985]",
  {
    variants: {
      variant: {
        primary:
          "bg-flare text-ink-950 hover:bg-flare-bright shadow-[0_10px_30px_-16px_rgba(255,90,31,0.9)]",
        outline:
          "border border-line-strong bg-transparent text-chalk hover:border-flare/60 hover:bg-flare-wash",
        ghost: "text-chalk-muted hover:bg-ink-800 hover:text-chalk",
        subtle: "bg-ink-800 text-chalk hover:bg-ink-750 border border-line",
      },
      size: {
        sm: "h-9 px-3.5 text-[12px] uppercase tracking-[0.1em]",
        md: "h-11 px-5 text-[13px] uppercase tracking-[0.12em]",
        lg: "h-[52px] px-7 text-[13px] uppercase tracking-[0.14em]",
        block: "h-12 w-full px-5 text-[13px] uppercase tracking-[0.14em]",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={cn(button({ variant, size }), className)} {...props} />
  ),
);
Button.displayName = "Button";

export const buttonStyles = button;
