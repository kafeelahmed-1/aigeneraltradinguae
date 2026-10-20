import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/data/site";
import { useI18n } from "@/i18n/LanguageProvider";

const base =
  "group inline-flex min-h-12 items-center justify-center gap-3 px-6 text-sm font-bold uppercase tracking-[0.08em] transition-all duration-300 active:translate-y-px rtl:tracking-normal";

export const btn = {
  primary: cn(base, "bg-primary text-primary-foreground hover:bg-ink-foreground hover:text-ink"),
  primaryOnLight: cn(base, "bg-primary text-primary-foreground hover:bg-ink hover:text-ink-foreground"),
  ghostDark: cn(base, "border border-ink-line text-ink-foreground hover:border-primary hover:text-primary"),
  ghostLight: cn(base, "border border-foreground/25 text-foreground hover:border-foreground hover:bg-foreground hover:text-background"),
};

export function Arrow({ className }: { className?: string }) {
  return <ArrowRight aria-hidden className={cn("h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1", className)} />;
}

export function QuoteButton({ className, children, onLight }: { className?: string; children?: ReactNode; onLight?: boolean }) {
  const { t } = useI18n();
  return (
    <Link to="/contact" hash="rfq" className={cn(onLight ? btn.primaryOnLight : btn.primary, className)}>
      {children ?? t.nav.quote}
      <Arrow />
    </Link>
  );
}

export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36A9.39 9.39 0 0 1 2.64 12C2.64 6.82 6.86 2.6 12.05 2.6a9.33 9.33 0 0 1 6.65 2.76A9.33 9.33 0 0 1 21.45 12c0 5.19-4.22 9.5-9.4 9.5m8-17.5A11.2 11.2 0 0 0 12.05.74C5.83.74.78 5.79.78 12c0 1.99.52 3.93 1.5 5.64L.68 23.3l5.8-1.52a11.24 11.24 0 0 0 5.57 1.42h.01c6.21 0 11.27-5.05 11.27-11.27 0-3.01-1.17-5.84-3.3-7.97" />
    </svg>
  );
}

export function WhatsAppButton({ className, variant = "dark", label }: { className?: string; variant?: "dark" | "light"; label?: string }) {
  const { t } = useI18n();
  return (
    <a href={whatsappLink(t.wa.message)} target="_blank" rel="noopener noreferrer" className={cn(variant === "dark" ? btn.ghostDark : btn.ghostLight, className)}>
      <WhatsAppIcon className="h-5 w-5 text-whatsapp" />
      {label ?? t.wa.trade}
    </a>
  );
}
