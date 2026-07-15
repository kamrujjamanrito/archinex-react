import { gsap } from "@/lib/gsap";

type AnimationConfig = {
  x?: number;
  y?: number;
};

const animations: Record<string, AnimationConfig> = {
  "fade-up": {
    y: 30,
  },

  "fade-down": {
    y: -30,
  },

  "fade-left": {
    x: 30,
  },

  "fade-right": {
    x: -30,
  },
};

export function initScrollAnimations(): () => void {
  if (typeof window === "undefined") {
    return () => {};
  }

  const contexts: gsap.Context[] = [];

  Object.entries(animations).forEach(([className, animation]) => {
    const elements = document.querySelectorAll<HTMLElement>(`.${className}`);

    if (!elements.length) return;

    elements.forEach((element) => {
      if (element.dataset.scrollAnimation === "true") return;

      element.dataset.scrollAnimation = "true";

      const delay = Number(element.dataset.delay ?? 0) / 1000;

      const ctx = gsap.context(() => {
        gsap.from(element, {
          opacity: 0,

          duration: 0.6,

          ease: "slow(0.1, 0.1, false)",

          delay,

          ...animation,

          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            once: true,
          },
        });
      }, element);

      contexts.push(ctx);
    });
  });

  return () => {
    contexts.forEach((ctx) => ctx.revert());

    Object.keys(animations).forEach((className) => {
      document
        .querySelectorAll<HTMLElement>(`.${className}`)
        .forEach((element) => {
          delete element.dataset.scrollAnimation;
        });
    });
  };
}
