"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { testimonialTwoData } from "@/public/data/testimonial-two-data";
import { initTestimonialTwo } from "@/animations/testimonialTwo";
import "swiper/css";
import "swiper/css/effect-fade";

export default function TestimonialTwo() {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    return initTestimonialTwo(
      swiperRef,
      testimonialTwoData.testimonials.length,
    );
  }, []);

  return (
    <section className="testimonial-two pt-140 pb-140 bg-alt-2">
      <div className="container-lg">
        <div className="row">
          <div className="col-12">
            <div className="testimonial-two__inner">
              <div className="testimonial-two__intro">
                <p className="txt-light">{testimonialTwoData.subtitle}</p>

                <h2 className="title-lg-sm title-animation elicyon text-center mb-30">
                  {testimonialTwoData.title}
                </h2>

                <span className="divide-cs"></span>
              </div>

              <div className="testimonial-two-slider__wrapper mt-80">
                <Swiper
                  modules={[Autoplay, EffectFade]}
                  className="testimonial-two__slider"
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
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                >
                  {testimonialTwoData.testimonials.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className="testimonial__single">
                        <h2 className="title-xs fw-3">
                          <q>{item.quote}</q>
                        </h2>

                        <div className="author__info mt-60">
                          <div className="author__thumb">
                            <Image
                              src={item.author.image}
                              alt={item.author.alt}
                            />
                          </div>

                          <div className="author__content">
                            <p className="text-xl elicyon">
                              {item.author.name}
                            </p>

                            <p className="txt-light fw-5">
                              {item.author.designation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="fraction-wrapper">
                <div className="fraction">
                  <span className="current-slide-c-number text-sm">1</span>{" "}
                  <span className="divide text-sm">/</span>{" "}
                  <span className="full-slides-c-number text-sm">
                    {testimonialTwoData.testimonials.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
