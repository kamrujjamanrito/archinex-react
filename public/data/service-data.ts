import type { StaticImageData } from "next/image";

import serviceThumb from "@/public/images/services/service-thumb.webp";
import five from "@/public/images/services/five.webp";
import six from "@/public/images/services/six.webp";
import seven from "@/public/images/services/seven.webp";
import eight from "@/public/images/services/eight.webp";
import nine from "@/public/images/services/nine.webp";
import ten from "@/public/images/services/ten.webp";
import eleven from "@/public/images/services/eleven.webp";

export interface ServiceItem {
  id: number;
  title: string;
  description: string;

  image: StaticImageData;
  imageAlt: string;

  href: string;

  tag: string;

  total: number;

  number: string;
}

export const serviceData: ServiceItem[] = [
  {
    id: 1,
    title: "Architectural Planning",
    description: "We work in existing and new building, sometimes temporary.",
    image: serviceThumb,
    imageAlt: "Architectural Planning",
    href: "service-details",
    tag: "DESIGN",
    total: 8,
    number: "01",
  },
  {
    id: 2,
    title: "Development",
    description: "We work in existing and new building, sometimes temporary.",
    image: five,
    imageAlt: "Development",
    href: "service-details",
    tag: "DESIGN",
    total: 8,
    number: "02",
  },
  {
    id: 3,
    title: "Interiors",
    description: "We work in existing and new building, sometimes temporary.",
    image: six,
    imageAlt: "Interiors",
    href: "service-details",
    tag: "DESIGN",
    total: 8,
    number: "03",
  },
  {
    id: 4,
    title: "Adaptive Renovation",
    description: "We work in existing and new building, sometimes temporary.",
    image: seven,
    imageAlt: "Adaptive Renovation",
    href: "service-details",
    tag: "DESIGN",
    total: 8,
    number: "04",
  },
  {
    id: 5,
    title: "Sustainable Design",
    description: "We work in existing and new building, sometimes temporary.",
    image: eight,
    imageAlt: "Sustainable Design",
    href: "service-details",
    tag: "DESIGN",
    total: 8,
    number: "05",
  },
  {
    id: 6,
    title: "Resident Architecture",
    description: "We work in existing and new building, sometimes temporary.",
    image: nine,
    imageAlt: "Resident Architecture",
    href: "service-details",
    tag: "DESIGN",
    total: 8,
    number: "06",
  },
  {
    id: 7,
    title: "Commercial Concept",
    description: "We work in existing and new building, sometimes temporary.",
    image: ten,
    imageAlt: "Commercial Concept",
    href: "service-details",
    tag: "DESIGN",
    total: 8,
    number: "07",
  },
  {
    id: 8,
    title: "Urban Planning",
    description: "We work in existing and new building, sometimes temporary.",
    image: eleven,
    imageAlt: "Urban Planning",
    href: "service-details",
    tag: "DESIGN",
    total: 8,
    number: "08",
  },
];
