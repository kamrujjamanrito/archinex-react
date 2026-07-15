"use client";

import { gsap, ScrollTrigger } from "@/lib/gsap";

export function initConcept(): () => void {
  if (typeof window === "undefined") {
    return () => {};
  }

  const ctx = gsap.context(() => {
    const section = document.querySelector<HTMLElement>(".concept");

    if (!section) return;

    const items = gsap.utils.toArray<HTMLElement>(
      ".concept__thumb-single",
    );

    const footerItems = gsap.utils.toArray<HTMLElement>(
      ".concept__right-footer",
    );

    const listItems = gsap.utils.toArray<HTMLElement>(
      ".concept__right-list li",
    );

    const footerWrapper = document.querySelector<HTMLElement>(
      ".concept__footer-wrapper",
    );

    if (
      !items.length ||
      !footerItems.length ||
      !listItems.length ||
      !footerWrapper
    ) {
      return;
    }

    /*
    |--------------------------------------------------------------------------
    | Wait Fonts
    |--------------------------------------------------------------------------
    */

    const init = async () => {
      if ("fonts" in document) {
        await document.fonts.ready;
      }

      ScrollTrigger.refresh();

      /*
      |--------------------------------------------------------------------------
      | Footer Height
      |--------------------------------------------------------------------------
      */

      const footerHeight = footerItems[0].offsetHeight;

      gsap.set(footerWrapper, {
        height: footerHeight,
      });

      /*
      |--------------------------------------------------------------------------
      | Initial State
      |--------------------------------------------------------------------------
      */

      gsap.set(footerItems, {
        y: footerHeight,
      });

      gsap.set(footerItems[0], {
        y: 0,
      });

      gsap.set(listItems, {
        x: 0,
        color: "#B8B3AE",
      });

      gsap.set(listItems[0], {
        x: 20,
        color: "#000",
      });

      /*
      |--------------------------------------------------------------------------
      | Timeline
      |--------------------------------------------------------------------------
      */

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top -100px",
          end: `+=${items.length * 100}%`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      items.forEach((_, index) => {
        if (index === 0) return;

        tl.to(".concept__thumb-wrapper", {
          xPercent: -100 * index,
          ease: "none",
          duration: 1,
        })

          .to(
            footerItems[index - 1],
            {
              y: -footerHeight,
              duration: 0.6,
            },
            "<",
          )

          .to(
            footerItems[index],
            {
              y: 0,
              duration: 0.6,
            },
            "<",
          )

          .to(
            listItems[index - 1],
            {
              x: 0,
              color: "#B8B3AE",
              duration: 1,
            },
            "<",
          )

          .to(
            listItems[index],
            {
              x: 20,
              color: "#000",
              duration: 1,
            },
            "<",
          );
      });

      return () => {
        tl.kill();
      };
    };

    const promise = init();

    return () => {
      promise.then((cleanup) => cleanup?.());
    };
  });

  return () => {
    ctx.revert();
  };
}