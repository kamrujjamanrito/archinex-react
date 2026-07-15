import { gsap, ScrollTrigger } from "@/lib/gsap";

export function initScaleUp(): () => void {
  if (typeof window === "undefined") {
    return () => {};
  }

  if (window.innerWidth <= 576) {
    return () => {};
  }

  const contexts: gsap.Context[] = [];

  const wrappers = document.querySelectorAll<HTMLElement>(".scale-wrapper");

  wrappers.forEach((wrapper) => {
    if (wrapper.dataset.scaleInitialized === "true") return;

    wrapper.dataset.scaleInitialized = "true";

    const ctx = gsap.context(() => {
      const items = wrapper.querySelectorAll<HTMLElement>(".scale-up");

      items.forEach((item, index) => {
        const delay = index * 0;

        gsap.set(item, {
          opacity: 0,
          y: 100,
          scale: 0.8,
        });

        ScrollTrigger.create({
          trigger: item,
          start: "top 100%",
          end: "bottom 20%",
          once: true,

          onEnter: () => {
            gsap.to(item, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1,
              delay,
              ease: "power3.out",
            });
          },
        });
      });
    }, wrapper);

    contexts.push(ctx);
  });

  return () => {
    contexts.forEach((ctx) => ctx.revert());

    document
      .querySelectorAll<HTMLElement>(".scale-wrapper")
      .forEach((wrapper) => {
        delete wrapper.dataset.scaleInitialized;
      });
  };
}
