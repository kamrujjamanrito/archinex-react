import projectThree from "@/public/images/projects/three.webp";
import projectFour from "@/public/images/projects/four.webp";
import projectFive from "@/public/images/projects/five.webp";

import type { StaticImageData } from "next/image";

export interface ProjectFourItem {
  id: number;
  number: string;

  title: string;
  secondTitle: string;
  category: string;

  image: StaticImageData;

  location: string;
  locationUrl: string;

  date: string;

  detailsUrl: string;
}

export const projectFourSlides: ProjectFourItem[] = [
  {
    id: 1,
    number: "01",
    title: "Opera Music",
    secondTitle: "House",
    category: "Interior Design",
    image: projectThree,
    location: "Sydney, AU",
    locationUrl: "https://share.google/VXsdMDrd6Z5UvhC7E",
    date: "June, 2024",
    detailsUrl: "/project-details",
  },

  {
    id: 2,
    number: "02",
    title: "Modern Interior",
    secondTitle: "Studio",
    category: "Interior Design",
    image: projectFour,
    location: "Sydney, AU",
    locationUrl: "https://share.google/VXsdMDrd6Z5UvhC7E",
    date: "June, 2024",
    detailsUrl: "/project-details",
  },

  {
    id: 3,
    number: "03",
    title: "Opera Music",
    secondTitle: "House",
    category: "Interior Design",
    image: projectFive,
    location: "Sydney, AU",
    locationUrl: "https://share.google/VXsdMDrd6Z5UvhC7E",
    date: "June, 2024",
    detailsUrl: "/project-details",
  },

  {
    id: 4,
    number: "04",
    title: "Opera Music",
    secondTitle: "House",
    category: "Interior Design",
    image: projectThree,
    location: "Sydney, AU",
    locationUrl: "https://share.google/VXsdMDrd6Z5UvhC7E",
    date: "June, 2024",
    detailsUrl: "/project-details",
  },

  {
    id: 5,
    number: "05",
    title: "Modern Interior",
    secondTitle: "Studio",
    category: "Interior Design",
    image: projectFour,
    location: "Sydney, AU",
    locationUrl: "https://share.google/VXsdMDrd6Z5UvhC7E",
    date: "June, 2024",
    detailsUrl: "/project-details",
  },

  {
    id: 6,
    number: "06",
    title: "Opera Music",
    secondTitle: "House",
    category: "Interior Design",
    image: projectFive,
    location: "Sydney, AU",
    locationUrl: "https://share.google/VXsdMDrd6Z5UvhC7E",
    date: "June, 2024",
    detailsUrl: "/project-details",
  },
];
