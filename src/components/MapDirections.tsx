import { MapPin } from "lucide-react";
import { useI18n } from "@/i18n/LanguageProvider";

const LOCATION = "Sharjah Media City, Sharjah, UAE";
const MAP_URL = `https://www.google.com/maps?q=${encodeURIComponent(LOCATION)}`;
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(LOCATION)}`;

export function MapDirections() {
  const { t } = useI18n();

  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container-x">
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="label-mono text-primary">{t.contact.mapLabel}</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
              {t.contact.mapTitle}
            </h2>
            <p className="mt-3 text-muted-foreground">{t.contact.addressV}</p>
          </div>
          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 bg-primary px-5 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-85"
          >
            <MapPin className="h-4 w-4" aria-hidden />
            {t.contact.directions}
          </a>
        </div>
        <iframe
          title={t.contact.mapTitle}
          src={`${MAP_URL}&output=embed`}
          className="h-[320px] w-full border-0 md:h-[420px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
