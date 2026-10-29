import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n/LanguageProvider";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Arrow, QuoteButton, WhatsAppIcon } from "./Buttons";
import { SITE, whatsappLink } from "@/data/site";

export const NAV = [
  { to: "/", key: "home" },
  { to: "/products", key: "products" },
  { to: "/solutions", key: "solutions" },
  { to: "/about", key: "about" },
  { to: "/industries", key: "industries" },
  { to: "/contact", key: "contact" },
] as const;

export function Header() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled || open
          ? "border-ink-line bg-ink/95 shadow-lg shadow-black/10 backdrop-blur-md"
          : "border-transparent bg-ink/40 backdrop-blur-[2px]",
      )}
    >
      <div className="border-b border-ink-line/70 bg-ink/90 text-ink-foreground">
        <div className="container-nav flex h-8 items-center justify-between gap-3">
          <p className="truncate font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-ink-muted sm:text-xs">
            <span
              className="me-2 inline-block h-1.5 w-1.5 rounded-full bg-primary align-middle"
              aria-hidden
            />
            {t.nav.serviceLine}
          </p>
          <a
            href={whatsappLink(t.wa.message)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-whatsapp transition-colors hover:text-ink-foreground sm:text-xs rtl:tracking-normal"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span className="hidden sm:inline">{t.nav.whatsappCta}</span>
          </a>
        </div>
      </div>
      <div
        className={cn(
          "container-nav flex items-center justify-between gap-6 transition-all duration-300",
          scrolled ? "h-20" : "h-24",
        )}
      >
        <Logo onClick={() => setOpen(false)} />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  activeOptions={{ exact: true }}
                  className="relative block rounded-sm px-3 py-2 text-sm font-semibold text-ink-foreground/80 transition-colors hover:bg-ink-foreground/5 hover:text-ink-foreground data-[status=active]:bg-primary/10 data-[status=active]:text-primary after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-primary after:transition-transform hover:after:scale-x-100 data-[status=active]:after:scale-x-100 rtl:after:origin-right"
                >
                  {t.nav[n.key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher />
          <QuoteButton className="min-h-11 px-5 text-xs" />
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <a
            href={whatsappLink(t.wa.message)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.wa.float}
            className="grid h-11 w-11 place-items-center text-whatsapp"
          >
            <WhatsAppIcon />
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.close : t.nav.menu}
            className="grid h-11 w-11 place-items-center text-ink-foreground"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="h-[calc(100dvh-7rem)] overflow-y-auto border-t border-ink-line bg-ink lg:hidden"
        >
          <nav aria-label="Mobile" className="container-x flex flex-col py-6">
            <ul>
              {NAV.map((n, i) => (
                <li key={n.to} className="border-b border-ink-line">
                  <Link
                    to={n.to}
                    activeOptions={{ exact: true }}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between py-4 font-display text-3xl font-bold text-ink-foreground data-[status=active]:text-primary"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-mono text-xs text-ink-muted">0{i + 1}</span>
                      {t.nav[n.key]}
                    </span>
                    <Arrow className="h-5 w-5 text-ink-muted" />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-center justify-between">
              <span className="label-mono text-ink-muted">{t.nav.language}</span>
              <LanguageSwitcher />
            </div>
            <div className="mt-6 grid gap-3" onClick={() => setOpen(false)}>
              <QuoteButton className="w-full" />
              <a
                href={whatsappLink(t.wa.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-12 items-center justify-center gap-3 border border-ink-line text-sm font-bold uppercase tracking-wider text-ink-foreground rtl:tracking-normal"
              >
                <WhatsAppIcon className="h-5 w-5 text-whatsapp" /> {t.wa.trade}
              </a>
              <a
                href={SITE.phoneHref}
                dir="ltr"
                className="py-3 text-center font-mono text-sm text-ink-muted"
              >
                {SITE.phoneDisplay}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
