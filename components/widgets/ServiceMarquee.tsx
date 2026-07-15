import Image from "next/image";

import flower from "@/public/images/flower.webp";

const MARQUEE_COUNT = 3;
const ITEM_COUNT = 3;

const ServiceMarquee = () => {
  return (
    <div className="service-marquee">
      <div className="service__marquee-inner">
        {Array.from({ length: MARQUEE_COUNT }).map((_, sliderIndex) => (
          <div className="service__slider" key={sliderIndex}>
            {Array.from({ length: ITEM_COUNT }).map((_, itemIndex) => (
              <div className="service__single" key={itemIndex}>
                <h2 className="title-xxl fraunces fw-4 italic">Our Services</h2>
                <Image src={flower} alt="Flower" sizes="64px" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceMarquee;
