import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Predicta Sports — Nanobetting",
  description:
    "Predicta turns live sports into a continuous stream of short-duration prediction moments. Predict the next possession, the next scorer, the next 90 seconds.",
  openGraph: {
    title: "Predicta Sports — Nanobetting",
    description:
      "Sports move fast. Your picks should too. Predict live moments as they happen with Predicta Nanobetting.",
    type: "website",
  },
  icons: {
    icon: "/predicta-mark.png",
    apple: "/predicta-mark.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#08090A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
