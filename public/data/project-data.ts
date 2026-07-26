import type { StaticImageData } from "next/image";
import one from "@/public/images/work/one.webp";
import two from "@/public/images/work/two.webp";
import three from "@/public/images/work/three.webp";
import four from "@/public/images/work/four.webp";
import five from "@/public/images/work/five.webp";
import six from "@/public/images/work/six.webp";
import seven from "@/public/images/work/seven.webp";

export type ProjectGroup =
  | "projectWork"
  | "projectArchitecture"
  | "projectDesign";

export type ProjectCategory =
  | "Residential"
  | "Commercial"
  | "Hospitality"
  | "Industrial";

export type ProjectVariant =
  | "default"
  | "variant-one"
  | "variant-three"
  | "variant-four";

export type ProjectPosition = "default" | "work-mt" | "work-dr" | "right-auto";

export type ProjectLayout =
  | "layout-1"
  | "layout-2"
  | "layout-3"
  | "layout-4"
  | "layout-5";

export interface ProjectItem {
  id: number;

  group: ProjectGroup;

  category: ProjectCategory;

  order: number;

  title: string;

  image: StaticImageData;
  imageAlt: string;

  href: string;

  layout: ProjectLayout;

  variants?: readonly ProjectVariant[];

  position?: ProjectPosition;
}

/**
 * Base 7 cards.
 * These will automatically be duplicated
 * for every tab/category combination.
 */
const baseProjects = [
  {
    order: 1,
    title: "MODERN HAVEN, INTERIOR",
    image: one,
    imageAlt: "Modern Haven Interior",
    href: "/project-details",
    layout: "layout-1",
  },

  {
    order: 2,
    title: "CHIC RETREAT, INTERIOR",
    image: two,
    imageAlt: "Chic Retreat Interior",
    href: "/project-details",
    layout: "layout-1",
    variants: ["variant-one"],
  },

  {
    order: 3,
    title: "STYLISH ADOBE EXTERIOR",
    image: three,
    imageAlt: "Stylish Adobe Exterior",
    href: "/project-details",
    layout: "layout-2",
    position: "work-mt",
  },

  {
    order: 4,
    title: "MODERN NEST, BUILDING",
    image: four,
    imageAlt: "Modern Nest Building",
    href: "/project-details",
    layout: "layout-2",
    position: "work-dr",
  },

  {
    order: 5,
    title: "SLEEPLESS SPACE, INTERIOR",
    image: five,
    imageAlt: "Sleepless Space Interior",
    href: "/project-details",
    layout: "layout-3",
    variants: ["variant-three"],
    position: "work-mt",
  },

  {
    order: 6,
    title: "TRENDY INTERIOR, ARCHITECT",
    image: six,
    imageAlt: "Trendy Interior Architect",
    href: "/project-details",
    layout: "layout-4",
    variants: ["variant-one", "variant-four"],
  },

  {
    order: 7,
    title: "TRENDY SPACE, INTERIOR",
    image: seven,
    imageAlt: "Trendy Space Interior",
    href: "/project-details",
    layout: "layout-5",
    variants: ["variant-one"],
    position: "right-auto",
  },
] as const;

const groups: ProjectGroup[] = [
  "projectWork",
  "projectArchitecture",
  "projectDesign",
];

const categories: ProjectCategory[] = [
  "Residential",
  "Commercial",
  "Hospitality",
  "Industrial",
];

let id = 1;

export const projectData: ProjectItem[] = [];

groups.forEach((group) => {
  categories.forEach((category) => {
    baseProjects.forEach((project) => {
      projectData.push({
        id: id++,
        group,
        category,
        ...project,
      });
    });
  });
});
