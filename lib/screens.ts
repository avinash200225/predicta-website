import type { ScreenSpec } from "@/components/site/screen-frame";

/** Official Predicta product screens used as marketing imagery. */
export const SCREENS: Record<string, ScreenSpec> = {
  clutch: {
    src: "/screens/clutch_shot_moment_odds.png",
    width: 780,
    height: 1808,
    label: "Next clutch shot",
    caption: "Which player makes the next basket inside the final two minutes.",
  },
  firstThree: {
    src: "/screens/first_3pm_bet.png",
    width: 780,
    height: 2338,
    label: "Next possession",
    caption: "The first three-pointer of the quarter, opening and resolving in seconds.",
  },
  nextBasket: {
    src: "/screens/next_basket_type.png",
    width: 780,
    height: 2394,
    label: "Next basket",
    caption: "Not just who scores — how the next basket is scored.",
  },
  timedWindow: {
    src: "/screens/small_window_bets.png",
    width: 780,
    height: 2106,
    label: "Timed window",
    caption: "Combined scoring inside a short, clearly defined stretch of clock.",
  },
  transition: {
    src: "/screens/transition_3_ball_bet.png",
    width: 780,
    height: 1642,
    label: "Sequence",
    caption: "A three inside the opening seconds of the next possession.",
  },
  assistInterval: {
    src: "/screens/assist_interval_bet.png",
    width: 390,
    height: 965,
    label: "Assist interval",
    caption: "One player finding another, inside a window the bettor chooses.",
  },
  freeThrows: {
    src: "/screens/free_throw_total_bet.png",
    width: 780,
    height: 2004,
    label: "Quarter total",
    caption: "Free throws taken before the quarter ends.",
  },
};

/** Device renders of the live app, used as the primary product imagery. */
export const RENDERS = {
  slipFront: { src: "/screens/app-slip-front.png", width: 941, height: 1672 },
  slipAngle: { src: "/screens/app-slip-angle.png", width: 1145, height: 1374 },
  slipWindow: { src: "/screens/app-slip-window.png", width: 1198, height: 1313 },
  marketConvert: { src: "/screens/app-market-convert.png", width: 800, height: 1600 },
} as const;
