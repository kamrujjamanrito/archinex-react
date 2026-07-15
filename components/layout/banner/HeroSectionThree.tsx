"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import { gsap } from "@/lib/gsap";
import { heroThreeData } from "@/public/data/hero-three-data";

import "swiper/swiper-bundle.css";

const toRoman = (num: number) => {
  const roman = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  let result = "";

  roman.forEach((item) => {
    while (num >= item.value) {
      result += item.symbol;
      num -= item.value;
    }
  });

  return result;
};

export default function HeroSectionThree() {
  const [activeIndex, setActiveIndex] = useState(0);

  const backgrounds = useRef<HTMLDivElement>(null);

  const animateBackground = (index: number) => {
    if (!backgrounds.current) return;

    const images = backgrounds.current.querySelectorAll("img");

    images.forEach((img, i) => {
      if (i === index) {
        img.classList.add("active-bg");

        gsap.killTweensOf(img);

        gsap.fromTo(
          img,
          {
            scale: 1,
          },
          {
            scale: 1.05,
            duration: 6,
            ease: "power1.out",
          },
        );
      } else {
        img.classList.remove("active-bg");

        gsap.killTweensOf(img);

        gsap.set(img, {
          scale: 1,
        });
      }
    });
  };

  const pagination = useMemo(
    () => ({
      el: ".hero-three-pagination",
      clickable: true,
      renderBullet(index: number, className: string) {
        return `<span class="${className}">(${toRoman(index + 1)})</span>`;
      },
    }),
    [],
  );

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
    animateBackground(swiper.realIndex);
  };

  return (
    <section className="hero-three pb-140">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="hero-three__content">
              <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                className="hero-three-slider"
                slidesPerView={1}
                loop
                speed={1000}
                effect="fade"
                fadeEffect={{
                  crossFade: true,
                }}
                autoplay={{
                  delay: 6000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: ".next-hero",
                  prevEl: ".prev-hero",
                }}
                pagination={pagination}
                onInit={(swiper) => {
                  setActiveIndex(swiper.realIndex);
                  animateBackground(swiper.realIndex);
                }}
                onSlideChange={handleSlideChange}
              >
                {heroThreeData.slides.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <div className="hero-three__single">
                      <h2 className="title-lg elicyon txt-light-fix">
                        {slide.title}
                      </h2>

                      <h3 className="title-lg-sm fw-3 txt-light-fix">
                        {slide.subtitle}
                      </h3>

                      <p className="txt-light-fix mt-60">{slide.description}</p>

                      <div className="hero-three__cta">
                        <Link href={slide.buttonLink} className="btn-quinary">
                          <span
                            className="btn-animated-text"
                            data-text={slide.buttonText}
                          >
                            {slide.buttonText}
                          </span>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="slider-navigation">
                <button
                  className="prev-hero"
                  type="button"
                  aria-label="Previous Slide"
                >
                  <i className="ph ph-arrow-up-left" />
                </button>

                <button
                  className="next-hero"
                  type="button"
                  aria-label="Next Slide"
                >
                  <i className="ph ph-arrow-down-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-three-pagination" />

      <Link href="#scrollDown" className="scroll-down">
        Scroll Down
      </Link>

      <div className="social mt-35">
        {heroThreeData.socials.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            target="_blank"
            aria-label={item.label}
            title={item.label}
          >
            <i className={item.icon} />
          </Link>
        ))}
      </div>

      <div className="hero-three-bg" ref={backgrounds}>
        {heroThreeData.slides.map((slide, index) => (
          <Image
            key={slide.id}
            src={slide.background}
            alt={slide.title}
            priority={index === 0}
            className={index === activeIndex ? "active-bg" : ""}
          />
        ))}
      </div>

      <div className="lines-cr">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="line-cr" />
        ))}
      </div>
    </section>
  );
}
