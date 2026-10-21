import type { LegalDocument } from "@/data/legal";
import { SiteShell } from "./SiteShell";

export function LegalPage({ document }: { document: LegalDocument }) {
  return (
    <SiteShell>
      <header className="bg-ink pb-14 pt-36 text-ink-foreground md:pb-20 md:pt-44">
        <div className="container-x">
          <p className="label-mono text-primary">AIN / UAE</p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-extrabold leading-tight md:text-6xl">
            {document.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-muted">{document.intro}</p>
          <p className="mt-5 label-mono text-ink-muted">{document.lastUpdated}</p>
        </div>
      </header>

      <div className="container-x py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-10">
            {document.sections.map((section) => (
              <section key={section.title} className="border-b border-border pb-8 last:border-0">
                <h2 className="font-display text-2xl font-bold md:text-3xl">{section.title}</h2>
                <div className="mt-4 space-y-4 text-base leading-8 text-muted-foreground">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="list-disc space-y-2 ps-6">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
