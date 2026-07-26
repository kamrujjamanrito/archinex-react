"use client";
import Link from "next/link";
import { aboutTwoData } from "@/public/data/about-two-data";

const AboutIntro = () => {
  const { intro } = aboutTwoData;

  return (
    <>
      <div className="col-12 col-md-3">
        <p className="txt-light-4">{intro.subtitle}</p>
      </div>

      <div className="col-12 col-md-9">
        <div className="about-two__intro">
          <h2 className="title-animation title-lg-sm text-end fw-5 text-white">
            {intro.year}
          </h2>

          <h2 className="title-animation title-lg-sm fw-5 text-white">
            {intro.title}
          </h2>

          <p className="mt-40 txt-light-4 title-animation">
            {intro.description}
          </p>

          <div className="mt-60">
            <Link href={intro.button.href} className="btn-light-2">
              <span
                className="btn-animated-text"
                data-text={intro.button.label}
              >
                {intro.button.label}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutIntro;
