import { gsap, SplitText } from "@/lib/gsap";

export function initSplitTitle(): () => void {
  if (typeof window === "undefined") {
    return () => {};
  }

  const splitInstances: SplitText[] = [];
  const contexts: gsap.Context[] = [];

  const init = async () => {
    await document.fonts.ready;

    const elements = document.querySelectorAll<HTMLElement>(".title-animation");

    elements.forEach((element) => {
      if (element.dataset.gsapInitialized === "true") return;

      element.dataset.gsapInitialized = "true";

      const ctx = gsap.context(() => {
        const split = new SplitText(element, {
          type: "lines, chars",
          linesClass: "split-parent",
          charsClass: "split-child",
        });

        splitInstances.push(split);

        gsap.set(element, {
          opacity: 1,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            end: "bottom 60%",
            toggleActions: "play none none none",
          },
        });

        tl.from(split.lines, {
          yPercent: 100,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        });

        tl.from(
          split.chars,
          {
            y: 100,
            autoAlpha: 0,
            duration: 0.8,
            stagger: 0,
            ease: "power3.out",
          },
          "-=0.8",
        );
      }, element);

      contexts.push(ctx);
    });
  };

  void init();

  return () => {
    contexts.forEach((ctx) => ctx.revert());

    splitInstances.forEach((split) => split.revert());

    document
      .querySelectorAll<HTMLElement>(".title-animation")
      .forEach((element) => {
        delete element.dataset.gsapInitialized;
      });
  };
}
