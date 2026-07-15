import type { ConceptData } from "@/types/concept";

import thumbLg from "@/public/images/concept/thumb-lg.webp";

import thumbSmOne from "@/public/images/concept/thumb-sm.webp";
import thumbSmTwo from "@/public/images/concept/thumb-sm-two.webp";
import thumbSmThree from "@/public/images/concept/thumb-sm-three.webp";
import thumbSmFour from "@/public/images/concept/thumb-sm-four.webp";

export const conceptData: ConceptData = {
  intro: "/ Our Works",

  heading:
    "Creating concepts to final details — we bring dream home to life.",

  cta: {
    label: "Discover All",
    href: "/our-projects",
  },

  projects: [
    {
      id: 1,

      title: "The Coastal House",
      location: "Melbourne, Australia",
      date: "March 12, 2025",

      href: "/project-details",

      largeImage: {
        src: thumbLg,
        alt: "The Coastal House",
      },

      smallImage: {
        src: thumbSmOne,
        alt: "The Coastal House",
      },
    },

    {
      id: 2,

      title: "Warren House",
      location: "Toronto, Canada",
      date: "March 12, 2025",

      href: "/project-details",

      largeImage: {
        src: thumbLg,
        alt: "Warren House",
      },

      smallImage: {
        src: thumbSmTwo,
        alt: "Warren House",
      },
    },

    {
      id: 3,

      title: "Hargrave Terrace",
      location: "London, United Kingdom",
      date: "March 12, 2025",

      href: "/project-details",

      largeImage: {
        src: thumbLg,
        alt: "Hargrave Terrace",
      },

      smallImage: {
        src: thumbSmThree,
        alt: "Hargrave Terrace",
      },
    },

    {
      id: 4,

      title: "Riverview Avalone",
      location: "New York, United States",
      date: "March 12, 2025",

      href: "/project-details",

      largeImage: {
        src: thumbLg,
        alt: "Riverview Avalone",
      },

      smallImage: {
        src: thumbSmFour,
        alt: "Riverview Avalone",
      },
    },
  ],
};