"use client";
import Image from "next/image";
import { serviceTwoData } from "@/public/data/service-two-data";

const ServiceTwoThumbs = () => {
  const { items } = serviceTwoData;

  return (
    <div className="service-two__thumb-wrapper fade-up">
      <div className="service-two__thumbs">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`service-two__thumb-single hover-image ${
              index === 0 ? "active" : ""
            }`}
            data-displacement="/images/fluid.webp"
            data-intensity="0.2"
            data-speedin="1"
            data-speedout="1"
          >
            <Image
              src={item.image.src}
              alt={item.image.alt}
              className="flip-img"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceTwoThumbs;
