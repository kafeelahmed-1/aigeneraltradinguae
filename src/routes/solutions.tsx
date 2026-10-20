import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { IMG } from "@/data/images";
import { useI18n } from "@/i18n/LanguageProvider";
import { Intro } from "@/sections/Intro";
import { Contact } from "@/sections/Contact";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions | BOQ Procurement UAE | AIN General Trading" },
      { name: "description", content: "BOQ-based quoting, multi-category sourcing and UAE-wide site fulfillment." },
      { property: "og:title", content: "Solutions | BOQ Procurement UAE | AIN General Trading" },
      { property: "og:description", content: "BOQ-based quoting, multi-category sourcing and UAE-wide site fulfillment." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  const { t } = useI18n();
  void PageHeader; void IMG; void t;
  return (
    <SiteShell>
      <PageHeader label={t.pages.solutions.label} title={t.pages.solutions.title} sub={t.pages.solutions.sub} image={IMG.warehouse} alt="" />
      <Intro />
      <Contact />
    </SiteShell>
  );
}
