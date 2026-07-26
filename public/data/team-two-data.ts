import type { TeamTwoData } from "@/types/team-two";
import teamOne from "@/public/images/team/tm-one.webp";
import teamTwo from "@/public/images/team/five.webp";
import teamThree from "@/public/images/team/tm-two.webp";
import teamFour from "@/public/images/team/tm-three.webp";
import teamFive from "@/public/images/team/tm-four.webp";
import teamSix from "@/public/images/team/tm-five.webp";
import teamSeven from "@/public/images/team/tm-six.webp";
import teamEight from "@/public/images/team/tm-seven.webp";
import teamNine from "@/public/images/team/tm-eight.webp";
import teamTen from "@/public/images/team/tm-nine.webp";

export const teamTwoData: TeamTwoData = {
  intro: {
    topText: "Archinex have the most",
    title: {
      first: "CREATIVE+",
      second: "talented MINDS",
    },
  },

  members: [
    {
      id: 1,
      serial: "(01)",
      name: "Amanda Willson",
      designation: "Co-Founder, Director",
      image: teamOne,
      imageAlt: "Amanda Willson",
      active: true,
    },

    {
      id: 2,
      serial: "(02)",
      name: "Mike Anderson",
      designation: "Co-Founder, Director",
      image: teamTwo,
      imageAlt: "Mike Anderson",
    },

    {
      id: 3,
      serial: "(03)",
      name: "Robert Nelson",
      designation: "Co-Founder, Director",
      image: teamThree,
      imageAlt: "Robert Nelson",
    },

    {
      id: 4,
      serial: "(04)",
      name: "David Etam",
      designation: "Co-Founder, Director",
      image: teamFour,
      imageAlt: "David Etam",
    },

    {
      id: 5,
      serial: "(05)",
      name: "Sophie Brown",
      designation: "Co-Founder, Director",
      image: teamFive,
      imageAlt: "Sophie Brown",
    },

    {
      id: 6,
      serial: "(06)",
      name: "Daniel Rivera",
      designation: "Co-Founder, Director",
      image: teamSix,
      imageAlt: "Daniel Rivera",
    },

    {
      id: 7,
      serial: "(07)",
      name: "Charlie Hooper",
      designation: "Co-Founder, Director",
      image: teamSeven,
      imageAlt: "Charlie Hooper",
    },

    {
      id: 8,
      serial: "(08)",
      name: "Meera Grey",
      designation: "Co-Founder, Director",
      image: teamEight,
      imageAlt: "Meera Grey",
    },

    {
      id: 9,
      serial: "(09)",
      name: "Fanchon Bélanger",
      designation: "Co-Founder, Director",
      image: teamNine,
      imageAlt: "Fanchon Bélanger",
    },

    {
      id: 10,
      serial: "(10)",
      name: "Halina Udinesi",
      designation: "Co-Founder, Director",
      image: teamTen,
      imageAlt: "Halina Udinesi",
    },
  ],

  cta: {
    href: "/our-team",
    label: "All Members",
  },
};
