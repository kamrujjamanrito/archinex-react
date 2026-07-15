import type { WorkTwoData } from "@/types/work-two";

import workEight from "@/public/images/work/eight.webp";
import workNine from "@/public/images/work/nine.webp";
import workTen from "@/public/images/work/ten.webp";
import workEleven from "@/public/images/work/eleven.webp";

export const workTwoData: WorkTwoData = {
  heading: {
    first: "Work",
    second: "Process",
  },

  cta: {
    text: "Bureau+",
    href: "/about-us",
  },

  items: [
    {
      id: 1,
      serial: "(01)",
      title: "Discovery",
      image: {
        src: workEight,
        alt: "Discovery",
      },
      description: {
        first:
          "Based in the heart of Sweden, Archinex is specialized in crafting the most considered designs.",
        second:
          "We begin each project with a series of in-depth workshops, charrettes, and conversations, identifying specific goals and constraints. These initial sessions play a critical role in laying the groundwork for lasting relationships that are the foundation of every successful project.",
      },
    },

    {
      id: 2,
      serial: "(02)",
      title: "Vision",
      image: {
        src: workNine,
        alt: "Vision",
      },
      description: {
        first:
          "Our vision transforms ideas into purposeful spaces through innovation, creativity, and thoughtful architectural planning.",
        second:
          "Every concept is refined with careful attention to detail, ensuring functionality and timeless aesthetics while maintaining close collaboration with our clients.",
      },
    },

    {
      id: 3,
      serial: "(03)",
      title: "Collaboration",
      image: {
        src: workTen,
        alt: "Collaboration",
      },
      description: {
        first:
          "Collaboration is at the heart of every successful project, bringing together designers, architects, and clients.",
        second:
          "Through continuous communication and transparent workflows, we create solutions that perfectly balance creativity, practicality, and project goals.",
      },
    },

    {
      id: 4,
      serial: "(04)",
      title: "Sustainability",
      image: {
        src: workEleven,
        alt: "Sustainability",
      },
      description: {
        first:
          "Sustainability guides every design decision we make, ensuring responsible and future-focused architecture.",
        second:
          "From material selection to energy-efficient planning, we create environments that respect nature while delivering exceptional long-term value.",
      },
    },
  ],
};
