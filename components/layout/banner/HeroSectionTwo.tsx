"use client";

import { useEffect } from "react";
import Image from "next/image";

import { heroTwoData } from "@/public/data/hero-two-data";

import { initHeroTwo } from "@/animations/heroTwo";

import HeroHeading from "@/components/widgets/HeroHeading";
import HeroLanguage from "@/components/widgets/HeroLanguage";
import HeroCTA from "@/components/widgets/HeroCTA";

const HeroSectionTwo = () => {
  useEffect(() => {
    const cleanup = initHeroTwo();

    return cleanup;
  }, []);

  const { content } = heroTwoData;

  return (
    <section className="hero-two template-bg">
      <div className="container-lg">
        <div className="row gutter-20">
          <div className="col-12 col-xl-2">
            <div className="hero-two__intro">
              <p className="text-sm text-uppercase txt-light fw-5">
                {content.intro}
              </p>
            </div>
          </div>

          <div className="col-12 col-xl-9">
            <div className="hero-two__content">
              <HeroHeading />

              <div className="hero-two__thumb mt-80">
                <Image
                  src={content.image.src}
                  alt={content.image.alt}
                  className="flip-img"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-two__cta-wrapper d-none d-xl-flex">
        <HeroLanguage />
        <HeroCTA />
      </div>
    </section>
  );
};

export default HeroSectionTwo;