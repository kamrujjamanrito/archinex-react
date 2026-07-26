import type { StaticImageData } from "next/image";
import newsFourImage from "@/public/images/news/four.webp";
import newsFiveImage from "@/public/images/news/five.webp";
import newsSixImage from "@/public/images/news/six.webp";

export interface NewsFourItem {
  id: number;
  image: StaticImageData;
  category: string;
  date: string;
  title: string;
  href: string;
  delay?: number;
}

export const newsFourData: NewsFourItem[] = [
  {
    id: 1,
    image: newsFourImage,
    category: "Bohemian",
    date: "Jun 12, 2026",
    title: "Boho style interior design to enhance your indoor and spaces",
    href: "/news-details",
  },
  {
    id: 2,
    image: newsFiveImage,
    category: "Bohemian",
    date: "Jun 12, 2026",
    title:
      "A beginner's guide to choose the right color scheme for your interior",
    href: "/news-details",
    delay: 200,
  },
  {
    id: 3,
    image: newsSixImage,
    category: "Bohemian",
    date: "Jun 12, 2026",
    title: "Creating a cozy and inviting living space: 10 tips for the startup",
    href: "/news-details",
    delay: 400,
  },
];
