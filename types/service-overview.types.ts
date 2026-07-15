import { StaticImageData } from "next/image";

export interface ServiceOverviewItem {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
  delay?: number;
}
