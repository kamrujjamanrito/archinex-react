import type { StaticImageData } from "next/image";

export interface AboutThreeContact {
  id: number;
  title: string;
  text: string;
  href: string;
  target?: "_blank";
}

export interface AboutThreeContent {
  paragraphOne: string;
  paragraphTwo: string;
  buttonLink: string;
  buttonImage: StaticImageData;
}

export interface AboutThreeData {
  heading: {
    before: string;
    highlights: string[];
    after: string;
  };

  contacts: AboutThreeContact[];

  images: {
    large: StaticImageData;
    small: StaticImageData;
  };

  content: AboutThreeContent;
}
