import type { StaticImageData } from "next/image";

export interface WorkProcessItem {
  id: number;
  serial: string;
  title: string;

  image: {
    src: StaticImageData;
    alt: string;
  };

  description: {
    first: string;
    second: string;
  };
}

export interface WorkTwoCTA {
  text: string;
  href: string;
}

export interface WorkTwoData {
  heading: {
    first: string;
    second: string;
  };

  cta: WorkTwoCTA;

  items: WorkProcessItem[];
}
