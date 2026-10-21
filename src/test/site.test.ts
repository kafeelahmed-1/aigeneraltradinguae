import { describe, expect, it } from "vitest";
import { SITE, whatsappLink, mailtoLink } from "@/data/site";

describe("contact rules", () => {
  it("uses the exact contact email", () => {
    expect(SITE.email).toBe("aintradegen@gmail.com");
  });

  it("provides direct department email addresses", () => {
    expect(SITE.departmentEmails.map(({ address }) => address)).toEqual([
      "sales@aingeneraltrading.com",
      "finance@aingeneraltrading.com",
      "enquiries@aingeneraltrading.com",
    ]);
  });

  it("opens WhatsApp directly on +971 56 489 1899 with the message", () => {
    expect(whatsappLink("Hello AIN")).toBe("https://wa.me/971564891899?text=Hello%20AIN");
  });

  it("emails the trade desk address", () => {
    expect(mailtoLink("RFQ", "x").startsWith("mailto:aintradegen@gmail.com?")).toBe(true);
  });
});
