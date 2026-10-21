import { Link } from "@tanstack/react-router";
import { ArrowUp } from "lucide-react";
import { useI18n } from "@/i18n/LanguageProvider";
import { SITE } from "@/data/site";
import { Logo } from "./Logo";
import { QuoteButton, WhatsAppButton } from "./Buttons";

const QUICK = [
  { to: "/", key: "home" },
  { to: "/products", key: "products" },
  { to: "/solutions", key: "solutions" },
  { to: "/about", key: "about" },
  { to: "/contact", key: "contact" },
] as const;

export function Footer() {
  const { t, lang } = useI18n();
  return (
    <footer className="relative overflow-hidden bg-ink text-ink-foreground">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <div className="container-x relative">
        <div className="grid gap-12 border-b border-ink-line py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-6 max-w-sm text-ink-muted">{t.footer.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <QuoteButton />
              <WhatsAppButton label={t.nav.whatsapp} />
            </div>
          </div>
          <nav aria-label={t.footer.quick} className="md:col-span-2">
            <h2 className="label-mono text-primary">{t.footer.quick}</h2>
            <ul className="mt-5 space-y-3">
              {QUICK.map((q) => (
                <li key={q.to}>
                  <Link
                    to={q.to}
                    className="text-ink-foreground/80 transition-colors hover:text-primary"
                  >
                    {t.nav[q.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:col-span-3">
            <h2 className="label-mono text-primary">{t.footer.contactH}</h2>
            <ul className="mt-5 space-y-3 text-ink-foreground/80">
              <li>
                <a href={SITE.phoneHref} dir="ltr" className="hover:text-primary">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="break-all hover:text-primary">
                  {SITE.email}
                </a>
              </li>
              {SITE.departmentEmails.map(({ department, address }) => (
                <li key={department}>
                  <a href={`mailto:${address}`} className="break-all hover:text-primary">
                    <span className="text-ink-muted">
                      {t.contact.emailDepartments[department]}:{" "}
                    </span>
                    {address}
                  </a>
                </li>
              ))}
              <li>{t.contact.addressV}</li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h2 className="label-mono text-primary">{t.footer.hoursH}</h2>
            <p className="mt-5 text-ink-foreground/80">{t.contact.hoursV}</p>
          </div>
        </div>
        <div
          aria-hidden
          className="select-none whitespace-nowrap py-8 font-display text-[clamp(1.75rem,7vw,7rem)] font-black leading-[0.85] tracking-tighter text-primary md:py-10"
          dir="ltr"
        >
          AINGENERALTRADINGLLC
        </div>
        <div className="flex flex-col items-start justify-between gap-4 border-t border-ink-line py-6 text-sm text-ink-muted sm:flex-row sm:items-center">
          <p>{t.footer.rights}</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link to="/terms" className="hover:text-primary">
              {lang === "ar" ? "الشروط والأحكام" : "Terms & Conditions"}
            </Link>
            <Link to="/privacy" className="hover:text-primary">
              {lang === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
            </Link>
            <a href="#top" className="inline-flex items-center gap-2 hover:text-primary">
              {t.footer.top} <ArrowUp className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
