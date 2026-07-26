import type { StaticImageData } from "next/image";

export interface TeamMember {
  id: number;

  name: string;

  designation: string;

  href: string;

  image: {
    src: StaticImageData;
    alt: string;
  };
}

export interface TeamData {
  intro: string;

  heading: string;

  description: string;

  cta: {
    label: string;
    href: string;
  };

  members: TeamMember[];
}
