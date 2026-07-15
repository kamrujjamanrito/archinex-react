"use client";

import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { projectFourSlides } from "@/public/data/project-four-data";

import one from "@/public/images/plus.webp";

const autoplayDelay = 5000;

const ProjectFour = () => {
  const progressRef = useRef<HTMLDivElement>(null);

  const handleAutoplayTimeLeft = (
    _swiper: SwiperType,
    _timeLeft: number,
    progress: number,
  ) => {
    const el = progressRef.current;
    if (!el) return;

    // progress goes from 1 -> 0 as the autoplay timer counts down,
    // so fill width should be the inverse of that.
    el.style.transition = "none";
    el.style.width = `${(1 - progress) * 100}%`;
  };

  return (
    <section className="project-four pt-140 pb-140">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="project-four__inner mb-80 text-center">
              <span className="text-white text-uppercase">
                <Image src={one} alt="Image" />
                Featured Projects
              </span>
              <h2 className="title-sm title-animation-color fw-5 text-white text-center mt-30">
                Blending Innovative designs with
                <span className="fraunces fw-4 italic">
                  timeless craft to shape spaces that inspire and last
                </span>
              </h2>
              <span className="divide-cs mt-40"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="project-four__slider-wrapper">
        <div className="project-four-slider swiper">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            speed={1200}
            slidesPerView="auto"
            slidesPerGroup={1}
            spaceBetween={24}
            grabCursor={true}
            centeredSlides={true}
            autoplay={{
              delay: autoplayDelay,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              992: {
                spaceBetween: 40,
              },
              1400: {
                spaceBetween: 80,
              },
            }}
            onAutoplayTimeLeft={handleAutoplayTimeLeft}
          >
            {projectFourSlides.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="project-four-slider__single">
                  <div className="thumb-wrapper">
                    <div className="thumb drag-cursor">
                      <Image src={item.image} alt="Image" />
                    </div>
                    <div className="project-four-meta">
                      <div className="project-four-meta__single">
                        <p className="fw-5">
                          <Link href={item.locationUrl} target="_blank">
                            {item.location}
                          </Link>
                        </p>
                      </div>
                      <div className="project-four-meta__single d-none d-md-block">
                        <p className="fw-5">{item.date}</p>
                      </div>
                      <div className="project-four-meta__single">
                        <p className="fw-5">
                          <Link href={item.detailsUrl}>View Details</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-wrapper">
                    <span className="title-sm fraunces italic">01 /</span>
                    <div className="content-inner mt-140">
                      <div className="content-left">
                        <h2 className="title-lg fw-5">
                          <Link href="project-details">
                            {item.title}
                            <br />
                            {item.secondTitle}
                            <i className="ph-thin ph-arrow-up-right"></i>
                          </Link>
                        </h2>
                      </div>
                      <div className="content-right">
                        <p>{item.category}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="slider-progress mt-80">
              <div className="slider-progress-fill" ref={progressRef}></div>
            </div>
            <div className="mt-60 project-four-cta-bottom text-end">
              <Link href="our-projects" className="btn-secondary">
                <span
                  className="btn-animated-text"
                  data-text="Discover Portfolio"
                >
                  Discover Portfolio
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectFour;
