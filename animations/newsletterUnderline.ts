import { gsap } from "@/lib/gsap";

export function initNewsletterUnderline(): () => void {
  if (typeof window === "undefined") {
    return () => {};
  }

  const contexts: gsap.Context[] = [];

  const forms = document.querySelectorAll<HTMLElement>(".newsletter-animation");

  forms.forEach((form) => {
    if (form.dataset.newsletterAnimation === "true") return;

    form.dataset.newsletterAnimation = "true";

    const inputSingle = form.querySelector<HTMLElement>(".input-single");

    const underline = form.querySelector<HTMLElement>(".underline");

    if (!inputSingle || !underline) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: inputSingle,
          start: "top 95%",
          toggleActions: "play none none none",
        },
      });

      tl.to(underline, {
        scaleX: 1,
        duration: 1.3,
        ease: "power2.out",
      });
    }, form);

    contexts.push(ctx);
  });

  return () => {
    contexts.forEach((ctx) => ctx.revert());

    document
      .querySelectorAll<HTMLElement>(".newsletter-animation")
      .forEach((form) => {
        delete form.dataset.newsletterAnimation;
      });
  };
}
