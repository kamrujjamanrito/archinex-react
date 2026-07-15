import type { StaticImageData } from "next/image";

import three from "@/public/images/services/three.webp";
import four from "@/public/images/services/four-f.webp";
import five from "@/public/images/services/five-f.webp";
import six from "@/public/images/services/six-f.webp";

export interface ServiceFeature {
  id: number;
  title: string;
  href: string;
}

export interface ServiceFourItem {
  id: number;

  number: string;

  title: string;

  description: string;

  image: StaticImageData;

  imageAlt: string;

  href: string;

  detailsHref: string;

  features: ServiceFeature[];
}

export const serviceFourHeading = {
  subtitle: "+ Our Services",

  title: "We provide numbers of services, among which you can",

  highlight: "choose the one that'll help you to create dream spaces.",

  buttonText: "Discover Services",

  buttonHref: "/our-services",
};

export const serviceFourItems: ServiceFourItem[] = [
  {
    id: 1,
    number: "01",

    title: "Residential Design",

    href: "/service-details",

    detailsHref: "/service-details",

    image: three,

    imageAlt: "Residential Design",

    description:
      "Thanks to our specialists, we can create the design of your dream home for you, giving you the freedom to use your imagination and taking care of all the processes from estimates to construction.",

    features: [
      {
        id: 1,
        title: "Premium & Professional",
        href: "/our-services",
      },
      {
        id: 2,
        title: "Minimal Design",
        href: "/our-services",
      },
      {
        id: 3,
        title: "Best Sustainability",
        href: "/our-services",
      },
    ],
  },

  {
    id: 2,
    number: "02",

    title: "Commercial Design",

    href: "/service-details",

    detailsHref: "/service-details",

    image: four,

    imageAlt: "Commercial Design",

    description:
      "Thanks to our specialists, we can create the design of your dream home for you, giving you the freedom to use your imagination and taking care of all the processes from estimates to construction.",

    features: [
      {
        id: 1,
        title: "Premium & Professional",
        href: "/our-services",
      },
      {
        id: 2,
        title: "Minimal Design",
        href: "/our-services",
      },
      {
        id: 3,
        title: "Best Sustainability",
        href: "/our-services",
      },
    ],
  },

  {
    id: 3,
    number: "03",

    title: "Space Planning",

    href: "/service-details",

    detailsHref: "/service-details",

    image: five,

    imageAlt: "Space Planning",

    description:
      "Thanks to our specialists, we can create the design of your dream home for you, giving you the freedom to use your imagination and taking care of all the processes from estimates to construction.",

    features: [
      {
        id: 1,
        title: "Premium & Professional",
        href: "/our-services",
      },
      {
        id: 2,
        title: "Minimal Design",
        href: "/our-services",
      },
      {
        id: 3,
        title: "Best Sustainability",
        href: "/our-services",
      },
    ],
  },

  {
    id: 4,
    number: "04",

    title: "Consultation",

    href: "/service-details",

    detailsHref: "/service-details",

    image: six,

    imageAlt: "Consultation",

    description:
      "Thanks to our specialists, we can create the design of your dream home for you, giving you the freedom to use your imagination and taking care of all the processes from estimates to construction.",

    features: [
      {
        id: 1,
        title: "Premium & Professional",
        href: "/our-services",
      },
      {
        id: 2,
        title: "Minimal Design",
        href: "/our-services",
      },
      {
        id: 3,
        title: "Best Sustainability",
        href: "/our-services",
      },
    ],
  },
];
