import type { StaticImageData } from "next/image";

export interface ServiceTwoItem {
  id: number;

  subtitle: string;
  title: string;
  description: string;

  href: string;

  image: {
    src: StaticImageData;
    alt: string;
  };
}

export interface ServiceTwoData {
  sectionTitle: string;
  items: ServiceTwoItem[];
}