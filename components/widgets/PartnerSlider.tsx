import PartnerItem from "./PartnerItem";
import { partnerData } from "@/public/data/partner-data";

const PartnerSlider = () => {
  return (
    <div className="partner__slider">
      {partnerData.map((item) => (
        <PartnerItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default PartnerSlider;
