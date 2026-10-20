import { Link } from "@tanstack/react-router";
import { FileText, LayoutGrid, MessageSquare, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/i18n/LanguageProvider";
import { whatsappLink } from "@/data/site";
import { Arrow, WhatsAppIcon } from "./Buttons";
import { LogoMark } from "./Logo";

/** Floating WhatsApp button + trade-desk routing assistant (not a live chat). */
export function FloatingActions() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    panelRef.current?.querySelector<HTMLElement>("a,button")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); triggerRef.current?.focus(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);
  const optCls = "group flex min-h-12 w-full items-center gap-3 border-b border-border px-4 py-3 text-start text-sm font-semibold text-foreground transition-colors hover:bg-muted last:border-b-0";

  return (
    <div className="fixed bottom-4 end-4 z-40 flex flex-col items-end gap-3 md:bottom-6 md:end-6">
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="false"
          aria-labelledby="desk-title"
          className="hero-in w-[min(22rem,calc(100vw-2rem))] border border-border bg-card shadow-2xl"
        >
          <div className="flex items-start justify-between gap-3 bg-ink p-4 text-ink-foreground">
            <div className="flex items-center gap-3">
              <LogoMark className="h-9 w-11" />
              <div>
                <p id="desk-title" className="font-display text-lg font-bold">{t.widget.title}</p>
                <p className="label-mono text-ink-muted">{t.widget.status}</p>
              </div>
            </div>
            <button type="button" onClick={close} aria-label={t.widget.close} className="grid h-9 w-9 place-items-center text-ink-muted hover:text-ink-foreground">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="p-4">
            <p className="font-display text-xl font-bold">{t.widget.greeting}</p>
            <p className="mt-1 text-sm text-muted-foreground">{t.widget.hint}</p>
          </div>
          <div className="border-t border-border">
            <Link to="/contact" hash="rfq" onClick={close} className={optCls}>
              <FileText className="h-4 w-4 text-primary" aria-hidden /> <span className="flex-1">{t.widget.options.quote}</span> <Arrow />
            </Link>
            <a href={whatsappLink(t.wa.message)} target="_blank" rel="noopener noreferrer" onClick={close} className={optCls}>
              <WhatsAppIcon className="h-4 w-4 text-whatsapp" /> <span className="flex-1">{t.widget.options.whatsapp}</span> <Arrow />
            </a>
            <Link to="/products" onClick={close} className={optCls}>
              <LayoutGrid className="h-4 w-4 text-primary" aria-hidden /> <span className="flex-1">{t.widget.options.products}</span> <Arrow />
            </Link>
            <Link to="/contact" onClick={close} className={optCls}>
              <Phone className="h-4 w-4 text-primary" aria-hidden /> <span className="flex-1">{t.widget.options.contact}</span> <Arrow />
            </Link>
          </div>
          <p className="border-t border-border bg-muted px-4 py-2.5 text-xs text-muted-foreground">{t.widget.note}</p>
        </div>
      )}

      <div className="flex items-center gap-2">
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? t.widget.close : t.widget.open}
          className="flex h-12 items-center gap-2 border border-ink-line bg-ink px-4 text-sm font-bold text-ink-foreground shadow-lg transition-colors hover:bg-ink-2"
        >
          {open ? <X className="h-4 w-4" aria-hidden /> : <MessageSquare className="h-4 w-4 text-primary" aria-hidden />}
          <span className="hidden sm:inline">{t.widget.tab}</span>
        </button>
        <a
          href={whatsappLink(t.wa.message)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.wa.float}
          className="grid h-14 w-14 place-items-center bg-whatsapp text-ink shadow-lg transition-transform hover:-translate-y-0.5"
        >
          <WhatsAppIcon className="h-7 w-7" />
        </a>
      </div>
    </div>
  );
}
