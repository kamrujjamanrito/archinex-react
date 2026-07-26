"use client";

import { gsap, ScrollTrigger } from "@/lib/gsap";

export function initHeroTwo(): () => void {
  if (typeof window === "undefined") {
    return () => {};
  }

  const ctx = gsap.context(() => {
    const section = document.querySelector<HTMLElement>(".hero-two");

    if (!section) return;

    const heading = section.querySelector<HTMLElement>(".hero__heading h2");
    const thumb = section.querySelector<HTMLElement>(".hero-two__thumb");

    if (!heading || !thumb) return;

    const isRTL =
      document.querySelector(".page-wrapper")?.classList.contains("rtl") ??
      false;

    ScrollTrigger.getById("heroTwo")?.kill();

    const tl = gsap.timeline({
      scrollTrigger: {
        id: "heroTwo",
        trigger: section,
        start: "top top",
        end: "+=160%",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    tl.to(heading, {
      y: "240%",
      duration: 1.5,
      ease: "none",
    }).to(
      thumb,
      {
        scale: 1.6,
        opacity: 1,
        y: "-20%",
        x: isRTL ? "9.5%" : "-9.5%",
        duration: 1.5,
        ease: "none",
      },
      "<",
    );

    ScrollTrigger.refresh();
  });

  return () => {
    ctx.revert();
  };
}
