import type {
  Category,
  Market,
  Player,
  PlayEvent,
  Team,
} from "@/lib/types";

export const TEAMS: Record<string, Team> = {
  gsw: {
    id: "gsw",
    abbr: "GSW",
    city: "Golden State",
    name: "Warriors",
    accent: "#1D74F5",
    ink: "#FFC72C",
  },
  phx: {
    id: "phx",
    abbr: "PHX",
    city: "Phoenix",
    name: "Suns",
    accent: "#E56020",
    ink: "#5B2B82",
  },
};

export const PLAYERS: Player[] = [
  { id: "curry", name: "Stephen Curry", short: "S. Curry", teamId: "gsw", position: "G", initials: "SC" },
  { id: "butler", name: "Jimmy Butler", short: "J. Butler", teamId: "gsw", position: "F", initials: "JB" },
  { id: "podz", name: "Brandin Podziemski", short: "B. Podziemski", teamId: "gsw", position: "G", initials: "BP" },
  { id: "green", name: "Draymond Green", short: "D. Green", teamId: "gsw", position: "F", initials: "DG" },
  { id: "moody", name: "Moses Moody", short: "M. Moody", teamId: "gsw", position: "G", initials: "MM" },
  { id: "booker", name: "Devin Booker", short: "D. Booker", teamId: "phx", position: "G", initials: "DB" },
  { id: "oneale", name: "Royce O'Neale", short: "R. O'Neale", teamId: "phx", position: "F", initials: "RO" },
  { id: "allen", name: "Grayson Allen", short: "G. Allen", teamId: "phx", position: "G", initials: "GA" },
  { id: "dunn", name: "Ryan Dunn", short: "R. Dunn", teamId: "phx", position: "F", initials: "RD" },
];

export const playerById = (id: string) => PLAYERS.find((p) => p.id === id);

export const GAME = {
  id: "gsw-phx",
  home: "gsw",
  away: "phx",
  homeScore: 82,
  awayScore: 79,
  period: "Q3",
  clock: "07:42",
  venue: "Chase Center",
  possession: "gsw",
  homeStats: { to: 4, fls: 3, reb: 31 },
  awayStats: { to: 5, fls: 2, reb: 28 },
};

export const CATEGORIES: Category[] = [
  { id: "for-you", label: "For You" },
  { id: "next-play", label: "Next Play" },
  { id: "players", label: "Players" },
  { id: "scoring", label: "Scoring" },
  { id: "possession", label: "Possession" },
  { id: "streaks", label: "Streaks" },
  { id: "timed", label: "Timed" },
];

