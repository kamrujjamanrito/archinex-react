import type { StaticImageData } from "next/image";
import flowerImage from "@/public/images/flower.webp";

export interface MarqueeItem {
  id: number;
  title: string;
  href: string;
  image: StaticImageData;
}

export const marqueeItems: MarqueeItem[] = [
  {
    id: 1,
    title: "Let's Get Started",
    href: "/contact-us",
    image: flowerImage,
  },
  {
    id: 2,
    title: "Let's Get Started",
    href: "/contact-us",
    image: flowerImage,
  },
  {
    id: 3,
    title: "Let's Get Started",
    href: "/contact-us",
    image: flowerImage,
  },
];
