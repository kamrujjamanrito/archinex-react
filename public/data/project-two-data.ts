import projectOne from "@/public/images/projects/cp-one.webp";
import projectTwo from "@/public/images/projects/cp-two.webp";
import projectThree from "@/public/images/projects/cp-three.webp";
import projectFour from "@/public/images/projects/cp-four.webp";
import projectFive from "@/public/images/projects/cp-five.webp";
import type { ProjectData } from "@/types/project";

export const projectData: ProjectData = {
  header: {
    title: {
      our: "OUR",
      featured: "Featured",
      projects: "Projects",
    },

    description: {
      before: "Story telling through design - curated featured ",
      highlight: "100+",
      after: " projects all over world.",
    },

    button: {
      href: "/our-services",
      label: "Discover Projects",
    },
  },

  projects: [
    {
      id: 1,
      roman: "(I)",

      title: "Elevate",

      projectName: "ALFRESCO APARTMENT",
      projectLink: "/project-details",

      location: "Manhattan Beach, CA",
      locationLink: "https://share.google/VXsdMDrd6Z5UvhC7E",

      year: "2024",

      category: "View House",
      categoryCount: "09",
      categoryLink: "/our-projects",

      image: projectOne,
      imageAlt: "Alfresco Apartment",

      overlayTitle: "Elevate",
    },

    {
      id: 2,
      roman: "(II)",

      title: "Imagine",

      projectName: "AGarden Pavilion",
      projectLink: "/project-details",

      location: "Causeway Bay, HK",
      locationLink: "https://share.google/VXsdMDrd6Z5UvhC7E",

      year: "2023",

      category: "View Public",
      categoryCount: "12",
      categoryLink: "/our-projects",

      image: projectTwo,
      imageAlt: "Garden Pavilion",

      overlayTitle: "Imagine",
    },

    {
      id: 3,
      roman: "(III)",

      title: "Harvest",

      projectName: "The Parlous Room",
      projectLink: "/project-details",

      location: "Chelsea, UK",
      locationLink: "https://share.google/VXsdMDrd6Z5UvhC7E",

      year: "2021",

      category: "View Development",
      categoryCount: "16",
      categoryLink: "/our-projects",

      image: projectThree,
      imageAlt: "The Parlous Room",

      overlayTitle: "Harvest",
    },

    {
      id: 4,
      roman: "(IV)",

      title: "Journey",

      projectName: "West End Display",
      projectLink: "/project-details",

      location: "Monaco, FR",
      locationLink: "https://share.google/VXsdMDrd6Z5UvhC7E",

      year: "2019",

      category: "View Commercial",
      categoryCount: "06",
      categoryLink: "/our-projects",

      image: projectFour,
      imageAlt: "West End Display",

      overlayTitle: "Journey",
    },

    {
      id: 5,
      roman: "(V)",

      title: "Venture",

      projectName: "Dopa Wooden Chase",
      projectLink: "/project-details",

      location: "Dubai, UAE",
      locationLink: "https://share.google/VXsdMDrd6Z5UvhC7E",

      year: "2017",

      category: "View Arts",
      categoryCount: "27",
      categoryLink: "/our-projects",

      image: projectFive,
      imageAlt: "Dopa Wooden Chase",

      overlayTitle: "Venture",
    },
  ],
};
