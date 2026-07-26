import type { StaticImageData } from "next/image";

export interface ConceptProject {
  id: number;

  title: string;
  location: string;
  date: string;

  href: string;

  largeImage: {
    src: StaticImageData;
    alt: string;
  };

  smallImage: {
    src: StaticImageData;
    alt: string;
  };
}

export interface ConceptData {
  intro: string;

  heading: string;

  cta: {
    label: string;
    href: string;
  };

  projects: ConceptProject[];
}
