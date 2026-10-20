import { useRef, useState, type FormEvent } from "react";
import { ArrowDownRight, ArrowRight, Check, Clock3, FileUp, Send } from "lucide-react";
import { SITE, mailtoLink, whatsappLink } from "@/data/site";
import { SectionLabel } from "@/components/SectionLabel";
import { useI18n } from "@/i18n/LanguageProvider";

type QuoteForm = {
  name: string;
  company: string;
  phone: string;
  email: string;
  location: string;
  categories: string[];
  message: string;
};

type ErrorField = keyof QuoteForm | "file";
type FieldErrors = Partial<Record<ErrorField, string>>;
type TextField = Exclude<keyof QuoteForm, "categories">;

const allowedFileExtensions = [".pdf", ".xls", ".xlsx", ".doc", ".docx", ".csv", ".jpg", ".jpeg", ".png", ".webp"];
const maxFileSize = 10 * 1024 * 1024;

const fieldClass =
  "min-h-12 w-full border border-ink-line bg-ink px-4 py-3 text-sm text-ink-foreground placeholder:text-ink-muted/70 transition-colors focus:border-primary focus:outline-none";

const initialForm: QuoteForm = {
  name: "",
  company: "",
  phone: "",
  email: "",
  location: "",
  categories: [],
  message: "",
};

