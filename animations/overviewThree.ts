"use client";

import { gsap, ScrollTrigger } from "@/lib/gsap";

export function initOverviewThree(): () => void {
  if (typeof window === "undefined") {
    return () => {};
  }

  const section = document.querySelector<HTMLElement>(".overview-three");

  if (!section) {
    return () => {};
  }

  const ctx = gsap.context(() => {
    const headers = gsap.utils.toArray<HTMLElement>(
      ".overview-three__thumb-header",
      section,
    );

    let timeline: gsap.core.Timeline | null = null;

    const updateRadius = () => {
      const width = section.offsetWidth;
      const height = section.offsetHeight;

      gsap.set(section, {
        borderTopLeftRadius: `${width * 0.7}px ${height * 0.3}px`,
        borderTopRightRadius: `${width * 0.7}px ${height * 0.3}px`,
      });
    };

    updateRadius();

    timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top bottom-=100",
        end: "+=100%",
        scrub: 0.35,
        fastScrollEnd: true,
        invalidateOnRefresh: true,
      },
    });

    timeline
      .to(
        section,
        {
          borderTopLeftRadius: "0px 0px",
          borderTopRightRadius: "0px 0px",
          ease: "power3.out",
        },
        0,
      )
      .to(
        headers,
        {
          left: "50%",
          xPercent: -50,
          ease: "power3.out",
        },
        0,
      );

    const resizeObserver = new ResizeObserver(() => {
      updateRadius();
    });

    resizeObserver.observe(section);

    const images = section.querySelectorAll("img");

    const refresh = () => {
      ScrollTrigger.refresh();
    };

    images.forEach((img) => {
      if (!img.complete) {
        img.addEventListener("load", refresh, {
          once: true,
        });
      }
    });

    if ("fonts" in document) {
      document.fonts.ready.then(refresh);
    }

    return () => {
      resizeObserver.disconnect();

      images.forEach((img) => {
        img.removeEventListener("load", refresh);
      });

      timeline?.kill();
    };
  }, section);

  return () => {
    ctx.revert();
  };
}
