"use client";

import { gsap, ScrollTrigger } from "@/lib/gsap";

export function initServiceTwo(): () => void {
  if (typeof window === "undefined") {
    return () => {};
  }

  const ctx = gsap.context(() => {
    const section = document.querySelector<HTMLElement>(".service-two");

    if (!section) return;

    const contents = gsap.utils.toArray<HTMLElement>(
      ".service-two__content-single",
    );

    const thumbs = gsap.utils.toArray<HTMLElement>(
      ".service-two__thumb-single",
    );

    if (!contents.length || !thumbs.length) return;

    /*
    |--------------------------------------------------------------------------
    | Initial State
    |--------------------------------------------------------------------------
    */

    gsap.set(thumbs, {
      opacity: 0,
      y: 30,
      scale: 0.8,
      zIndex: 1,
    });

    gsap.set(thumbs[0], {
      opacity: 1,
      y: 0,
      scale: 1,
      zIndex: 2,
    });

    /*
    |--------------------------------------------------------------------------
    | Activate Service
    |--------------------------------------------------------------------------
    */

    const activateService = (index: number) => {
      contents.forEach((item, i) => {
        item.classList.toggle("active", i === index);
      });

      thumbs.forEach((thumb, i) => {
        if (i === index) {
          gsap.to(thumb, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            zIndex: 2,
            overwrite: "auto",
          });
        } else {
          gsap.to(thumb, {
            opacity: 0,
            y: 30,
            scale: 0.8,
            duration: 1,
            ease: "power3.out",
            zIndex: 1,
            overwrite: "auto",
          });
        }
      });

      /*
      |--------------------------------------------------------------------------
      | Restart Progress Line
      |--------------------------------------------------------------------------
      */

      const line = contents[index]?.querySelector<HTMLElement>(".line");

      if (line) {
        line.style.animation = "none";

        // Force browser reflow
        void line.offsetHeight;

        line.style.animation = "";
      }
    };

    /*
    |--------------------------------------------------------------------------
    | Initial Active Item
    |--------------------------------------------------------------------------
    */

    activateService(0);

    /*
    |--------------------------------------------------------------------------
    | Click Events
    |--------------------------------------------------------------------------
    */

    const handlers: Array<() => void> = [];

    contents.forEach((item, index) => {
      const handleClick = () => {
        activateService(index);
      };

      item.addEventListener("click", handleClick);

      handlers.push(() => {
        item.removeEventListener("click", handleClick);
      });
    });

    /*
    |--------------------------------------------------------------------------
    | ScrollTrigger Pin
    |--------------------------------------------------------------------------
    */

    let trigger: ScrollTrigger | undefined;

    return () => {
      handlers.forEach((cleanup) => cleanup());

      trigger?.kill();
    };
  });

  return () => {
    ctx.revert();
  };
}
