import { StaticImageData } from "next/image";

export interface ProjectInfoItem {
  label: string;
  value: string;
}

export interface ProjectGalleryItem {
  image: StaticImageData;
  title?: string;
  description?: string[];
}

export interface ProjectCounterItem {
  title: string;
  value: number;
  suffix?: string;
}

export interface ProjectDetailsData {
  mapLink: string;
  intro: string;

  info: ProjectInfoItem[];

  gallery: ProjectGalleryItem[];

  counters: ProjectCounterItem[];
}
