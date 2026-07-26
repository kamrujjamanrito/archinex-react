"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/swiper-bundle.css";
import quote from "@/public/images/testimonial/quote.webp";
import { testimonialData } from "@/public/data/testimonial-data";

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <section className="testimonial pt-140 pb-140">
      <div className="container-lg">
        <div className="row gutter-40">
          <div className="col-12 col-xl-2">
            <div className="testimonial-quote">
              <Image src={quote} alt="Quote" priority />
            </div>
          </div>

          <div className="col-12 col-xl-8">
            <div className="testimonial__inner">
              <Swiper
                modules={[Navigation, Autoplay, EffectFade]}
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
                  prevEl: ".prev-testimonial",
                  nextEl: ".next-testimonial",
                }}
                onInit={(swiper) => {
                  setCurrentSlide(swiper.realIndex + 1);
                }}
                onSlideChange={(swiper) => {
                  setCurrentSlide(swiper.realIndex + 1);
                }}
              >
                {testimonialData.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="testimonial__single">
                      <div className="testimonial__content neutral-top">
                        <h4 className="title-lg-sm fw-4">
                          <q>{item.quote}</q>
                        </h4>

                        <div className="line"></div>
                      </div>

                      <div className="testimonial__cta-wrapper mt-60">
                        <div className="author__infor">
                          <h5 className="title-xxs fw-5">{item.author}</h5>

                          <p className="txt-light">{item.designation}</p>
                        </div>

                        <div className="logo">
                          <Image src={item.logo} alt={item.logoAlt} />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="col-12 col-xl-2">
            <div className="testimonial__cta">
              <div className="slider-navigation">
                <button
                  type="button"
                  className="prev-testimonial slider-btn"
                  aria-label="Previous testimonial"
                >
                  <i className="ti ti-arrow-narrow-left" />
                </button>

                <button
                  type="button"
                  className="next-testimonial slider-btn"
                  aria-label="Next testimonial"
                >
                  <i className="ti ti-arrow-narrow-right" />
                </button>
              </div>

              <div className="fraction">
                <span className="current-slide-number text-xxl">
                  {String(currentSlide).padStart(2, "0")}
                </span>

                <span className="divide text-xxl">/</span>

                <span className="full-slides-number text-xxl">
                  {String(testimonialData.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
