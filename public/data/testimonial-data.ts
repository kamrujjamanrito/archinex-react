import type { StaticImageData } from "next/image";
import logo from "@/public/images/testimonial/dummy-logo.webp";

export interface TestimonialItem {
  id: number;
  quote: string;
  author: string;
  designation: string;
  logo: StaticImageData;
  logoAlt: string;
}

export const testimonialData: TestimonialItem[] = [
  {
    id: 1,
    quote:
      "Archinex transformed our ideas into refined architectural solutions with clarity and precision. A studio that balances creativity and functionality perfectly.",
    author: "Michael Anderson",
    designation: "Architect Civil",
    logo,
    logoAlt: "Company Logo",
  },

  {
    id: 2,
    quote:
      "Archinex shapes concepts into thoughtful architectural designs with elegance and detail. A studio where innovation meets function.",
    author: "Liam Thompson",
    designation: "Landscape Architect",
    logo,
    logoAlt: "Company Logo",
  },

  {
    id: 3,
    quote:
      "Archinex turns visions into sophisticated architectural solutions with focus and finesse. A studio that blends artistry and strategy.",
    author: "Sophia Martinez",
    designation: "Interior Designer",
    logo,
    logoAlt: "Company Logo",
  },
];
