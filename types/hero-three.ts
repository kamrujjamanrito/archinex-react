import type { StaticImageData } from "next/image";

export interface HeroThreeSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  background: StaticImageData;
}

export interface HeroThreeSocial {
  id: number;
  icon: string;
  href: string;
  label: string;
}

export interface HeroThreeData {
  slides: HeroThreeSlide[];
  socials: HeroThreeSocial[];
}
