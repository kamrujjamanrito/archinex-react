"use client";

import { gsap, ScrollTrigger } from "@/lib/gsap";

export function initTeam(): () => void {
  if (typeof window === "undefined") {
    return () => {};
  }

  const ctx = gsap.context(() => {
    const section = document.querySelector<HTMLElement>(".team");

    const wrapper = document.querySelector<HTMLElement>(".team__wrapper");

    const container = document.querySelector<HTMLElement>(".team-container");

    if (!section || !wrapper || !container) return;

    const items = gsap.utils.toArray<HTMLElement>(".team__single");

    if (!items.length) return;

    const init = async () => {
      if ("fonts" in document) {
        await document.fonts.ready;
      }

      ScrollTrigger.refresh();

      items.forEach((item, index) => {
        item.classList.toggle("active", index === 0);
      });

      const getScrollAmount = () => wrapper.scrollWidth - container.offsetWidth;

      const tween = gsap.to(wrapper, {
        x: () => -getScrollAmount(),
        ease: "none",

        scrollTrigger: {
          trigger: section,

          start: "top -200px",

          end: () => `+=${getScrollAmount()}`,

          scrub: 1,

          pin: true,

          invalidateOnRefresh: true,

          anticipatePin: 1,

          onUpdate: ({ progress }) => {
            const index = Math.round(progress * (items.length - 1));

            items.forEach((item, i) => {
              item.classList.toggle("active", i === index);
            });
          },
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
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
