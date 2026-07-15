import { AboutThreeData } from "@/types/about-three";

import aboutFour from "@/public/images/about/four.webp";
import aboutFive from "@/public/images/about/five.webp";
import arrowThree from "@/public/images/arrow-3.webp";

export const aboutThreeData: AboutThreeData = {
  heading: {
    before: "Where",
    highlights: ["refinement", "innovation", "craftsmanship", "architects"],
    after: "converge with our expert",
  },


  contacts: [
    {
      id: 1,
      title: "Contact",
      text: "info@archinx-design.com",
      href: "mailto:info@archinx-design.com",
    },
    {
      id: 2,
      title: "Location",
      text: "Kensington, Sweden",
      href: "https://share.google/VXsdMDrd6Z5UvhC7E",
      target: "_blank",
    },
  ],

  images: {
    large: aboutFour,
    small: aboutFive,
  },

  content: {
    buttonLink: "/about-us",
    buttonImage: arrowThree,

    paragraphOne:
      "Based in the heart of Sweden, we are specialize in crafting the most considered & imaginative crafts, interiors, supported by our 60-team members dedicated to delivering excellence.",

    paragraphTwo:
      "We pride ourselves on extraordinary precision and unrivalled commitment to every materials, design methodology, and consultancy.",
  },
};