export function QuoteRequest() {
  const { t } = useI18n();
  const [form, setForm] = useState<QuoteForm>(initialForm);
  const [file, setFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);

  const setField = (field: TextField, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const toggleCategory = (category: string) => {
    setForm((current) => ({
      ...current,
      categories: current.categories.includes(category)
        ? current.categories.filter((item) => item !== category)
        : [...current.categories, category],
    }));
    setErrors((current) => ({ ...current, categories: undefined }));
  };

  const selectFile = (selected: File | undefined) => {
    if (!selected) return;
    const extension = selected.name.slice(selected.name.lastIndexOf(".")).toLowerCase();
    if (!allowedFileExtensions.includes(extension)) {
      setFile(null);
      setErrors((current) => ({ ...current, file: t.rfq.errors.fileType }));
      if (fileInput.current) fileInput.current.value = "";
      return;
    }
    if (selected.size > maxFileSize) {
      setFile(null);
      setErrors((current) => ({ ...current, file: t.rfq.errors.fileSize }));
      if (fileInput.current) fileInput.current.value = "";
      return;
    }
    setFile(selected);
    setErrors((current) => ({ ...current, file: undefined }));
  };

  const validate = (): FieldErrors => {
    const next: FieldErrors = {};
    if (!form.name.trim()) next.name = t.rfq.errors.name;
    if (!form.company.trim()) next.company = t.rfq.errors.company;
    if (!/^[+\d][\d\s().-]{6,}$/.test(form.phone.trim())) next.phone = t.rfq.errors.phone;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = t.rfq.errors.email;
    if (!form.location.trim()) next.location = t.rfq.errors.location;
    if (form.categories.length === 0) next.categories = t.rfq.errors.categories;
    if (form.message.trim().length < 10) next.message = t.rfq.errors.message;
    if (errors.file) next.file = errors.file;
    return next;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setSubmitted(true);
  };

  const requestMessage = [
    t.rfq.msgIntro,
    "",
    `${t.rfq.fields.name}: ${form.name.trim()}`,
    `${t.rfq.fields.company}: ${form.company.trim()}`,
    `${t.rfq.fields.phone}: ${form.phone.trim()}`,
    `${t.rfq.fields.email}: ${form.email.trim()}`,
    `${t.rfq.fields.location}: ${form.location.trim()}`,
    `${t.rfq.fields.categories}: ${form.categories.join(", ")}`,
    `${t.rfq.fields.message}: ${form.message.trim()}`,
    ...(file ? [`${t.rfq.msgFile}: ${file.name}`] : []),
  ].join("\n");

  return (
    <section id="rfq" className="relative isolate scroll-mt-20 overflow-hidden bg-ink py-20 text-ink-foreground md:py-28">
      <div className="grid-lines pointer-events-none absolute inset-0 -z-10 opacity-[0.08]" aria-hidden />
      <div className="pointer-events-none absolute -end-32 top-0 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-[100px]" aria-hidden />
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <div className="flex flex-col">
            <SectionLabel>{t.rfq.label}</SectionLabel>
            <p className="label-mono mt-10 text-ink-muted">AIN / RFQ-01</p>
            <h2 className="mt-4 max-w-xl font-display text-[clamp(2.8rem,6vw,5.7rem)] font-black uppercase leading-[0.9] rtl:normal-case rtl:leading-[1.15]">
              {t.rfq.h2a}
              <span className="mt-2 block text-primary">{t.rfq.h2b}</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-muted md:text-lg">{t.rfq.sub}</p>

            <div className="mt-9 flex items-center gap-3 border-s-2 border-primary ps-4">
              <Clock3 className="h-5 w-5 shrink-0 text-primary" aria-hidden />
              <span className="text-sm font-semibold">{t.rfq.points[0]}</span>
            </div>

            <ul className="mt-8 space-y-4">
              {t.rfq.points.slice(1).map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-ink-muted">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-ink-line text-primary">
                    <Check className="h-3 w-3" aria-hidden />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <a href={`mailto:${SITE.email}`} className="group mt-auto hidden w-fit items-center gap-2 pt-12 text-sm text-ink-muted transition-colors hover:text-primary lg:inline-flex">
              {SITE.email}
              <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" aria-hidden />
            </a>
          </div>

          <div className="border border-ink-line bg-ink-2/80 p-5 shadow-2xl shadow-black/20 sm:p-8 md:p-10">
            <div className="mb-8 flex items-start justify-between gap-4 border-b border-ink-line pb-5">
              <div>
                <p className="label-mono text-primary">01 / {t.rfq.formTitle}</p>
                <p className="mt-2 text-sm text-ink-muted">{t.rfq.required} *</p>
              </div>
              <span className="hidden border border-ink-line px-3 py-2 label-mono text-ink-muted sm:inline-flex">SHJ · UAE</span>
            </div>

            {submitted ? (
              <div className="py-4" role="status" aria-live="polite">
                <span className="flex h-12 w-12 items-center justify-center border border-primary/50 bg-primary/10 text-primary">
                  <Check className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-6 font-display text-3xl font-bold">{t.rfq.readyTitle}</h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-muted">{t.rfq.readyBody}</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href={whatsappLink(requestMessage)} target="_blank" rel="noopener noreferrer" className="group inline-flex min-h-12 items-center justify-center gap-3 bg-primary px-6 text-sm font-bold uppercase tracking-[0.06em] text-primary-foreground transition-colors hover:bg-ink-foreground hover:text-ink rtl:tracking-normal">
                    <Send className="h-4 w-4" aria-hidden />
                    {t.rfq.sendWhatsapp}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" aria-hidden />
                  </a>
                  <a href={mailtoLink("RFQ — AIN General Trading", requestMessage)} className="inline-flex min-h-12 items-center justify-center gap-3 border border-ink-line px-6 text-sm font-bold uppercase tracking-[0.06em] transition-colors hover:border-primary hover:text-primary rtl:tracking-normal">
                    {t.rfq.sendEmail}
                  </a>
                </div>
                <button type="button" onClick={() => setSubmitted(false)} className="mt-5 text-sm text-ink-muted underline decoration-ink-line underline-offset-4 transition-colors hover:text-primary">
                  {t.rfq.edit}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {Object.keys(errors).length > 0 && (
                  <p className="mb-6 border-s-2 border-destructive bg-destructive/10 px-4 py-3 text-sm text-ink-foreground" role="alert">
                    {t.rfq.errors.summary}
                  </p>
                )}
                <div className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
                  <FormField id="rfq-name" label={t.rfq.fields.name} error={errors.name}>
                    <input id="rfq-name" name="name" autoComplete="name" className={fieldClass} placeholder={t.rfq.placeholders.name} value={form.name} onChange={(event) => setField("name", event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "rfq-name-error" : undefined} required />
                  </FormField>
                  <FormField id="rfq-company" label={t.rfq.fields.company} error={errors.company}>
                    <input id="rfq-company" name="company" autoComplete="organization" className={fieldClass} placeholder={t.rfq.placeholders.company} value={form.company} onChange={(event) => setField("company", event.target.value)} aria-invalid={Boolean(errors.company)} aria-describedby={errors.company ? "rfq-company-error" : undefined} required />
                  </FormField>
                  <FormField id="rfq-phone" label={t.rfq.fields.phone} error={errors.phone}>
                    <input id="rfq-phone" name="phone" type="tel" autoComplete="tel" dir="ltr" className={fieldClass} placeholder={t.rfq.placeholders.phone} value={form.phone} onChange={(event) => setField("phone", event.target.value)} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "rfq-phone-error" : undefined} required />
                  </FormField>
                  <FormField id="rfq-email" label={t.rfq.fields.email} error={errors.email}>
                    <input id="rfq-email" name="email" type="email" autoComplete="email" dir="ltr" className={fieldClass} placeholder={t.rfq.placeholders.email} value={form.email} onChange={(event) => setField("email", event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "rfq-email-error" : undefined} required />
                  </FormField>
                  <FormField id="rfq-location" label={t.rfq.fields.location} error={errors.location} className="sm:col-span-2">
                    <input id="rfq-location" name="location" autoComplete="address-level2" className={fieldClass} placeholder={t.rfq.placeholders.location} value={form.location} onChange={(event) => setField("location", event.target.value)} aria-invalid={Boolean(errors.location)} aria-describedby={errors.location ? "rfq-location-error" : undefined} required />
                  </FormField>

                  <fieldset className="sm:col-span-2" aria-describedby={errors.categories ? "rfq-categories-error" : undefined}>
                    <legend className="mb-3 text-sm font-semibold">
                      {t.rfq.fields.categories}<span className="ms-1 text-primary">*</span>
                    </legend>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {t.rfq.categoryOptions.map((category) => {
                        const selected = form.categories.includes(category);
                        return (
                          <label key={category} className={`flex min-h-11 cursor-pointer items-center gap-3 border px-3 text-sm transition-colors ${selected ? "border-primary/60 bg-primary/10 text-ink-foreground" : "border-ink-line text-ink-muted hover:border-ink-muted"}`}>
                            <input type="checkbox" name="categories" value={category} checked={selected} onChange={() => toggleCategory(category)} className="h-4 w-4 accent-primary" />
                            {category}
                          </label>
                        );
                      })}
                    </div>
                    {errors.categories && <p id="rfq-categories-error" className="mt-2 text-sm text-destructive-foreground">{errors.categories}</p>}
                  </fieldset>

                  <FormField id="rfq-message" label={t.rfq.fields.message} error={errors.message} className="sm:col-span-2">
                    <textarea id="rfq-message" name="message" rows={4} className={`${fieldClass} min-h-28 resize-y`} placeholder={t.rfq.placeholders.message} value={form.message} onChange={(event) => setField("message", event.target.value)} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "rfq-message-error" : undefined} required />
                  </FormField>

                  <div className="sm:col-span-2">
                    <span className="mb-2 block text-sm font-semibold">{t.rfq.fields.upload}</span>
                    <div className="flex flex-col gap-3 border border-dashed border-ink-line p-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-start gap-3">
                        <FileUp className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                        <div className="min-w-0">
                          <p className="break-all text-sm">{file?.name ?? t.rfq.uploadHint}</p>
                          {errors.file && <p className="mt-1 text-sm text-destructive-foreground" role="alert">{errors.file}</p>}
                        </div>
                      </div>
                      <div className="flex shrink-0 gap-2">
                        <input ref={fileInput} id="rfq-file" type="file" className="sr-only" accept=".pdf,.xls,.xlsx,.doc,.docx,.csv,.jpg,.jpeg,.png,.webp" onChange={(event) => selectFile(event.target.files?.[0])} />
                        <label htmlFor="rfq-file" className="inline-flex min-h-10 cursor-pointer items-center border border-ink-line px-4 text-xs font-bold uppercase tracking-wider transition-colors hover:border-primary hover:text-primary rtl:tracking-normal">{t.rfq.uploadCta}</label>
                        {file && <button type="button" onClick={() => { setFile(null); setErrors((current) => ({ ...current, file: undefined })); if (fileInput.current) fileInput.current.value = ""; }} className="inline-flex min-h-10 items-center px-3 text-xs text-ink-muted transition-colors hover:text-primary">{t.rfq.uploadRemove}</button>}
                      </div>
                    </div>
                  </div>
                </div>

                <button type="submit" className="group mt-7 inline-flex min-h-13 w-full items-center justify-center gap-3 bg-primary px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-primary-foreground transition-colors hover:bg-ink-foreground hover:text-ink sm:w-auto rtl:tracking-normal">
                  {t.rfq.submit}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" aria-hidden />
                </button>
                <p className="mt-4 text-xs leading-relaxed text-ink-muted">{t.rfq.readyBody}</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  id,
  label,
  error,
  className,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const errorId = `${id}-error`;
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold">
        {label}<span className="ms-1 text-primary">*</span>
      </label>
      {children}
      {error && <p id={errorId} className="mt-2 text-sm text-destructive-foreground">{error}</p>}
    </div>
  );
}
