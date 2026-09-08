import Image from "next/image";
import { cn } from "@/lib/utils";

/** Official Predicta lockup: the network mark plus the wordmark. */
export function Logo({
  className,
  height = 26,
  markOnly = false,
}: {
  className?: string;
  height?: number;
  markOnly?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center", className)} style={{ gap: height * 0.34 }}>
      <Image
        src="/predicta-mark.png"
        alt="Predicta"
        width={250}
        height={320}
        priority
        className="w-auto"
        style={{ height }}
      />
      {markOnly ? null : (
        <Image
          src="/predicta-wordmark.png"
          alt=""
          aria-hidden
          width={649}
          height={96}
          priority
          className="w-auto"
          style={{ height: Math.round(height * 0.5) }}
        />
      )}
    </span>
  );
}
