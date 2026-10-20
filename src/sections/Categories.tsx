import { Link } from "@tanstack/react-router";
import { useI18n } from "@/i18n/LanguageProvider";
import { CATEGORY_IMAGES } from "@/data/images";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { Arrow } from "@/components/Buttons";
import { cn } from "@/lib/utils";

const LAYOUT = [
  "md:col-span-7 md:row-span-2 min-h-[26rem] md:min-h-[40rem]",
  "md:col-span-5 min-h-[22rem]",
  "md:col-span-5 min-h-[22rem]",
  "md:col-span-12 min-h-[22rem] md:min-h-[24rem]",
];

export function Categories() {
  const { t } = useI18n();
  return (
    <section className="bg-background py-20 md:py-32" aria-labelledby="cat-h">
      <div className="container-x">
        <div className="grid gap-8 border-b border-border pb-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <Reveal><SectionLabel>{t.categories.label}</SectionLabel></Reveal>
            <Reveal delay={100}>
              <h2 id="cat-h" className="mt-6 font-display text-4xl font-extrabold leading-[0.95] md:text-6xl">{t.categories.h2}</h2>
            </Reveal>
          </div>
          <Reveal delay={200} className="md:col-span-4">
            <p className="text-muted-foreground">{t.categories.sub}</p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-12 md:gap-5">
          {t.categories.items.map((c, i) => {
            const img = CATEGORY_IMAGES[i]!;
            return (
              <Reveal key={c.title} delay={i * 80} className={cn("group relative overflow-hidden bg-ink text-ink-foreground", LAYOUT[i])}>
                <img src={img.src} alt={c.alt} width={img.w} height={img.h} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-[1.2s] ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" aria-hidden />
                <div className="relative flex h-full flex-col justify-between p-6 md:p-8">
                  <div className="flex items-start justify-between">
                    <span className="font-display text-6xl font-black text-ink-foreground/90 md:text-7xl" dir="ltr">0{i + 1}</span>
                    <span className="label-mono bg-ink/70 px-2 py-1 text-ink-muted backdrop-blur">{c.tag}</span>
                  </div>
                  <div className={cn(i === 3 && "md:max-w-xl")}>
                    <span aria-hidden className="mb-5 block h-0.5 w-12 bg-primary transition-all duration-500 group-hover:w-28" />
                    <h3 className="font-display text-3xl font-extrabold md:text-4xl">{c.title}</h3>
                    <p className="mt-3 max-w-md text-ink-foreground/75">{c.desc}</p>
                    <Link to="/products" className="mt-6 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-primary after:absolute after:inset-0 rtl:tracking-normal">
                      {t.categories.explore} <Arrow />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
