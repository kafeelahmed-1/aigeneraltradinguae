import type { CSSProperties } from "react";
import {
  Blocks,
  Cable,
  Circle,
  Drill,
  Cog,
  Hammer,
  Nut,
  Pipette,
  Settings,
  Wrench,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

const productIcons = [
  Wrench,
  Settings,
  Zap,
  Blocks,
  Drill,
  Cog,
  Settings,
  Circle,
  Cable,
  Pipette,
  Cable,
  Nut,
  Hammer,
];

export function Marquee({
  items,
  reverse = false,
  variant = "dark",
  duration = 45,
}: {
  items: string[];
  reverse?: boolean;
  variant?: "dark" | "orange";
  duration?: number;
}) {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item, i) => {
        const Icon = productIcons[i % productIcons.length];
        return (
          <li key={i} className="flex items-center">
            <span className="flex items-center gap-3 whitespace-nowrap px-6 font-display text-2xl font-bold uppercase md:px-10 md:text-4xl">
              <Icon
                className={cn(
                  "h-5 w-5 shrink-0 md:h-6 md:w-6",
                  variant === "dark" ? "text-primary" : "text-ink",
                )}
                aria-hidden
              />
              {item}
            </span>
            <span
              aria-hidden
              className={cn("h-2.5 w-2.5 rotate-45", variant === "dark" ? "bg-primary" : "bg-ink")}
            />
          </li>
        );
      })}
    </ul>
  );
  return (
    <div
      className={cn(
        "marquee relative overflow-hidden border-y py-5 md:py-7",
        variant === "dark"
          ? "border-ink-line bg-ink text-ink-foreground"
          : "border-ink bg-primary text-primary-foreground",
      )}
    >
      {/* Track kept LTR so the animation is identical in Arabic; text itself renders natively */}
      <div
        dir="ltr"
        className="marquee-track flex"
        data-reverse={reverse}
        style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
      >
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
