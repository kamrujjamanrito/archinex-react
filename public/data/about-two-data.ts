import aboutOne from "@/public/images/about/one.webp";
import aboutTwo from "@/public/images/about/two.webp";
import aboutThree from "@/public/images/about/three.webp";
import type { AboutTwoData } from "@/types/about-two";

export const aboutTwoData: AboutTwoData = {
  intro: {
    subtitle: "/ About Studio",

    year: "Since 1996",

    title: "Building new standards of excellence.",

    description:
      "We craft sleek, timeless architectural experience that blend innovation, functionality, and aesthetics. From concept to execution, we bring visions to life with precision and creative architectural designs.",

    button: {
      label: "About Archinex",
      href: "/about-us",
    },
  },

  images: {
    large: {
      src: aboutOne,
      alt: "About Archinex",
    },

    smallOne: {
      src: aboutTwo,
      alt: "About Archinex",
    },

    smallTwo: {
      src: aboutThree,
      alt: "About Archinex",
    },
  },

  content: {
    title: "Archinex builds Houses — Buildings everyone would like to live in.",

    description:
      "We take visionary approach to sales and marketing of real estate development, delivering exceptional result. Our deep knowledge - access to cutting edge research set us apart in the industry.",

    button: {
      label: "Get In Touch",
      href: "/contact-us",
    },
  },
};
