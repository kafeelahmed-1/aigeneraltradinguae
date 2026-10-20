import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { useI18n } from "@/i18n/LanguageProvider";
import { Hero } from "@/sections/Hero";
import { Marquee } from "@/components/Marquee";
import { Intro } from "@/sections/Intro";
import { Categories } from "@/sections/Categories";
import { Showcase } from "@/sections/Showcase";
import { QuoteRequest } from "@/sections/QuoteRequest";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AIN General Trading LLC | Industrial & Construction Supply UAE" },
      {
        name: "description",
        content:
          "Power tools, compact equipment, electrical supplies and building materials supplied across the UAE. 24hr quote turnaround.",
      },
      {
        property: "og:title",
        content: "AIN General Trading LLC | Industrial & Construction Supply UAE",
      },
      {
        property: "og:description",
        content:
          "Power tools, compact equipment, electrical supplies and building materials supplied across the UAE. 24hr quote turnaround.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  const { t } = useI18n();
  return (
    <SiteShell>
      <Hero />
      <Marquee items={t.marquee1} />
      <Intro />
      <Categories />
      <Showcase />
      <QuoteRequest />
    </SiteShell>
  );
}
