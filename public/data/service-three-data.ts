import type { ServiceThreeData } from "@/types/service-three";

import serviceOne from "@/public/images/service-three/one.webp";
import serviceTwo from "@/public/images/service-three/two.webp";
import serviceThree from "@/public/images/service-three/three.webp";
import serviceFour from "@/public/images/service-three/four.webp";
import serviceFive from "@/public/images/service-three/five.webp";
import serviceSix from "@/public/images/service-three/six.webp";

export const serviceThreeData: ServiceThreeData = {
  title: "OUR Services",

  services: [
    {
      id: 1,
      count: "I.",
      title: "Interior",
      linkText: "INTERIOR DESIGN",
      link: "/our-projects",
      images: [
        {
          id: 1,
          image: serviceOne,
          alt: "Interior Design",
        },
        {
          id: 2,
          image: serviceTwo,
          alt: "Interior Design",
        },
      ],
    },

    {
      id: 2,
      count: "II.",
      title: "Architecture",
      linkText: "Architecture",
      link: "/our-projects",
      active: true,
      images: [
        {
          id: 1,
          image: serviceThree,
          alt: "Architecture",
        },
        {
          id: 2,
          image: serviceFour,
          alt: "Architecture",
        },
      ],
    },

    {
      id: 3,
      count: "III.",
      title: "Residential",
      linkText: "Residential",
      link: "/our-projects",
      images: [
        {
          id: 1,
          image: serviceFive,
          alt: "Residential",
        },
        {
          id: 2,
          image: serviceSix,
          alt: "Residential",
        },
      ],
    },
  ],

  cta: {
    link: "/our-services",
    linkText: "Explore Services",

    heading: {
      before: "Archinex",
      bureau: "(bureau)",
      middle: "expert in every steps of our",
      service: "Service",
      after: "and process from design to",
      completion: "Completion",
    },
  },
};
