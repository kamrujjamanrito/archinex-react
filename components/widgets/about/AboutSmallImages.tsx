"use client";
import Image from "next/image";
import { aboutTwoData } from "@/public/data/about-two-data";

const AboutSmallImages = () => {
  const { smallOne, smallTwo } = aboutTwoData.images;

  return (
    <div className="about-two__thumb-sm-wrapper">
      <div
        className="thumb-sm scale-up hover-image"
        data-displacement="/images/fluid.webp"
        data-intensity="0.2"
        data-speedin="1"
        data-speedout="1"
      >
        <Image src={smallOne.src} alt={smallOne.alt} className="flip-img" />
      </div>

      <div
        className="thumb-sm-two mt-30 text-center scale-up hover-image"
        data-displacement="/images/fluid.webp"
        data-intensity="0.2"
        data-speedin="1"
        data-speedout="1"
      >
        <Image src={smallTwo.src} alt={smallTwo.alt} className="flip-img" />
      </div>
    </div>
  );
};

export default AboutSmallImages;
