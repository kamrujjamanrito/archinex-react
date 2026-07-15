"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DESKTOP_BREAKPOINT = 576;

export const initWorkAnimation = () => {
  if (window.innerWidth < DESKTOP_BREAKPOINT) {
    return;
  }

  const section = document.querySelector<HTMLElement>(".work");
  const background = document.querySelector<HTMLElement>(".work-bg");

  if (!section || !background) {
    return;
  }

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      pin: background,
      invalidateOnRefresh: true,
    },
  });

  return () => {
    timeline.scrollTrigger?.kill();
    timeline.kill();
  };
};
