import processThumb from "@/public/images/process/thumb.webp";

import processOne from "@/public/images/process/one.webp";
import processTwo from "@/public/images/process/two.webp";
import processThree from "@/public/images/process/sm-thumb.webp";
import processFour from "@/public/images/process/three.webp";

import { ProcessData } from "@/types/process.types";

export const processData: ProcessData = {
  thumb: processThumb,

  subtitle: "Creative Approach",

  title:
    "We have brought a cohesive approach to residential and boutique commercial",

  description:
    "All plans are drawn at ¼” scale or larger and wifi included more.",

  buttonText: "Explore Our Projects",

  buttonLink: "/our-services",

  tabs: [
    {
      id: 1,
      number: "01.",
      button: "Sustainability",
      title: "Designing New Floor Plans",
      image: processOne,
      specifications: [
        {
          label: "Area size",
          value: "1766 sqft",
        },
        {
          label: "Bedroom",
          value: "3 (L), 2 (M)",
        },
        {
          label: "Garages",
          value: "824 sqft",
        },
        {
          label: "Secondary pitch",
          value: "3/12",
        },
      ],
    },

    {
      id: 2,
      number: "02.",
      button: "The Plan",
      title: "Creating Custom Layout Plans",
      image: processTwo,
      specifications: [
        {
          label: "Area size",
          value: "1766 sqft",
        },
        {
          label: "Bedroom",
          value: "3 (L), 2 (M)",
        },
        {
          label: "Garages",
          value: "824 sqft",
        },
        {
          label: "Secondary pitch",
          value: "3/12",
        },
      ],
    },

    {
      id: 3,
      number: "03.",
      button: "Our Process",
      title: "Developing Modern Space Concepts",
      image: processThree,
      specifications: [
        {
          label: "Area size",
          value: "1766 sqft",
        },
        {
          label: "Bedroom",
          value: "3 (L), 2 (M)",
        },
        {
          label: "Garages",
          value: "824 sqft",
        },
        {
          label: "Secondary pitch",
          value: "3/12",
        },
      ],
    },

    {
      id: 4,
      number: "04.",
      button: "Our Philosophy",
      title: "Crafting Innovative Floor Designs",
      image: processFour,
      specifications: [
        {
          label: "Area size",
          value: "1766 sqft",
        },
        {
          label: "Bedroom",
          value: "3 (L), 2 (M)",
        },
        {
          label: "Garages",
          value: "824 sqft",
        },
        {
          label: "Secondary pitch",
          value: "3/12",
        },
      ],
    },
  ],
};
