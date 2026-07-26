"use client";

import { gsap } from "@/lib/gsap";

const DISPLAY_DURATION = 3;
const CLIP_DURATION = 0.6;

export function initAnimatedHeadline(): () => void {
  if (typeof window === "undefined") {
    return () => {};
  }

  const ctx = gsap.context(() => {
    const headlines = gsap.utils.toArray<HTMLElement>(".cd-headline.clip");

    if (!headlines.length) return;

    const timelines: gsap.core.Timeline[] = [];

    const init = async () => {
      if ("fonts" in document) {
        await document.fonts.ready;
      }

      headlines.forEach((headline) => {
        const wrapper =
          headline.querySelector<HTMLElement>(".cd-words-wrapper");

        if (!wrapper) return;

        const words = gsap.utils.toArray<HTMLElement>(
          wrapper.querySelectorAll("i"),
        );

        if (words.length <= 1) return;

        words.forEach((word, index) => {
          word.classList.toggle("is-visible", index === 0);
          word.classList.toggle("is-hidden", index !== 0);

          gsap.set(word, {
            position: index === 0 ? "relative" : "absolute",
            left: 0,
            top: 0,
            opacity: index === 0 ? 1 : 0,
          });
        });

        gsap.set(wrapper, {
          width: words[0].offsetWidth + 10,
          overflow: "hidden",
        });

        const tl = gsap.timeline({
          repeat: -1,
        });

        words.forEach((current, index) => {
          const next = words[(index + 1) % words.length];

          tl.to({}, { duration: DISPLAY_DURATION });

          tl.to(wrapper, {
            width: 2,
            duration: CLIP_DURATION,
            ease: "power2.inOut",
          });

          tl.call(() => {
            current.classList.remove("is-visible");
            current.classList.add("is-hidden");

            next.classList.remove("is-hidden");
            next.classList.add("is-visible");

            gsap.set(current, {
              opacity: 0,
              position: "absolute",
            });

            gsap.set(next, {
              opacity: 1,
              position: "relative",
            });
          });

          tl.to(wrapper, {
            width: next.offsetWidth + 10,
            duration: CLIP_DURATION,
            ease: "power2.inOut",
          });
        });

        timelines.push(tl);
      });
    };

    init();

    return () => {
      timelines.forEach((timeline) => timeline.kill());
    };
  });

  return () => {
    ctx.revert();
  };
}
