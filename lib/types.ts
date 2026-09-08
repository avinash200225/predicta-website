export type CategoryId =
  | "for-you"
  | "next-play"
  | "players"
  | "scoring"
  | "possession"
  | "streaks"
  | "timed";

export interface Category {
  id: CategoryId;
  label: string;
}

export interface Team {
  id: string;
  abbr: string;
  city: string;
  name: string;
  accent: string;
  ink: string;
}

export interface Player {
  id: string;
  name: string;
  short: string;
  teamId: string;
  position: string;
  initials: string;
}

export type OutcomeTag = "hot" | "trend" | "closing";

export interface Outcome {
  id: string;
  label: string;
  sublabel?: string;
  odds: number;
  tag?: OutcomeTag;
  playerId?: string;
  icon?: "layup" | "dunk" | "three" | "midrange" | "foul" | "rebound" | "assist";
}

export type MarketLayout = "duo" | "grid" | "roster" | "range";

export interface Market {
  id: string;
  category: CategoryId;
  kicker: string;
  question: string;
  detail?: string;
  horizon: string;
  window: number;
  possession?: string;
  outcomes: Outcome[];
  insight?: string;
  form?: { label: string; value: string }[];
  layout: MarketLayout;
  featured?: boolean;
}

export interface PlayEvent {
  id: string;
  clock: string;
  teamId: string;
  text: string;
  points?: number;
}
