import { describe, expect, it } from "vitest";
import { dictionaries } from "@/i18n/translations";

describe("industry content", () => {
  it("provides eight industry descriptions and supply examples in English and Arabic", () => {
    for (const language of [dictionaries.en, dictionaries.ar]) {
      expect(language.industries.items).toHaveLength(8);
      expect(
        language.industries.items.every(
          (industry) => industry.title && industry.description && industry.supplies,
        ),
      ).toBe(true);
    }
  });
});
