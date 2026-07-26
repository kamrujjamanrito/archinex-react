"use client";
import Link from "next/link";
import { aboutTwoData } from "@/public/data/about-two-data";

const AboutLargeContent = () => {
  const { content } = aboutTwoData;

  return (
    <div className="thumb-lg-content mt-140">
      <h3 className="title-lg-sm title-animation fw-5 text-white">
        {content.title}
      </h3>

      <p className="txt-light-4 title-animation mt-40">{content.description}</p>

      <div className="mt-60 fade-up">
        <Link href={content.button.href} className="btn-quaternary">
          <span className="btn-animated-text" data-text={content.button.label}>
            {content.button.label}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default AboutLargeContent;
