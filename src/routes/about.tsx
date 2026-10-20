import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { IMG } from "@/data/images";
import { useI18n } from "@/i18n/LanguageProvider";
import { Intro } from "@/sections/Intro";
import { Categories } from "@/sections/Categories";
import { Contact } from "@/sections/Contact";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | AIN General Trading LLC, Sharjah" },
      { name: "description", content: "UAE's direct-response trade supplier based in Sharjah Media City." },
      { property: "og:title", content: "About | AIN General Trading LLC, Sharjah" },
      { property: "og:description", content: "UAE's direct-response trade supplier based in Sharjah Media City." },
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
      <PageHeader label={t.pages.about.label} title={t.pages.about.title} sub={t.pages.about.sub} image={IMG.warehouse} alt="" />
      <Intro />
      <Categories />
      <Contact />
    </SiteShell>
  );
}
