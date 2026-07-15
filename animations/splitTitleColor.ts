import { gsap, SplitText } from "@/lib/gsap";

export function initSplitTitleColor(): () => void {
  if (typeof window === "undefined") {
    return () => {};
  }

  const splitInstances: SplitText[] = [];
  const contexts: gsap.Context[] = [];

  const init = async () => {
    await document.fonts.ready;

    const elements = document.querySelectorAll<HTMLElement>(
      ".title-animation-color",
    );

    elements.forEach((element) => {
      if (element.dataset.gsapInitialized === "true") return;

      element.dataset.gsapInitialized = "true";

      const ctx = gsap.context(() => {
        const split = new SplitText(element, {
          type: "words",
          wordsClass: "split-word",
        });

        splitInstances.push(split);

        const words = element.querySelectorAll<HTMLElement>(".split-word");

        gsap.set(element, {
          opacity: 1,
        });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: element,
              start: "top 70%",
              end: "bottom 50%",
              scrub: true,
            },
          })
          .to(words, {
            color: getComputedStyle(element)
              .getPropertyValue("--char-active")
              .trim(),
            stagger: 0.2,
            ease: "none",
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
      .querySelectorAll<HTMLElement>(".title-animation-color")
      .forEach((element) => {
        delete element.dataset.gsapInitialized;
      });
  };
}
