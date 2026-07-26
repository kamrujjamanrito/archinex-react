"use client";
import Image from "next/image";
import { aboutTwoData } from "@/public/data/about-two-data";

const AboutLargeImage = () => {
  const { large } = aboutTwoData.images;

  return (
    <div className="about-two__thumb-lg-wrapper">
      <div
        className="thumb-lg scale-up hover-image"
        data-displacement="/images/fluid.webp"
        data-intensity="0.2"
        data-speedin="1"
        data-speedout="1"
      >
        <Image src={large.src} alt={large.alt} className="flip-img" priority />
      </div>
    </div>
  );
};

export default AboutLargeImage;
