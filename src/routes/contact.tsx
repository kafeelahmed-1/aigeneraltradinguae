import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { Contact } from "@/sections/Contact";
import { QuoteRequest } from "@/sections/QuoteRequest";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Request a Quote | AIN General Trading" },
      {
        name: "description",
        content: "For product availability, quotations and all sales enquiries, email sales@aingeneraltrading.com or call +971 56 489 1899.",
      },
      { property: "og:title", content: "Contact | Request a Quote | AIN General Trading" },
      {
        property: "og:description",
        content: "For product availability, quotations and all sales enquiries, email sales@aingeneraltrading.com or call +971 56 489 1899.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteShell>
      <Contact />
      <QuoteRequest />
    </SiteShell>
  );
}
