import { cn } from "@/lib/utils";

export function LiveDot({ className }: { className?: string }) {
  return (
    <span className={cn("relative flex h-1.5 w-1.5", className)}>
      <span className="absolute inline-flex h-full w-full animate-pulse-live rounded-full bg-loss" />
      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-loss" />
    </span>
  );
}

export function LiveBadge({ className, label = "Live" }: { className?: string; label?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border border-loss/40 bg-loss-soft px-2 py-[3px] text-[10px] font-bold uppercase tracking-[0.16em] text-loss",
        className,
      )}
    >
      <LiveDot />
      {label}
    </span>
  );
}
