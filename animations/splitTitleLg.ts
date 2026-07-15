import { gsap, SplitText } from "@/lib/gsap";

export function initSplitTitleLg(): () => void {
  if (typeof window === "undefined") {
    return () => {};
  }

  const splitInstances: SplitText[] = [];
  const contexts: gsap.Context[] = [];

  const init = async () => {
    await document.fonts.ready;

    const elements = document.querySelectorAll<HTMLElement>(
      ".title-animation-lg",
    );

    elements.forEach((element) => {
      if (element.dataset.gsapInitialized === "true") return;

      element.dataset.gsapInitialized = "true";

      const ctx = gsap.context(() => {
        const split = new SplitText(element, {
          type: "words, chars",
          wordsClass: "split-parent-lg",
          charsClass: "split-child-lg",
        });

        splitInstances.push(split);

        gsap.set(element, {
          opacity: 1,
        });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: element,
              start: "top 90%",
              end: "bottom 60%",
              toggleActions: "play none none none",
            },
          })
          .from(split.chars, {
            duration: 0.7,
            yPercent: 60,
            autoAlpha: 0,
            ease: "power3.out",
            stagger: {
              each: 0.065,
              from: "center",
            },
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
      .querySelectorAll<HTMLElement>(".title-animation-lg")
      .forEach((element) => {
        delete element.dataset.gsapInitialized;
      });
  };
}
