import { StaticImageData } from "next/image";

export interface ProcessItem {
  step: string;
  tabTitle: string;
  title: string;
  image: string | StaticImageData;
  details: {
    label: string;
    value: string;
  }[];
}

export const processData: ProcessItem[] = [
  {
    step: "01.",
    tabTitle: "Sustainability",
    title: "Designing New Floor Plans",
    image: "/images/process/one.webp",
    details: [
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
    step: "02.",
    tabTitle: "The Plan",
    title: "Creating Custom Layout Plans",
    image: "/images/process/two.webp",
    details: [
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
    step: "03.",
    tabTitle: "Our Process",
    title: "Developing Modern Space Concepts",
    image: "/images/process/sm-thumb.webp",
    details: [
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
    step: "04.",
    tabTitle: "Our Philosophy",
    title: "Crafting Innovative Floor Designs",
    image: "/images/process/three.webp",
    details: [
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
];
