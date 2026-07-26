"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/swiper-bundle.css";
import one from "@/public/images/left-arrow.webp";
import two from "@/public/images/right-arrow.webp";
import arrow from "@/public/images/arrow-4.webp";

const ProjectSlider = () => {
  return (
    <section className="project-slider fade-up">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        loop
        speed={1000}
        slidesPerView={1}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
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
        <SwiperSlide>
          <div className="proect-slider-single overflow-hidden">
            <div
              className="project-slider-bg"
              style={{ backgroundImage: "url('/images/projects/dp-one.webp')" }}
            ></div>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="project-slider__box bg-alt-2">
                    <div className="project-slider__intro">
                      <span className="text-uppercase fw-5">
                        THE OPEN STUDIO
                      </span>
                      <h2 className="elicyon title-lg-sm mt-12 fw-3">
                        Crafted Silver
                      </h2>
                    </div>
                    <div className="project-slider__cta">
                      <Link href="project-details">
                        <Image src={arrow} alt="Image" />
                        <span>Our Products</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="proect-slider-single overflow-hidden">
            <div
              className="project-slider-bg"
              style={{ backgroundImage: "url('/images/projects/dp-two.webp')" }}
            ></div>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="project-slider__box bg-alt-2">
                    <div className="project-slider__intro">
                      <span className="text-uppercase fw-5">
                        THE CREATIVE LAB
                      </span>
                      <h2 className="elicyon title-lg-sm mt-12 fw-3">
                        Refined Marble
                      </h2>
                    </div>
                    <div className="project-slider__cta">
                      <Link href="project-details">
                        <Image src={arrow} alt="Image" />
                        <span>Our Products</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="proect-slider-single overflow-hidden">
            <div
              className="project-slider-bg"
              style={{
                backgroundImage: "url('/images/projects/dp-three.webp')",
              }}
            ></div>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="project-slider__box bg-alt-2">
                    <div className="project-slider__intro">
                      <span className="text-uppercase fw-5">
                        Sculpted Bronze Brick
                      </span>
                      <h2 className="elicyon title-lg-sm mt-12 fw-3">
                        Crafted Silver
                      </h2>
                    </div>
                    <div className="project-slider__cta">
                      <Link href="project-details">
                        <Image src={arrow} alt="Image" />
                        <span>Our Products</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="proect-slider-single overflow-hidden">
            <div
              className="project-slider-bg"
              style={{
                backgroundImage: "url('/images/projects/dp-four.webp')",
              }}
            ></div>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="project-slider__box bg-alt-2">
                    <div className="project-slider__intro">
                      <span className="text-uppercase fw-5">
                        THE IDEA WORKSHOP
                      </span>
                      <h2 className="elicyon title-lg-sm mt-12 fw-3">
                        Forged Ivory Block
                      </h2>
                    </div>
                    <div className="project-slider__cta">
                      <Link href="project-details">
                        <Image src={arrow} alt="Image" />
                        <span>Our Products</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="proect-slider-single overflow-hidden">
            <div
              className="project-slider-bg"
              style={{
                backgroundImage: "url('/images/projects/dp-five.webp')",
              }}
            ></div>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="project-slider__box bg-alt-2">
                    <div className="project-slider__intro">
                      <span className="text-uppercase fw-5">
                        THE MAKER STUDIO
                      </span>
                      <h2 className="elicyon title-lg-sm mt-12 fw-3">
                        Polished Golden
                      </h2>
                    </div>
                    <div className="project-slider__cta">
                      <Link href="project-details">
                        <Image src={arrow} alt="Image" />
                        <span>Our Products</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="project-slider-navigation">
        <div className="slider-navigation">
          <button
            type="button"
            aria-label="prev slide"
            title="prev slide"
            className="prev-project slider-btn"
          >
            <Image src={one} alt="Image" />
          </button>
          <button
            type="button"
            aria-label="next slide"
            title="next slide"
            className="next-project slider-btn"
          >
            <Image src={two} alt="Image" />
          </button>
        </div>
      </div>
      <div className="project-slider-pagination"></div>
    </section>
  );
};

export default ProjectSlider;
