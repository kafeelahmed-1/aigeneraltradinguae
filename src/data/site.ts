export const SITE = {
  name: "AIN General Trading LLC",
  phoneDisplay: "+971 56 489 1899",
  phoneHref: "tel:+971564891899",
  whatsappNumber: "971564891899",
  email: "sales@aingeneraltrading.com",
  url: "https://aingeneraltrading.com",
} as const;

export function whatsappLink(message: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function mailtoLink(subject: string, body: string): string {
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
