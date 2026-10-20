import { SectionLabel } from "./SectionLabel";

export function PageHeader({ label, title, sub, image, alt }: { label: string; title: string; sub: string; image: string; alt: string }) {
  return (
    <section className="relative overflow-hidden bg-ink pb-16 pt-36 text-ink-foreground md:pb-24 md:pt-48">
      <img src={image} alt={alt} width={1600} height={1100} className="absolute inset-0 h-full w-full object-cover opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" aria-hidden />
      <div className="grid-lines absolute inset-0 opacity-30" aria-hidden />
      <div className="container-x relative">
        <SectionLabel className="hero-in">{label}</SectionLabel>
        <h1 className="hero-in mt-6 max-w-4xl font-display text-5xl font-extrabold leading-[0.95] md:text-7xl" style={{ "--d": "100ms" } as React.CSSProperties}>{title}</h1>
        <p className="hero-in mt-6 max-w-2xl text-lg text-ink-muted" style={{ "--d": "200ms" } as React.CSSProperties}>{sub}</p>
      </div>
    </section>
  );
}
