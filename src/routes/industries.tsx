import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { IMG } from "@/data/images";
import { useI18n } from "@/i18n/LanguageProvider";
import { Categories } from "@/sections/Categories";
import { Contact } from "@/sections/Contact";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries | Contractor Supplies UAE | AIN" },
      { name: "description", content: "Supply for construction, maintenance, electrical installation and infrastructure projects." },
      { property: "og:title", content: "Industries | Contractor Supplies UAE | AIN" },
      { property: "og:description", content: "Supply for construction, maintenance, electrical installation and infrastructure projects." },
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
      <PageHeader label={t.pages.industries.label} title={t.pages.industries.title} sub={t.pages.industries.sub} image={IMG.warehouse} alt="" />
      <Categories />
      <Contact />
    </SiteShell>
  );
}
