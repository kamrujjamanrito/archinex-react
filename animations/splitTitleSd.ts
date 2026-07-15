import { gsap, SplitText } from "@/lib/gsap";

export function initSplitTitleSd(): () => void {
  if (typeof window === "undefined") {
    return () => {};
  }

  const splitInstances: SplitText[] = [];
  const contexts: gsap.Context[] = [];

  const init = async () => {
    await document.fonts.ready;

    const elements = document.querySelectorAll<HTMLElement>(
      ".title-animation-sd",
    );

    elements.forEach((element) => {
      if (element.dataset.gsapInitialized === "true") return;

      element.dataset.gsapInitialized = "true";

      const ctx = gsap.context(() => {
        const split = new SplitText(element, {
          type: "lines, chars",
          linesClass: "split-parent-sd",
          charsClass: "split-child-sd",
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

        split.lines.forEach((line) => {
          const chars = line.querySelectorAll(".split-child-sd");

          tl.from(chars, {
            duration: 0.7,
            autoAlpha: 0,
            x: -10,
            ease: "power3.out",
            stagger: 0.05,
          });
        });
      }, element);

      contexts.push(ctx);
    });
  };

  void init();

  return () => {
    contexts.forEach((ctx) => ctx.revert());

    splitInstances.forEach((split) => split.revert());

    document
      .querySelectorAll<HTMLElement>(".title-animation-sd")
      .forEach((element) => {
        delete element.dataset.gsapInitialized;
      });
  };
}
