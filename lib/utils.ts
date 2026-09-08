import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format American odds with an explicit sign. */
export function formatOdds(odds: number) {
  return odds > 0 ? `+${odds}` : `${odds}`;
}

/** Profit returned on a winning pick at American odds. */
export function profitFor(odds: number, stake: number) {
  return odds > 0 ? stake * (odds / 100) : stake * (100 / Math.abs(odds));
}

/** Total return (stake + profit) on a winning pick. */
export function returnFor(odds: number, stake: number) {
  return stake + profitFor(odds, stake);
}

export function money(value: number, opts?: { cents?: boolean }) {
  const cents = opts?.cents ?? true;
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: cents ? 2 : 0,
    maximumFractionDigits: cents ? 2 : 0,
  });
}

export function clock(seconds: number) {
  const s = Math.max(0, Math.floor(seconds));
  const m = Math.floor(s / 60);
  return `${String(m).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
}
