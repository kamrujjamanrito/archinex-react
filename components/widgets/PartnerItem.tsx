import Image from "next/image";
import { PartnerItem as PartnerItemType } from "@/public/data/partner-data";

interface PartnerItemProps {
  item: PartnerItemType;
}

const PartnerItem = ({ item }: PartnerItemProps) => {
  return (
    <div className="partner__single">
      <Image src={item.image} alt={item.alt} />
    </div>
  );
};

export default PartnerItem;
