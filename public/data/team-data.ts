import type { StaticImageData } from "next/image";
import six from "@/public/images/team/six.webp";
import seven from "@/public/images/team/seven.webp";
import eight from "@/public/images/team/eight.webp";
import nine from "@/public/images/team/nine.webp";
import ten from "@/public/images/team/ten.webp";
import eleven from "@/public/images/team/eleven.webp";
import twelve from "@/public/images/team/twelve.webp";
import thirteen from "@/public/images/team/thirteen.webp";
import fourteen from "@/public/images/team/fourteen.webp";
import fifteen from "@/public/images/team/fifteen.webp";
import sixteen from "@/public/images/team/sixteen.webp";
import seventeen from "@/public/images/team/seventeen.webp";

export interface TeamMember {
  id: number;
  name: string;
  designation: string;
  image: StaticImageData;
  imageAlt: string;
  email: string;
  phone: string;
  profileLink: string;
  animationDelay?: number;
}

export const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Julian Mayo",
    designation: "Founder & Principal Architect",
    image: six,
    imageAlt: "Julian Mayo",
    email: "julian@archinex.com",
    phone: "+347 456 1379",
    profileLink: "/our-team",
  },

  {
    id: 2,
    name: "Bec O'Brien",
    designation: "Co-Founder & Designer",
    image: seven,
    imageAlt: "Bec O'Brien",
    email: "julian@archinex.com",
    phone: "+347 456 1379",
    profileLink: "/our-team",
    animationDelay: 200,
  },

  {
    id: 3,
    name: "Fanchon Bélanger",
    designation: "Interior Designer",
    image: eight,
    imageAlt: "Fanchon Bélanger",
    email: "julian@archinex.com",
    phone: "+347 456 1379",
    profileLink: "/our-team",
    animationDelay: 400,
  },

  {
    id: 4,
    name: "Michael Bennett",
    designation: "Creative Director",
    image: nine,
    imageAlt: "Michael Bennett",
    email: "julian@archinex.com",
    phone: "+347 456 1379",
    profileLink: "/our-team",
    animationDelay: 600,
  },

  {
    id: 5,
    name: "Halina Zając",
    designation: "Principal Architect",
    image: ten,
    imageAlt: "Halina Zając",
    email: "julian@archinex.com",
    phone: "+347 456 1379",
    profileLink: "/our-team",
    animationDelay: 200,
  },

  {
    id: 6,
    name: "David Brooks",
    designation: "Principal Architect",
    image: twelve,
    imageAlt: "David Brooks",
    email: "julian@archinex.com",
    phone: "+347 456 1379",
    profileLink: "/our-team",
    animationDelay: 400,
  },

  {
    id: 7,
    name: "Eric Dawson",
    designation: "Team Member",
    image: thirteen,
    imageAlt: "Eric Dawson",
    email: "julian@archinex.com",
    phone: "+347 456 1379",
    profileLink: "/our-team",
    animationDelay: 600,
  },

  {
    id: 8,
    name: "Sebastian Hayes",
    designation: "Founder Architect",
    image: eleven,
    imageAlt: "Sebastian Hayes",
    email: "julian@archinex.com",
    phone: "+347 456 1379",
    profileLink: "/our-team",
    animationDelay: 800,
  },

  {
    id: 9,
    name: "Dave Bickmore",
    designation: "Principal Architect",
    image: fourteen,
    imageAlt: "Dave Bickmore",
    email: "julian@archinex.com",
    phone: "+347 456 1379",
    profileLink: "/our-team",
    animationDelay: 200,
  },

  {
    id: 10,
    name: "Lesley Janny",
    designation: "Team Member",
    image: fifteen,
    imageAlt: "Lesley Janny",
    email: "julian@archinex.com",
    phone: "+347 456 1379",
    profileLink: "/our-team",
    animationDelay: 400,
  },

  {
    id: 11,
    name: "James Carter",
    designation: "Founder Architect",
    image: sixteen,
    imageAlt: "James Carter",
    email: "julian@archinex.com",
    phone: "+347 456 1379",
    profileLink: "/our-team",
    animationDelay: 600,
  },

  {
    id: 12,
    name: "Graham Charbonneau",
    designation: "Principal Designer",
    image: seventeen,
    imageAlt: "Graham Charbonneau",
    email: "julian@archinex.com",
    phone: "+347 456 1379",
    profileLink: "/our-team",
    animationDelay: 800,
  },
];
