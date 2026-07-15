import { StaticImageData } from "next/image";
import location from "@/public/images/overview/location-icon.webp";
import interiorIcon from "@/public/images/overview/interior-icon.webp";
import interiorThumb from "@/public/images/overview/interior.webp";
import luxIcon from "@/public/images/overview/lux.webp";

export interface OverviewListItemType {
  id: number;
  number: string;
  lineOne: string[];
  lineTwo: string[];
  icon: StaticImageData;
}

export interface OverviewTabType {
  id: string;
  target: string;
  label: string;
  icon: StaticImageData;
  thumb: StaticImageData;
  heading: string;
  reverseLayout?: boolean;
  list: OverviewListItemType[];
}

const sharedList: OverviewListItemType[] = [
  {
    id: 1,
    number: "01",
    lineOne: ["LUXURIOUS", "& CONVENIENT"],
    lineTwo: ["LIVELY AND", "VIBRANT SPACE"],
    icon: luxIcon,
  },
  {
    id: 2,
    number: "02",
    lineOne: ["LUXURIOUS", "& CONVENIENT"],
    lineTwo: ["LIVELY AND", "VIBRANT SPACE"],
    icon: luxIcon,
  },
  {
    id: 3,
    number: "03",
    lineOne: ["LUXURIOUS", "& CONVENIENT"],
    lineTwo: ["LIVELY AND", "VIBRANT SPACE"],
    icon: luxIcon,
  },
  {
    id: 4,
    number: "04",
    lineOne: ["LUXURIOUS", "& CONVENIENT"],
    lineTwo: ["LIVELY AND", "VIBRANT SPACE"],
    icon: luxIcon,
  },
  {
    id: 5,
    number: "05",
    lineOne: ["LUXURIOUS", "& CONVENIENT"],
    lineTwo: ["LIVELY AND", "VIBRANT SPACE"],
    icon: luxIcon,
  },
];

export const overviewThreeTabs: OverviewTabType[] = [
  {
    id: "overviewLocation",
    target: "#overviewLocation",
    label: "Locations",
    icon: location,
    thumb: interiorThumb,
    heading: "Best Locations",
    list: sharedList,
  },
  {
    id: "overviewInterior",
    target: "#overviewInterior",
    label: "Interiors",
    icon: interiorIcon,
    thumb: interiorThumb,
    heading: "THE Interiors",
    reverseLayout: true,
    list: sharedList,
  },
];
