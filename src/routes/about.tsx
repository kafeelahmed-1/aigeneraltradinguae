import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { IMG } from "@/data/images";
import { useI18n } from "@/i18n/LanguageProvider";
import { Intro } from "@/sections/Intro";
import { Categories } from "@/sections/Categories";
import { Contact } from "@/sections/Contact";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | AIN General Trading LLC, Sharjah" },
      {
        name: "description",
        content:
          "AIN General Trading LLC is a Sharjah-based UAE trading company supplying contractors, developers and industrial buyers with site-ready tools, electrical products and construction materials.",
      },
      { property: "og:title", content: "About | AIN General Trading LLC, Sharjah" },
      {
        property: "og:description",
        content:
          "AIN General Trading LLC is a Sharjah-based UAE trading company supplying contractors, developers and industrial buyers with site-ready tools, electrical products and construction materials.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function AboutStory() {
  const { t } = useI18n();

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container-x grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <Reveal>
          <SectionLabel>{t.aboutStory.label}</SectionLabel>
          <h2 className="mt-6 max-w-2xl font-display text-4xl font-extrabold leading-[0.95] md:text-6xl">
            {t.aboutStory.h2}
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-8 text-foreground/80">{t.aboutStory.intro}</p>
          <p className="mt-5 max-w-xl leading-8 text-muted-foreground">{t.aboutStory.intro2}</p>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-[28px] border border-border bg-card p-6 shadow-[0_28px_80px_-42px_rgba(15,19,24,0.25)] md:p-8">
            <div className="grid gap-4">
              {t.aboutStory.points.map((point, index) => (
                <div
                  key={point}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-background/80 p-4"
                >
                  <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/10 font-mono text-xs font-bold text-primary">
                    0{index + 1}
                  </span>
                  <p className="text-base leading-7 text-foreground/85">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Page() {
  const { t } = useI18n();
  void PageHeader;
  void IMG;
  void t;
  return (
    <SiteShell>
      <PageHeader
        label={t.pages.about.label}
        title={t.pages.about.title}
        sub={t.pages.about.sub}
        image={IMG.warehouse}
        alt=""
      />
      <Intro />
      <AboutStory />
      <Categories />
      <Contact />
    </SiteShell>
  );
}
