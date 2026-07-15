import type { StaticImageData } from "next/image";

export interface TestimonialTwoItem {
  id: number;
  quote: string;

  author: {
    name: string;
    designation: string;
    image: StaticImageData;
    alt: string;
  };
}

export interface TestimonialTwoData {
  subtitle: string;
  title: string;

  testimonials: TestimonialTwoItem[];
}