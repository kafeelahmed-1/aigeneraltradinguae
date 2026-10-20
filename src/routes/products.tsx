import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { IMG } from "@/data/images";
import { useI18n } from "@/i18n/LanguageProvider";
import { Categories } from "@/sections/Categories";
import { Showcase } from "@/sections/Showcase";
import { Contact } from "@/sections/Contact";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products | Power Tools & Construction Supplies UAE | AIN" },
      { name: "description", content: "Compact equipment, power tools, electrical supplies and building materials for UAE contractors." },
      { property: "og:title", content: "Products | Power Tools & Construction Supplies UAE | AIN" },
      { property: "og:description", content: "Compact equipment, power tools, electrical supplies and building materials for UAE contractors." },
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
      <PageHeader label={t.pages.products.label} title={t.pages.products.title} sub={t.pages.products.sub} image={IMG.warehouse} alt="" />
      <Categories />
      <Showcase />
      <Contact />
    </SiteShell>
  );
}
