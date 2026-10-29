import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { useI18n } from "@/i18n/LanguageProvider";
import { SHOWCASE_IMAGES } from "@/data/images";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { Arrow } from "@/components/Buttons";

export function Showcase() {
  const { t, dir } = useI18n();
  const track = useRef<HTMLDivElement>(null);
  const scroll = (forward: boolean) => {
    const el = track.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8 * (forward ? 1 : -1) * (dir === "rtl" ? -1 : 1);
    el.scrollBy({ left: amount, behavior: "smooth" });
  };
  return (
    <section className="overflow-hidden bg-secondary py-20 md:py-28" aria-labelledby="show-h">
      <div className="container-x flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel>{t.showcase.label}</SectionLabel>
          </Reveal>
          <Reveal delay={100}>
            <h2
              id="show-h"
              className="mt-6 font-display text-4xl font-extrabold leading-[0.95] md:text-6xl"
            >
              {t.showcase.h2}
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 text-muted-foreground">{t.showcase.sub}</p>
          </Reveal>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scroll(false)}
            aria-label={t.showcase.prev}
            className="grid h-12 w-12 place-items-center border border-foreground/25 transition-colors hover:bg-foreground hover:text-background"
          >
            <ChevronLeft className="h-5 w-5 rtl:-scale-x-100" />
          </button>
          <button
            type="button"
            onClick={() => scroll(true)}
            aria-label={t.showcase.next}
            className="grid h-12 w-12 place-items-center bg-primary text-primary-foreground transition-colors hover:bg-ink hover:text-ink-foreground"
          >
            <ChevronRight className="h-5 w-5 rtl:-scale-x-100" />
          </button>
        </div>
      </div>

      <div
        ref={track}
        className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-ps-5 px-5 pb-4 md:scroll-ps-10 md:px-10 xl:scroll-ps-16 xl:px-16"
      >
        {t.showcase.items.map((p, i) => {
          const img = SHOWCASE_IMAGES[i]!;
          return (
            <Reveal
              key={p.type}
              delay={i * 100}
              className="w-[78vw] shrink-0 snap-start sm:w-[22rem] lg:w-[26rem]"
            >
              <article className="group relative h-full bg-ink text-ink-foreground transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_24px_70px_-28px_rgba(255,102,0,0.5)]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={img.src}
                    alt={p.type}
                    width={800}
                    height={1000}
                    loading="lazy"
                    style={{ objectPosition: img.pos }}
                    className="h-full w-full scale-[1.35] object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.48]"
                  />
                  <span className="label-mono absolute start-4 top-4 bg-primary px-2 py-1 text-primary-foreground">
                    {p.cat}
                  </span>
                  <span
                    className="absolute end-4 top-4 font-mono text-xs text-ink-foreground/70"
                    dir="ltr"
                  >
                    {String(i + 1).padStart(2, "0")}/
                    {String(t.showcase.items.length).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex items-end justify-between gap-4 border-t-2 border-primary p-5">
                  <h3 className="font-display text-2xl font-bold leading-tight">{p.type}</h3>
                  <Link
                    to="/contact"
                    hash="rfq"
                    className="shrink-0 label-mono inline-flex items-center gap-2 text-primary after:absolute after:inset-0 group-hover:text-ink-foreground"
                  >
                    {t.showcase.request}{" "}
                    <Arrow className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
                  </Link>
                </div>
              </article>
            </Reveal>
          );
        })}
        <div className="w-1 shrink-0" aria-hidden />
      </div>
    </section>
  );
}