export const MARKETS: Market[] = [
  {
    id: "m-next-three",
    category: "players",
    kicker: "Next Score",
    question: "Who scores the next 3-pointer?",
    horizon: "Live market",
    window: 18,
    possession: "GSW ball",
    layout: "roster",
    featured: true,
    outcomes: [
      { id: "curry", label: "Stephen Curry", sublabel: "GSW · G", odds: 135, playerId: "curry", tag: "hot" },
      { id: "oneale", label: "Royce O'Neale", sublabel: "PHX · F", odds: 280, playerId: "oneale" },
      { id: "podz", label: "Brandin Podziemski", sublabel: "GSW · G", odds: 340, playerId: "podz" },
      { id: "field", label: "Other", sublabel: "Any other player", odds: 425 },
    ],
    insight: "Curry has attempted 2 threes in the last 3:40 of game time.",
  },
  {
    id: "m-next-possession",
    category: "possession",
    kicker: "Next Possession",
    question: "Will the next possession result in points?",
    detail: "Resolves at the end of the current possession.",
    horizon: "Next possession",
    window: 22,
    possession: "GSW ball",
    layout: "duo",
    outcomes: [
      { id: "yes", label: "Yes", odds: 120 },
      { id: "no", label: "No", odds: -145 },
    ],
    insight: "Golden State has scored on 4 of their last 7 possessions this quarter.",
  },
  {
    id: "m-next-90",
    category: "timed",
    kicker: "Next 90 Seconds",
    question: "Total points in the next 90 seconds",
    detail: "Combined score by both teams.",
    horizon: "Next 90 seconds",
    window: 26,
    layout: "duo",
    outcomes: [
      { id: "over", label: "Over 5.5", odds: 110 },
      { id: "under", label: "Under 5.5", odds: -130 },
    ],
    insight: "The last three minutes produced 11 combined points.",
  },
  {
    id: "m-next-basket",
    category: "scoring",
    kicker: "Next Basket",
    question: "How will the next basket be scored?",
    horizon: "Next made field goal",
    window: 15,
    possession: "GSW ball",
    layout: "grid",
    outcomes: [
      { id: "two", label: "2-Pointer", odds: 105, icon: "midrange" },
      { id: "three", label: "3-Pointer", odds: 180, icon: "three" },
      { id: "ft", label: "Free Throw", odds: 390, icon: "foul" },
      { id: "dunk", label: "Dunk", odds: 260, icon: "dunk" },
    ],
    insight: "Nine of the last twelve Golden State baskets came from behind the arc.",
  },
  {
    id: "m-curry-three",
    category: "players",
    kicker: "Next 2 Min",
    question: "Will Stephen Curry make a 3-pointer?",
    horizon: "Next 2 minutes",
    window: 21,
    layout: "duo",
    outcomes: [
      { id: "yes", label: "Yes", odds: 145, playerId: "curry" },
      { id: "no", label: "No", odds: -175, playerId: "curry" },
    ],
    insight: "Recent: 2 attempts in the last 3:40.",
    form: [
      { label: "3PM tonight", value: "5" },
      { label: "3PA tonight", value: "11" },
      { label: "Last 5 min", value: "1-2" },
    ],
  },
  {
    id: "m-next-play",
    category: "next-play",
    kicker: "Next Play",
    question: "What will happen on the next possession?",
    detail: "Resolves in seconds.",
    horizon: "Next possession",
    window: 9,
    possession: "GSW ball",
    layout: "grid",
    outcomes: [
      { id: "layup", label: "Layup", odds: -110, icon: "layup", tag: "hot" },
      { id: "dunk", label: "Dunk", odds: 350, icon: "dunk" },
      { id: "three", label: "3PM", odds: 250, icon: "three" },
      { id: "mid", label: "Midrange Jumper", odds: 400, icon: "midrange" },
    ],
    insight: "Golden State has started six of its last eight quarters with an interior look.",
  },
  {
    id: "m-turnover",
    category: "possession",
    kicker: "Next Possession",
    question: "Will the next possession end in a turnover?",
    horizon: "Next possession",
    window: 12,
    possession: "GSW ball",
    layout: "duo",
    outcomes: [
      { id: "yes", label: "Yes", odds: 320 },
      { id: "no", label: "No", odds: -420 },
    ],
    insight: "Phoenix has forced 5 turnovers, three of them in the third quarter.",
  },
  {
    id: "m-assist",
    category: "players",
    kicker: "Assist Chain",
    question: "Will Curry assist Podziemski on the next Warriors basket?",
    horizon: "Next Warriors basket",
    window: 19,
    possession: "GSW ball",
    layout: "duo",
    outcomes: [
      { id: "yes", label: "Yes", odds: 210, icon: "assist" },
      { id: "no", label: "No", odds: -260, icon: "assist" },
    ],
    insight: "Podziemski has finished 3 Curry feeds tonight.",
  },
  {
    id: "m-run",
    category: "streaks",
    kicker: "Streaks",
    question: "Will either team go on a 6-0 run in the next 3 minutes?",
    horizon: "Next 3 minutes",
    window: 31,
    layout: "duo",
    outcomes: [
      { id: "yes", label: "Yes", odds: 170, tag: "trend" },
      { id: "no", label: "No", odds: -205 },
    ],
    insight: "Four lead changes in the last five minutes of game time.",
  },
  {
    id: "m-foul",
    category: "timed",
    kicker: "Next 90 Sec",
    question: "Will a foul be called in the next 90 seconds?",
    horizon: "Next 90 seconds",
    window: 24,
    layout: "duo",
    outcomes: [
      { id: "yes", label: "Yes", odds: -135, icon: "foul" },
      { id: "no", label: "No", odds: 115, icon: "foul" },
    ],
    insight: "Seven fouls called in the quarter so far.",
  },
  {
    id: "m-fastbreak",
    category: "next-play",
    kicker: "Sequence",
    question: "Will the next missed shot lead to a fast-break score?",
    horizon: "Next miss",
    window: 14,
    layout: "duo",
    outcomes: [
      { id: "yes", label: "Yes", odds: 265 },
      { id: "no", label: "No", odds: -330 },
    ],
    insight: "Phoenix is pushing after 41% of defensive rebounds tonight.",
  },
  {
    id: "m-next-scorer",
    category: "for-you",
    kicker: "Next Score",
    question: "Who scores next?",
    horizon: "Next made basket",
    window: 17,
    possession: "GSW ball",
    layout: "roster",
    outcomes: [
      { id: "curry", label: "Stephen Curry", sublabel: "GSW · G", odds: 240, playerId: "curry", tag: "hot" },
      { id: "booker", label: "Devin Booker", sublabel: "PHX · G", odds: 280, playerId: "booker" },
      { id: "butler", label: "Jimmy Butler", sublabel: "GSW · F", odds: 320, playerId: "butler" },
      { id: "oneale", label: "Royce O'Neale", sublabel: "PHX · F", odds: 520, playerId: "oneale" },
    ],
    insight: "Curry and Booker have combined for 18 of the last 26 points.",
  },
  {
    id: "m-quarter-3pm",
    category: "scoring",
    kicker: "Rest of Quarter",
    question: "Combined 3-pointers made before the end of Q3",
    horizon: "End of quarter",
    window: 34,
    layout: "range",
    outcomes: [
      { id: "0-2", label: "0-2", odds: 320 },
      { id: "3-4", label: "3-4", odds: 145 },
      { id: "5-6", label: "5-6", odds: 190 },
      { id: "7+", label: "7+", odds: 480 },
    ],
    insight: "Both teams are shooting above 38% from deep tonight.",
  },
  {
    id: "m-booker-score",
    category: "streaks",
    kicker: "Heater",
    question: "Will Devin Booker score on 3 straight possessions?",
    detail: "Must record a point on each of the next three Suns possessions.",
    horizon: "Next 3 possessions",
    window: 27,
    layout: "duo",
    outcomes: [
      { id: "yes", label: "Yes", odds: 260, playerId: "booker", tag: "trend" },
      { id: "no", label: "No", odds: -340, playerId: "booker" },
    ],
    insight: "Booker has scored on two straight Suns possessions.",
    form: [
      { label: "PTS", value: "24" },
      { label: "FG%", value: "54%" },
      { label: "Q3 PTS", value: "9" },
    ],
  },
];

