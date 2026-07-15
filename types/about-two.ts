import type { StaticImageData } from "next/image";

export interface AboutTwoIntro {
  subtitle: string;
  year: string;
  title: string;
  description: string;

  button: {
    label: string;
    href: string;
  };
}

export interface AboutTwoLargeContent {
  title: string;
  description: string;

  button: {
    label: string;
    href: string;
  };
}

export interface AboutTwoImage {
  src: StaticImageData;
  alt: string;
}

export interface AboutTwoData {
  intro: AboutTwoIntro;

  images: {
    large: AboutTwoImage;
    smallOne: AboutTwoImage;
    smallTwo: AboutTwoImage;
  };

  content: AboutTwoLargeContent;
}