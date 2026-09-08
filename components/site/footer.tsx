import Link from "next/link";
import { Logo } from "@/components/site/logo";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Nanobetting", href: "/#nanobetting" },
      { label: "The product", href: "/#product" },
      { label: "The opportunity", href: "/#opportunity" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/#about" },
      { label: "For operators", href: "/#operators" },
      { label: "Contact", href: "/#contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink-950">
      <div className="rail py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-sm">
            <Logo height={30} />
            <p className="mt-4 text-[13px] leading-relaxed text-chalk-muted">
              Predicta turns live sports into a continuous stream of short-duration prediction
              moments.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <div className="eyebrow">{col.title}</div>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[13px] text-chalk-muted transition-colors hover:text-chalk"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line-soft pt-6 text-[11px] text-chalk-faint sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Predicta Sports. All rights reserved.</span>
          <span className="max-w-md sm:text-right">
            Product demonstration only. All games, players, odds and balances shown are simulated.
            21+ where applicable.
          </span>
        </div>
      </div>
    </footer>
  );
}
