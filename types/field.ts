import type { StaticImageData } from "next/image";

export interface FieldItem {
  title: string;
  href: string;

  image: {
    src: StaticImageData;
    alt: string;
  };
}

export interface FieldData {
  items: FieldItem[];
}