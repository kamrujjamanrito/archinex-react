import fieldOne from "@/public/images/field/one.webp";
import fieldTwo from "@/public/images/field/two.webp";
import fieldThree from "@/public/images/field/three.webp";
import fieldFour from "@/public/images/field/four.webp";
import fieldFive from "@/public/images/field/five.webp";
import fieldSix from "@/public/images/field/six.webp";

import type { FieldData } from "@/types/field";

export const fieldData: FieldData = {
  items: [
    {
      title: "Residential",
      href: "/our-services",

      image: {
        src: fieldOne,
        alt: "Residential",
      },
    },

    {
      title: "Innovative",
      href: "/our-services",

      image: {
        src: fieldTwo,
        alt: "Innovative",
      },
    },

    {
      title: "Exterior",
      href: "/our-services",

      image: {
        src: fieldThree,
        alt: "Exterior",
      },
    },

    {
      title: "Structural Craft",
      href: "/our-services",

      image: {
        src: fieldFour,
        alt: "Structural Craft",
      },
    },

    {
      title: "Urban",
      href: "/our-services",

      image: {
        src: fieldFive,
        alt: "Urban",
      },
    },

    {
      title: "Interior Design",
      href: "/our-services",

      image: {
        src: fieldSix,
        alt: "Interior Design",
      },
    },
  ],
};