import type { StaticImageData } from "next/image";

export interface HeroTwoContent {
  intro: string;

  title: {
    brand: string;
    firstLine: string;
    separator: string;
    words: string[];
    lastLine: string;
  };

  image: {
    src: StaticImageData;
    alt: string;
  };
}

export interface HeroTwoLanguage {
  primary: string;
  secondary: string;
}

export interface HeroTwoCTA {
  label: string;
  href: string;

  icon: {
    src: StaticImageData;
    alt: string;
  };
}

export interface HeroTwoData {
  content: HeroTwoContent;
  language: HeroTwoLanguage;
  cta: HeroTwoCTA;
}
