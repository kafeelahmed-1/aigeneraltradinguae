import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { useI18n } from "@/i18n/LanguageProvider";
import { HERO_IMAGES } from "@/data/images";
import { QuoteButton, WhatsAppButton } from "@/components/Buttons";
import { CountUp } from "@/components/CountUp";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;
const HERO_SLIDE_INTERVAL = 7000;

export function Hero() {
  const { t } = useI18n();
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % HERO_IMAGES.length);
    }, HERO_SLIDE_INTERVAL);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink text-ink-foreground">
      {HERO_IMAGES.map((image, index) => (
        <img
          key={image.src}
          src={image.src}
          alt={
            index === activeImage ? (index === 0 ? t.hero.newImgAlt : t.hero.showroomImgAlt) : ""
          }
          aria-hidden={index !== activeImage}
          width={image.w}
          height={image.h}
          fetchPriority={index === 0 ? "high" : "low"}
          className={`hero-zoom absolute inset-0 -z-10 h-full w-full object-cover object-[30%_center] transition-opacity duration-1000 rtl:-scale-x-100 ${
            index === activeImage ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/75 to-ink/10 rtl:bg-gradient-to-l" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-transparent to-ink/50" aria-hidden />
      <div className="grid-lines absolute inset-0 -z-10 opacity-25" aria-hidden />

      <div className="container-x flex flex-1 flex-col justify-center pb-10 pt-32 md:pt-40">
        <div className="max-w-4xl">
          <p className="hero-in label-mono flex items-center gap-3 text-primary" style={d(0)}>
            <span className="h-2 w-2 bg-primary" aria-hidden /> {t.hero.label}
            <svg
              className="h-3 w-[18px] shrink-0"
              viewBox="0 0 18 12"
              role="img"
              aria-label="United Arab Emirates flag"
            >
              <rect width="18" height="4" fill="#00732f" />
              <rect y="4" width="18" height="4" fill="#fff" />
              <rect y="8" width="18" height="4" fill="#000" />
              <rect width="5" height="12" fill="#f00" />
            </svg>
          </p>
          <h1 className="mt-6 font-display text-[clamp(2.6rem,8.5vw,7.5rem)] font-black uppercase leading-[0.88] rtl:normal-case rtl:leading-[1.15]">
            <span className="hero-in block" style={d(120)}>{t.hero.h1a}</span>
            <span className="hero-in block text-primary" style={d(240)}>{t.hero.h1b}</span>
          </h1>
          <p className="hero-in mt-8 max-w-xl text-base text-ink-foreground/80 md:text-lg" style={d(360)}>{t.hero.sub}</p>
          <div className="hero-in mt-10 flex flex-col gap-3 sm:flex-row" style={d(480)}>
            <QuoteButton>{t.hero.cta1}</QuoteButton>
            <WhatsAppButton label={t.hero.cta2} className="bg-ink/40 backdrop-blur-sm" />
          </div>
          <ul className="hero-in mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-muted" style={d(600)}>
            {t.hero.trust.map((x, i) => (
              <li key={x} className="flex items-center gap-5">
                {i > 0 && <span className="h-1 w-1 rotate-45 bg-primary" aria-hidden />}
                {x}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Integrated technical stat rail */}
      <div className="hero-in relative border-t border-ink-line bg-ink/70 backdrop-blur-md" style={d(700)}>
        <div className="container-x grid grid-cols-3">
          {t.stats.items.map((s, i) => (
            <div key={i} className="relative border-ink-line py-5 pe-3 md:py-7 [&:not(:first-child)]:border-s [&:not(:first-child)]:ps-4 md:[&:not(:first-child)]:ps-8">
              <span className="label-mono absolute top-2 hidden text-ink-muted md:block">0{i + 1}</span>
              <p className="font-display text-2xl font-black leading-none sm:text-4xl md:text-5xl" dir="ltr">
                {"value" in s && s.value !== undefined ? <CountUp value={s.value} suffix={s.suffix} /> : <span className="text-primary">{s.text}</span>}
              </p>
              <p className="mt-2 text-xs text-ink-muted sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
        <span className="label-mono absolute bottom-2 end-4 hidden text-ink-muted/60 xl:block" dir="ltr">{t.hero.coords}</span>
      </div>
    </section>
  );
}
