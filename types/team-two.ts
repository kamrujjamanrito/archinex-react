import type { StaticImageData } from "next/image";

export interface TeamTwoMember {
  id: number;

  serial: string;

  name: string;

  designation: string;

  image: StaticImageData;

  imageAlt: string;

  active?: boolean;
}

export interface TeamTwoIntro {
  topText: string;

  title: {
    first: string;
    second: string;
  };
}

export interface TeamTwoCTA {
  href: string;

  label: string;
}

export interface TeamTwoData {
  intro: TeamTwoIntro;

  members: TeamTwoMember[];

  cta: TeamTwoCTA;
}
