"use client";

import type { RefObject } from "react";
import type { Swiper as SwiperType } from "swiper";

import { gsap } from "@/lib/gsap";

export function initTestimonialTwo(
  swiperRef: RefObject<SwiperType | null>,
  totalSlides: number,
): () => void {
  if (typeof window === "undefined") {
    return () => {};
  }

  const ctx = gsap.context(() => {
    const progress = document.querySelector<HTMLElement>(
      ".testimonial-two .divide-cs",
    );

    const currentNumber = document.querySelector<HTMLElement>(
      ".testimonial-two .current-slide-c-number",
    );

    const totalNumber = document.querySelector<HTMLElement>(
      ".testimonial-two .full-slides-c-number",
    );

    const swiper = swiperRef.current;

    if (!swiper || !progress || !currentNumber || !totalNumber) {
      return;
    }

    totalNumber.textContent = String(totalSlides);

    const startProgressLine = () => {
      gsap.to(progress, {
        "--progress": "100%",
        duration: 6,
        ease: "linear",
      });
    };

    const resetProgressLine = () => {
      gsap.killTweensOf(progress);

      gsap.set(progress, {
        "--progress": "0%",
      });

      startProgressLine();
    };

    const updateCounter = () => {
      currentNumber.textContent = String(swiper.realIndex + 1);
    };

    updateCounter();
    startProgressLine();

    const handleSlideChange = () => {
      updateCounter();
      resetProgressLine();
    };

    swiper.on("slideChange", handleSlideChange);

    return () => {
      swiper.off("slideChange", handleSlideChange);
      gsap.killTweensOf(progress);
    };
  });

  return () => {
    ctx.revert();
  };
}
