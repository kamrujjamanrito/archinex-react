import type { StaticImageData } from "next/image";

export interface ProjectSliderItem {
  id: number;
  badge: string;
  title: string;

  background: StaticImageData;
  backgroundAlt: string;

  button: {
    label: string;
    href: string;
    icon: StaticImageData;
    iconAlt: string;
  };
}

export interface ProjectSliderData {
  slides: ProjectSliderItem[];
}
