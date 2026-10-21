import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";
import { LEGAL } from "@/data/legal";
import { useI18n } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | AIN General Trading" },
      {
        name: "description",
        content: "Terms for using the AIN General Trading UAE website and requesting a quotation.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  const { lang } = useI18n();
  return <LegalPage document={LEGAL[lang].terms} />;
}
