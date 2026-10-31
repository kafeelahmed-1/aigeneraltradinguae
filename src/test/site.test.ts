import { describe, expect, it } from "vitest";
import { SITE, whatsappLink, mailtoLink } from "@/data/site";

describe("contact rules", () => {
  it("uses the exact contact email", () => {
    expect(SITE.email).toBe("sales@aingeneraltrading.com");
  });

  it("opens WhatsApp directly on +971 56 489 1899 with the message", () => {
    expect(whatsappLink("Hello AIN")).toBe("https://wa.me/971564891899?text=Hello%20AIN");
  });

  it("emails the trade desk address", () => {
    expect(mailtoLink("RFQ", "x").startsWith("mailto:sales@aingeneraltrading.com?")).toBe(true);
  });
});
