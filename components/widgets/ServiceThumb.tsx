import Image from "next/image";

import { ServiceItem } from "@/public/data/service-data";

interface ServiceThumbProps {
  item: ServiceItem;
  isActive?: boolean;
}

const ServiceThumb = ({ item, isActive = false }: ServiceThumbProps) => {
  return (
    <div className={`service__thumb-single${isActive ? " active" : ""}`}>
      <Image
        src={item.image}
        alt={item.imageAlt}
        sizes="(max-width: 1199px) 100vw, 25vw"
      />
    </div>
  );
};

export default ServiceThumb;
