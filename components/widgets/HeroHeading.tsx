"use client";
import { useEffect } from "react";
import { heroTwoData } from "@/public/data/hero-two-data";
import { initAnimatedHeadline } from "@/animations/animatedHeadline";

const HeroHeading = () => {
  useEffect(() => {
    return initAnimatedHeadline();
  }, []);

  const { title } = heroTwoData.content;

  return (
    <div className="hero__heading neutral-top">
      <h2 className="title-lg fw-5 inter cd-headline clip">
        {title.brand}
        <br />
        {title.firstLine}{" "}
        <span className="fraunces italic fw-5 cfc dr">{title.separator}</span>{" "}
        <span className="cd-words-wrapper fraunces italic cfc fw-5">
          {title.words.map((word, index) => (
            <i
              key={word}
              className={`${index === 0 ? "is-visible" : "is-hidden"} fw-5`}
            >
              {word}
            </i>
          ))}
        </span>{" "}
        <br />
        {title.lastLine}
      </h2>
    </div>
  );
};

export default HeroHeading;
