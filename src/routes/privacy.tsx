import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";
import { LEGAL } from "@/data/legal";
import { useI18n } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | AIN General Trading" },
      {
        name: "description",
        content:
          "How AIN General Trading handles information on its UAE website and in trade enquiries.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const { lang } = useI18n();
  return <LegalPage document={LEGAL[lang].privacy} />;
}
