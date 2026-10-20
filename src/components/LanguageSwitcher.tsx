import { useI18n } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, setLang, t } = useI18n();
  const opt = (l: "en" | "ar", label: string, langAttr: string) => (
    <button
      type="button"
      onClick={() => setLang(l)}
      aria-pressed={lang === l}
      lang={langAttr}
      className={cn(
        "min-h-9 px-2.5 text-xs font-bold tracking-wider transition-colors",
        lang === l ? "text-primary" : "text-ink-muted hover:text-ink-foreground",
      )}
    >
      {label}
    </button>
  );
  return (
    <div role="group" aria-label={t.nav.language} dir="ltr" className={cn("flex items-center", className)}>
      {opt("en", "EN", "en")}
      <span aria-hidden className="h-3 w-px bg-ink-line" />
      {opt("ar", "العربية", "ar")}
    </div>
  );
}
