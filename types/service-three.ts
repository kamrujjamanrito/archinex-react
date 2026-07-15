import type { StaticImageData } from "next/image";

export interface ServiceThreeImage {
  id: number;
  image: StaticImageData;
  alt: string;
}

export interface ServiceThreeItem {
  id: number;
  count: string;
  title: string;
  linkText: string;
  link: string;
  images: ServiceThreeImage[];
  active?: boolean;
}

export interface ServiceThreeCTA {
  link: string;
  linkText: string;

  heading: {
    before: string;
    bureau: string;
    middle: string;
    service: string;
    after: string;
    completion: string;
  };
}

export interface ServiceThreeData {
  title: string;
  services: ServiceThreeItem[];
  cta: ServiceThreeCTA;
}
