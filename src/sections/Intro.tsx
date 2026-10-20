import { Link } from "@tanstack/react-router";
import { useI18n } from "@/i18n/LanguageProvider";
import { IMG } from "@/data/images";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { Arrow } from "@/components/Buttons";

export function Intro() {
  const { t } = useI18n();
  return (
    <section className="py-20 md:py-32">
      <div className="container-x grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="relative lg:col-span-6">
          <div className="relative overflow-hidden">
            <img src={IMG.warehouse} alt={t.intro.imgAlt} width={1600} height={1104} loading="lazy" className="aspect-[4/5] w-full object-cover md:aspect-[5/4] lg:aspect-[4/5]" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-ink/90 to-transparent p-5 text-ink-foreground">
              <span className="label-mono">{t.intro.label}</span>
              <span className="font-mono text-xs text-primary" dir="ltr">SHJ—UAE</span>
            </div>
          </div>
          <div aria-hidden className="absolute -bottom-4 -start-4 hidden h-32 w-32 border-b-2 border-s-2 border-primary md:block" />
        </Reveal>
        <div className="lg:col-span-6">
          <Reveal><SectionLabel>{t.intro.label}</SectionLabel></Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 font-display text-4xl font-extrabold leading-[0.95] md:text-6xl xl:text-7xl">
              {t.intro.h2a}<br /><span className="text-steel">{t.intro.h2b}</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 text-lg leading-relaxed">{t.intro.p1}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{t.intro.p2}</p>
          </Reveal>
          <Reveal delay={300}>
            <ul className="mt-10 border-t border-border">
              {t.intro.points.map((p, i) => (
                <li key={p} className="flex items-center gap-5 border-b border-border py-4">
                  <span className="font-mono text-xs text-primary">0{i + 1}</span>
                  <span className="font-semibold">{p}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="group mt-8 inline-flex items-center gap-3 font-bold uppercase tracking-wider text-foreground underline decoration-primary decoration-2 underline-offset-8 hover:text-primary rtl:tracking-normal">
              {t.intro.cta} <Arrow />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
