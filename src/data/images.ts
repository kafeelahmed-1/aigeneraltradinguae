import hero from "@/assets/hero.webp";
import powerTools from "@/assets/power-tools.webp";
import compact from "@/assets/compact-equipment.webp";
import electrical from "@/assets/electrical.webp";
import materials from "@/assets/building-materials.webp";
import warehouse from "@/assets/warehouse.webp";
import contractors from "@/assets/contractors.webp";
import heroGoldenHour from "@/assets/hero-golden-hour.png";
import heroShowroom from "@/assets/hero-showroom.png";

export const IMG = { hero, powerTools, compact, electrical, materials, warehouse, contractors };
export const HERO_IMAGES = [
  { src: heroGoldenHour, w: 1365, h: 768 },
  { src: heroShowroom, w: 1365, h: 768 },
];

/** Category order matches translations.categories.items */
export const CATEGORY_IMAGES = [
  { src: compact, w: 1600, h: 1104 },
  { src: powerTools, w: 1200, h: 1200 },
  { src: electrical, w: 1200, h: 1200 },
  { src: materials, w: 1200, h: 1200 },
];

/** Industry order matches translations.industries.items */
export const INDUSTRY_IMAGES = [
  { src: compact, w: 1600, h: 1104, pos: "50% 55%" },
  { src: warehouse, w: 1600, h: 1067, pos: "42% 50%" },
  { src: electrical, w: 1200, h: 1200, pos: "65% 50%" },
  { src: contractors, w: 1600, h: 1067, pos: "50% 45%" },
  { src: compact, w: 1600, h: 1104, pos: "65% 55%" },
  { src: warehouse, w: 1600, h: 1067, pos: "48% 45%" },
  { src: materials, w: 1200, h: 1200, pos: "55% 50%" },
  { src: warehouse, w: 1600, h: 1067, pos: "25% 50%" },
];

/** Showcase order matches translations.showcase.items; position crops a relevant detail */
export const SHOWCASE_IMAGES = [
  { src: powerTools, pos: "30% 30%" },
  { src: powerTools, pos: "55% 75%" },
  { src: compact, pos: "80% 70%" },
  { src: compact, pos: "25% 55%" },
  { src: materials, pos: "40% 85%" },
  { src: electrical, pos: "30% 60%" },
];
