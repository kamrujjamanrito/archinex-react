import residentialIcon from "@/public/images/icons/residential.svg";
import commercialIcon from "@/public/images/icons/commercial.svg";
import hospitalityIcon from "@/public/images/icons/hospitality.svg";
import industrialIcon from "@/public/images/icons/industrial.svg";

import { ServiceOverviewItem } from "@/types/service-overview.types";

export const serviceOverviewData: ServiceOverviewItem[] = [
  {
    id: 1,
    image: residentialIcon,
    title: "Residential",
    description:
      "We'll also uncover new opportunities and potential limitations. Based on this method.",
  },
  {
    id: 2,
    image: commercialIcon,
    title: "Commercial",
    description:
      "Urban design and together the many strands of place-making social identity and more.",
  },
  {
    id: 3,
    image: hospitalityIcon,
    title: "Hospitality",
    description:
      "We crafts a series of creative design sketches to provide an initial concept to clients.",
    delay: 400,
  },
  {
    id: 4,
    image: industrialIcon,
    title: "Industrial",
    description:
      "What set us apart from the rest - our visionary goal curated perfection for our clients.",
    delay: 600,
  },
];
