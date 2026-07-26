import type { StaticImageData } from "next/image";
import one from "@/public/images/partners/one.webp";
import two from "@/public/images/partners/two.webp";
import three from "@/public/images/partners/three.webp";
import four from "@/public/images/partners/four.webp";
import five from "@/public/images/partners/five.webp";
import six from "@/public/images/partners/six.webp";

export interface PartnerItem {
  id: number;
  image: StaticImageData;
  alt: string;
}

export const partnerData: PartnerItem[] = [
  {
    id: 1,
    image: one,
    alt: "Partner One",
  },
  {
    id: 2,
    image: two,
    alt: "Partner Two",
  },
  {
    id: 3,
    image: three,
    alt: "Partner Three",
  },
  {
    id: 4,
    image: four,
    alt: "Partner Four",
  },
  {
    id: 5,
    image: five,
    alt: "Partner Five",
  },
  {
    id: 6,
    image: six,
    alt: "Partner Six",
  },
];
