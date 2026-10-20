import { useI18n } from "@/i18n/LanguageProvider";
import { SITE } from "@/data/site";
import { SectionLabel } from "@/components/SectionLabel";
import { QuoteButton, WhatsAppButton, btn } from "@/components/Buttons";

export function Contact() {
  const { t } = useI18n();
  const rows = [
    { k: t.contact.address, v: t.contact.addressV },
    { k: t.contact.phone, v: <a href={SITE.phoneHref} dir="ltr" className="hover:text-primary">{SITE.phoneDisplay}</a> },
    { k: t.contact.email, v: <a href={`mailto:${SITE.email}`} className="break-all hover:text-primary">{SITE.email}</a> },
    { k: t.contact.hours, v: t.contact.hoursV },
  ];
  return (
    <section id="contact-details" className="scroll-mt-20 bg-ink py-20 text-ink-foreground md:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-2">
        <div>
          <SectionLabel>{t.contact.label}</SectionLabel>
          <h2 className="mt-6 font-display text-4xl font-extrabold leading-[0.95] md:text-6xl">{t.contact.h2}</h2>
          <p className="mt-6 max-w-lg text-ink-muted">{t.contact.sub}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <QuoteButton>{t.nav.quote}</QuoteButton>
            <WhatsAppButton />
            <a href={SITE.phoneHref} className={btn.ghostDark}>{t.contact.call}</a>
          </div>
        </div>
        <dl className="border-t border-ink-line">
          {rows.map((r) => (
            <div key={r.k} className="grid gap-1 border-b border-ink-line py-5 sm:grid-cols-3">
              <dt className="label-mono text-primary">{r.k}</dt>
              <dd className="text-lg sm:col-span-2">{r.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
