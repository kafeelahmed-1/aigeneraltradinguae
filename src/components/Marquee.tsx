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
            <span className="flex items-center gap-3 whitespace-nowrap px-8 py-5 font-display text-xl font-bold uppercase transition-colors duration-300 hover:text-primary sm:px-12 sm:py-6 sm:text-2xl md:px-20 md:py-8 md:text-4xl lg:px-24">
              <Icon
                className={cn(
                  "h-4 w-4 shrink-0 transition-transform duration-300 group-hover:scale-110 sm:h-5 sm:w-5 md:h-6 md:w-6",
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
        "marquee group relative mt-8 overflow-hidden border-y",
        variant === "dark"
          ? "border-ink-line bg-ink text-ink-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
          : "border-ink bg-primary text-primary-foreground",
      )}
    >
      {variant === "dark" && (
        <div
          className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_50%_0%,hsl(var(--primary)/0.12),transparent_62%)]"
          aria-hidden
        />
      )}
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
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 start-0 z-10 w-10 bg-gradient-to-r to-transparent sm:w-16",
          variant === "dark" ? "from-ink" : "from-primary",
        )}
        aria-hidden
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 end-0 z-10 w-10 bg-gradient-to-l to-transparent sm:w-16",
          variant === "dark" ? "from-ink" : "from-primary",
        )}
        aria-hidden
      />
    </div>
  );
}