export const MOMENT_STREAM: Market[] = MARKETS.filter((m) =>
  ["m-next-possession", "m-next-90", "m-next-basket", "m-curry-three", "m-next-scorer"].includes(m.id),
);

export const PLAY_LOG: PlayEvent[] = [
  { id: "p1", clock: "07:42", teamId: "gsw", text: "Curry 26' 3PT (assist Green)", points: 3 },
  { id: "p2", clock: "08:05", teamId: "phx", text: "Booker driving layup", points: 2 },
  { id: "p3", clock: "08:29", teamId: "gsw", text: "Butler defensive rebound" },
  { id: "p4", clock: "08:41", teamId: "phx", text: "O'Neale 25' 3PT miss" },
  { id: "p5", clock: "09:03", teamId: "gsw", text: "Podziemski cutting layup", points: 2 },
  { id: "p6", clock: "09:22", teamId: "phx", text: "Allen turnover (bad pass)" },
];

/** Purely illustrative scoring-margin trace used for the momentum sparkline. */
export const MOMENTUM = [
  { t: "Q1", gsw: 4, phx: -2 },
  { t: "", gsw: 7, phx: -5 },
  { t: "Q2", gsw: 2, phx: 1 },
  { t: "", gsw: -3, phx: 6 },
  { t: "Q3", gsw: 1, phx: 3 },
  { t: "", gsw: 6, phx: -1 },
  { t: "Now", gsw: 9, phx: -4 },
];

export const FEED_ITEMS = [
  {
    id: "f1",
    flag: "Trending",
    icon: "flame" as const,
    marketId: "m-curry-three",
  },
  {
    id: "f2",
    flag: "Next possession",
    icon: "ball" as const,
    marketId: "m-next-possession",
  },
  {
    id: "f3",
    flag: "Moment",
    icon: "bolt" as const,
    marketId: "m-next-three",
  },
  {
    id: "f4",
    flag: "Timed",
    icon: "timer" as const,
    marketId: "m-next-90",
  },
];

export const BOARD_GAMES = [
  {
    id: "gsw-phx",
    home: { abbr: "GSW", score: 82 },
    away: { abbr: "PHX", score: 79 },
    period: "Q3",
    clock: "07:42",
    markets: 42,
    live: true,
  },
  {
    id: "lal-bos",
    home: { abbr: "LAL", score: 64 },
    away: { abbr: "BOS", score: 71 },
    period: "Q3",
    clock: "10:18",
    markets: 36,
    live: true,
  },
  {
    id: "mil-nyk",
    home: { abbr: "MIL", score: 58 },
    away: { abbr: "NYK", score: 55 },
    period: "Q2",
    clock: "02:04",
    markets: 29,
    live: true,
  },
  {
    id: "den-okc",
    home: { abbr: "DEN", score: 0 },
    away: { abbr: "OKC", score: 0 },
    period: "10:30 PM ET",
    clock: "",
    markets: 18,
    live: false,
  },
];

export const PROFILE = {
  name: "Avery Cole",
  handle: "@averyc",
  balance: 256.8,
  stats: [
    { label: "Picks made", value: "184" },
    { label: "Hit rate", value: "61%" },
    { label: "Avg. window", value: "94s" },
  ],
};
