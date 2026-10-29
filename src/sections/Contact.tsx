import { useI18n } from "@/i18n/LanguageProvider";
import { Mail } from "lucide-react";
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
      <div className="container-x mt-16 md:mt-20">
        <div className="mb-8 max-w-2xl">
          <SectionLabel>{t.contact.emailDepartmentsH}</SectionLabel>
          <p className="mt-4 text-ink-muted">{t.contact.emailDepartmentsSub}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {SITE.departmentEmails.map(({ department, address }) => (
            <a
              key={department}
              href={`mailto:${address}`}
              className="group flex items-center gap-4 border border-ink-line bg-ink-2/50 p-5 transition-colors hover:border-primary/70 md:p-6"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-ink-line text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Mail className="h-5 w-5" aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="label-mono block text-ink-muted">
                  {t.contact.emailDepartments[department]}
                </span>
                <span className="mt-1 block break-all text-sm text-ink-foreground transition-colors group-hover:text-primary sm:text-base">
                  {address}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
