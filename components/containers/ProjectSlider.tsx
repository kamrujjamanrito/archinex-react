"use client";

import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import { projectSliderData } from "@/public/data/project-slider-data";
import one from "@/public/images/left-arrow.webp"
import two from "@/public/images/right-arrow.webp"

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProjectSlider() {
  return (
    <section className="project-slider fade-up">
      <div className="project-slider-navigation">
        <div className="slider-navigation">
          <button
            type="button"
            className="prev-project slider-btn"
            aria-label="Previous Slide"
          >
            <Image
              src={one}
              alt="Previous"

            />
          </button>

          <button
            type="button"
            className="next-project slider-btn"
            aria-label="Next Slide"
          >
            <Image
              src={two}
              alt="Next"
  
            />
          </button>
        </div>
      </div>

      <Swiper
        modules={[
          Navigation,
          Pagination,
          Autoplay,
          EffectFade,
        ]}
        className="project-main-slider"
        loop
        speed={2000}
        slidesPerView={1}
        slidesPerGroup={1}
        spaceBetween={0}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          prevEl: ".prev-project",
          nextEl: ".next-project",
        }}
        pagination={{
          el: ".project-slider-pagination",
          clickable: true,
        }}
      >
        {projectSliderData.slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="proect-slider-single overflow-hidden">
              <div className="project-slider-bg">
                <Image
                  src={slide.background}
                  alt={slide.backgroundAlt}
                  fill
                  priority={slide.id === 1}
                  sizes="100vw"
                />
              </div>

              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="project-slider__box bg-alt-2">
                      <div className="project-slider__intro">
                        <span className="text-uppercase fw-5">
                          {slide.badge}
                        </span>

                        <h2 className="elicyon title-animation title-lg-sm mt-12 fw-3">
                          {slide.title}
                        </h2>
                      </div>

                      <div className="project-slider__cta">
                        <Link href={slide.button.href}>
                          <Image
                            src={slide.button.icon}
                            alt={slide.button.iconAlt}
                          />

                          <span>{slide.button.label}</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="project-slider-pagination" />
    </section>
  );
}