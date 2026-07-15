import { StaticImageData } from "next/image";

export interface ProcessSpecification {
  label: string;
  value: string;
}

export interface ProcessTabItem {
  id: number;
  number: string;
  button: string;
  title: string;
  specifications: ProcessSpecification[];
  image: StaticImageData;
}

export interface ProcessData {
  thumb: StaticImageData;

  subtitle: string;
  title: string;

  description: string;

  buttonText: string;
  buttonLink: string;

  tabs: ProcessTabItem[];
}
