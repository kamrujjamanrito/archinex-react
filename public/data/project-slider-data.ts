import type { ProjectSliderData } from "@/types/project-slider";

import arrowIcon from "@/public/images/arrow-4.webp";

import bgOne from "@/public/images/projects/dp-one.webp";
import bgTwo from "@/public/images/projects/dp-two.webp";
import bgThree from "@/public/images/projects/dp-three.webp";
import bgFour from "@/public/images/projects/dp-four.webp";
import bgFive from "@/public/images/projects/dp-five.webp";

export const projectSliderData: ProjectSliderData = {
  slides: [
    {
      id: 1,
      badge: "THE OPEN STUDIO",
      title: "Crafted Silver Brick",

      background: bgOne,
      backgroundAlt: "Crafted Silver Brick",

      button: {
        label: "Our Products",
        href: "/project-details",
        icon: arrowIcon,
        iconAlt: "Arrow",
      },
    },

    {
      id: 2,
      badge: "THE CREATIVE LAB",
      title: "Refined Marble",

      background: bgTwo,
      backgroundAlt: "Refined Marble",

      button: {
        label: "Our Products",
        href: "/project-details",
        icon: arrowIcon,
        iconAlt: "Arrow",
      },
    },

    {
      id: 3,
      badge: "SCULPTED BRONZE",
      title: "Crafted Silver",

      background: bgThree,
      backgroundAlt: "Crafted Silver",

      button: {
        label: "Our Products",
        href: "/project-details",
        icon: arrowIcon,
        iconAlt: "Arrow",
      },
    },

    {
      id: 4,
      badge: "THE IDEA WORKSHOP",
      title: "Forged Ivory Block",

      background: bgFour,
      backgroundAlt: "Forged Ivory Block",

      button: {
        label: "Our Products",
        href: "/project-details",
        icon: arrowIcon,
        iconAlt: "Arrow",
      },
    },

    {
      id: 5,
      badge: "THE MAKER STUDIO",
      title: "Polished Golden",

      background: bgFive,
      backgroundAlt: "Polished Golden",

      button: {
        label: "Our Products",
        href: "/project-details",
        icon: arrowIcon,
        iconAlt: "Arrow",
      },
    },
  ],
};
