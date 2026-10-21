import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { IMG } from "@/data/images";
import { useI18n } from "@/i18n/LanguageProvider";
import { IndustrySectors } from "@/sections/IndustrySectors";
import { Contact } from "@/sections/Contact";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries | Contractor Supplies UAE | AIN" },
      {
        name: "description",
        content:
          "Explore AIN's trade supply for eight sectors, including construction, facilities maintenance, electrical contracting, infrastructure and industrial projects across the UAE.",
      },
      { property: "og:title", content: "Industries | Contractor Supplies UAE | AIN" },
      {
        property: "og:description",
        content:
          "Explore AIN's trade supply for eight sectors, including construction, facilities maintenance, electrical contracting, infrastructure and industrial projects across the UAE.",
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
      <PageHeader
        label={t.pages.industries.label}
        title={t.pages.industries.title}
        sub={t.pages.industries.sub}
        image={IMG.warehouse}
        alt=""
      />
      <IndustrySectors />
      <Contact />
    </SiteShell>
  );
}
