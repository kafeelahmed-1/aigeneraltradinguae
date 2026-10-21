import { Link } from "@tanstack/react-router";
import { INDUSTRY_IMAGES } from "@/data/images";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { Arrow } from "@/components/Buttons";
import { useI18n } from "@/i18n/LanguageProvider";

type IndustrySectorsProps = {
  preview?: boolean;
};

export function IndustrySectors({ preview = false }: IndustrySectorsProps) {
  const { t } = useI18n();
  const items = preview ? t.industries.items.slice(0, 4) : t.industries.items;

  return (
    <section
      className="bg-ink py-20 text-ink-foreground md:py-28"
      aria-labelledby="industries-heading"
    >
      <div className="container-x">
        <div className="grid gap-8 border-b border-ink-line pb-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <Reveal>
              <SectionLabel>{t.industries.label}</SectionLabel>
            </Reveal>
            <Reveal delay={100}>
              <h2
                id="industries-heading"
                className="mt-6 font-display text-4xl font-extrabold leading-[0.95] md:text-6xl"
              >
                {t.industries.h2}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200} className="md:col-span-4">
            <p className="text-ink-muted">{t.industries.sub}</p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2 lg:gap-6">
          {items.map((industry, i) => {
            const image = INDUSTRY_IMAGES[i]!;
            return (
              <Reveal
                key={industry.title}
                delay={i * 100}
                className="group relative min-h-[26rem] overflow-hidden border border-ink-line bg-ink-2 transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_24px_70px_-28px_rgba(255,102,0,0.35)] md:min-h-[30rem]"
              >
                <img
                  src={image.src}
                  alt=""
                  width={image.w}
                  height={image.h}
                  style={{ objectPosition: image.pos }}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-55 transition-all duration-[1.2s] ease-out group-hover:scale-105 group-hover:opacity-70"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-ink via-ink/65 to-ink/5 transition-opacity duration-500 group-hover:via-ink/55"
                  aria-hidden
                />
                <div className="relative flex h-full min-h-[26rem] flex-col p-6 md:min-h-[30rem] md:p-9">
                  <div className="flex items-start justify-between">
                    <span
                      className="font-display text-5xl font-black leading-none text-ink-foreground/80 md:text-6xl"
                      dir="ltr"
                    >
                      0{i + 1}
                    </span>
                    <span className="grid h-11 w-11 place-items-center rounded-full border border-ink-foreground/35 text-ink-foreground transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                      <Arrow className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="mt-auto max-w-xl">
                    <span
                      aria-hidden
                      className="mb-5 block h-0.5 w-12 bg-primary transition-all duration-500 group-hover:w-20"
                    />
                    <h3 className="font-display text-3xl font-extrabold md:text-4xl">
                      {industry.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-ink-foreground/85">
                      {industry.description}
                    </p>
                    <p className="mt-6 border-t border-ink-line pt-4 text-sm leading-6 text-ink-muted">
                      <span className="font-semibold text-ink-foreground">
                        {t.industries.suppliesLabel}
                      </span>
                      <span className="mx-2 text-primary" aria-hidden>
                        {" "}
                        /{" "}
                      </span>
                      {industry.supplies}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {preview && (
          <Reveal delay={200} className="mt-8 flex justify-end">
            <Link
              to="/industries"
              className="inline-flex items-center gap-3 border-b border-primary pb-2 text-sm font-bold text-primary"
            >
              {t.industries.allLink} <Arrow />
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}
