import heroThumb from "@/public/images/hero-two-thumb.webp";
import arrow from "@/public/images/lg-arrow.webp";

import type { HeroTwoData } from "@/types/hero-two";

export const heroTwoData: HeroTwoData = {
  content: {
    intro: "Creating timeless residence in Sweden",

    title: {
      brand: "Archinex",
      firstLine: "visionary",
      separator: "/",
      words: [
        "inspiring",
        "motivated",
        "passion",
      ],
      lastLine: "architecture studio.",
    },

    image: {
      src: heroThumb,
      alt: "Hero Two",
    },
  },

  language: {
    primary: "EN",
    secondary: "SE",
  },

  cta: {
    label: "Discover Projects",
    href: "/our-projects",

    icon: {
      src: arrow,
      alt: "Arrow",
    },
  },
};