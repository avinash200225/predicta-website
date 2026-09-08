import {
  Crosshair,
  Dribbble,
  Flame,
  Focus,
  Hand,
  Link2,
  Play,
  RefreshCw,
  Repeat,
  Rocket,
  Sparkles,
  Target,
  Timer,
  User,
  type LucideIcon,
} from "lucide-react";
import type { CategoryId, Outcome } from "@/lib/types";

export const outcomeIcon: Record<NonNullable<Outcome["icon"]>, LucideIcon> = {
  layup: Dribbble,
  dunk: Rocket,
  three: Crosshair,
  midrange: Focus,
  foul: Hand,
  rebound: RefreshCw,
  assist: Link2,
};

export const categoryIcon: Record<CategoryId, LucideIcon> = {
  "for-you": Sparkles,
  "next-play": Play,
  players: User,
  scoring: Target,
  possession: Repeat,
  streaks: Flame,
  timed: Timer,
};
