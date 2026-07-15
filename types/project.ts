import type { StaticImageData } from "next/image";

export interface ProjectHeader {
  title: {
    our: string;
    featured: string;
    projects: string;
  };

  description: {
    before: string;
    highlight: string;
    after: string;
  };

  button: {
    href: string;
    label: string;
  };
}

export interface ProjectItem {
  id: number;

  roman: string;

  title: string;

  projectName: string;
  projectLink: string;

  location: string;
  locationLink: string;

  year: string;

  category: string;
  categoryCount: string;
  categoryLink: string;

  image: StaticImageData;
  imageAlt: string;

  overlayTitle: string;
}

export interface ProjectData {
  header: ProjectHeader;
  projects: ProjectItem[];
}
