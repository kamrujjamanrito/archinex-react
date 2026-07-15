import teamOne from "@/public/images/team/one.webp";
import teamTwo from "@/public/images/team/two.webp";
import teamThree from "@/public/images/team/three.webp";
import teamFour from "@/public/images/team/four.webp";

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

export interface TeamSectionData {
  intro: string;
  heading: string;
  description: string;
  button: {
    label: string;
    href: string;
  };
  members: TeamMember[];
}

export const teamData: TeamSectionData = {
  intro: "/ Our Architects",

  heading: "Team members",

  description:
    "Architectural design services provide for a variety of projects, from residential homes and commercial buildings to public spaces and infrastructure.",

  button: {
    label: "Team Members",
    href: "/our-team",
  },

  members: [
    {
      id: 1,
      name: "Alina Paetsch",
      designation: "Interior Architecture",
      href: "/our-team",
      image: {
        src: teamOne,
        alt: "Alina Paetsch",
      },
    },
    {
      id: 2,
      name: "Elina Krause",
      designation: "Web Developer",
      href: "/our-team",
      image: {
        src: teamTwo,
        alt: "Elina Krause",
      },
    },
    {
      id: 3,
      name: "Liana Berger",
      designation: "UI Designer",
      href: "/our-team",
      image: {
        src: teamThree,
        alt: "Liana Berger",
      },
    },
    {
      id: 4,
      name: "Nadia Richter",
      designation: "Interior Architecture",
      href: "/our-team",
      image: {
        src: teamFour,
        alt: "Nadia Richter",
      },
    },

    // duplicate items (matches original HTML)

    {
      id: 5,
      name: "Alina Paetsch",
      designation: "Interior Architecture",
      href: "/our-team",
      image: {
        src: teamOne,
        alt: "Alina Paetsch",
      },
    },
    {
      id: 6,
      name: "Elina Krause",
      designation: "Web Developer",
      href: "/our-team",
      image: {
        src: teamTwo,
        alt: "Elina Krause",
      },
    },
    {
      id: 7,
      name: "Liana Berger",
      designation: "UI Designer",
      href: "/our-team",
      image: {
        src: teamThree,
        alt: "Liana Berger",
      },
    },
    {
      id: 8,
      name: "Nadia Richter",
      designation: "Interior Architecture",
      href: "/our-team",
      image: {
        src: teamFour,
        alt: "Nadia Richter",
      },
    },
  ],
};