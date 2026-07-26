import type { StaticImageData } from "next/image";
import one from "@/public/images/work/one.webp";
import two from "@/public/images/work/two.webp";
import three from "@/public/images/work/three.webp";
import four from "@/public/images/work/four.webp";
import five from "@/public/images/work/five.webp";
import six from "@/public/images/work/six.webp";
import seven from "@/public/images/work/seven.webp";

export interface WorkItem {
  id: number;

  rowId: string;

  rowClass?: string;

  colClass: string;

  title: string;

  number: string;

  href: string;

  image: StaticImageData;

  imageAlt: string;

  imageFirst: boolean;

  cardClass?: string;

  arrowAlt: string;
}

export const workData: WorkItem[] = [
  {
    id: 1,
    rowId: "row-1",
    colClass: "col-12 col-md-4 col-xl-4 col-xxl-4",

    title: "MODERN HAVEN, INTERIOR",
    number: "(01)",
    href: "project-details",

    image: one,
    imageAlt: "Modern Haven Interior",

    imageFirst: true,

    arrowAlt: "View Modern Haven Interior",
  },

  {
    id: 2,
    rowId: "row-1",
    colClass: "col-12",

    title: "CHIC RETREAT, INTERIOR",
    number: "(02)",
    href: "project-details",

    image: two,
    imageAlt: "Chic Retreat Interior",

    imageFirst: false,

    cardClass: "work__variant-one",

    arrowAlt: "View Chic Retreat Interior",
  },

  {
    id: 3,
    rowId: "row-2",
    rowClass: "mt-100 gutter-40",

    colClass: "col-12 col-sm-6 col-xl-6",

    title: "STYLISH ADOBE EXTERIOR",
    number: "(03)",
    href: "project-details",

    image: three,
    imageAlt: "Stylish Adobe Exterior",

    imageFirst: true,

    cardClass: "work-mt",

    arrowAlt: "View Stylish Adobe Exterior",
  },

  {
    id: 4,
    rowId: "row-2",
    rowClass: "mt-100 gutter-40",

    colClass: "col-12 col-sm-6 col-xl-6",

    title: "MODERN NEST, BUILDING",
    number: "(04)",
    href: "project-details",

    image: four,
    imageAlt: "Modern Nest Building",

    imageFirst: true,

    cardClass: "work-dr",

    arrowAlt: "View Modern Nest Building",
  },

  {
    id: 5,
    rowId: "row-3",
    rowClass: "mt-100",

    colClass: "col-12 col-md-4 col-xl-6",

    title: "SLEEPLESS SPACE, INTERIOR",
    number: "(05)",
    href: "project-details",

    image: five,
    imageAlt: "Sleepless Space Interior",

    imageFirst: true,

    cardClass: "work-mt work__variant-three",

    arrowAlt: "View Sleepless Space Interior",
  },

  {
    id: 6,
    rowId: "row-4",
    rowClass: "mt-100",

    colClass: "col-12",

    title: "TRENDY INTERIOR, ARCHITECT",
    number: "(06)",
    href: "project-details",

    image: six,
    imageAlt: "Trendy Interior Architect",

    imageFirst: false,

    cardClass: "work__variant-one work__variant-four",

    arrowAlt: "View Trendy Interior Architect",
  },

  {
    id: 7,
    rowId: "row-5",
    rowClass: "mt-100",

    colClass: "col-12",

    title: "TRENDY SPACE, INTERIOR",
    number: "(07)",
    href: "project-details",

    image: seven,
    imageAlt: "Trendy Space Interior",

    imageFirst: true,

    cardClass: "work__variant-one right-auto",

    arrowAlt: "View Trendy Space Interior",
  },
];
