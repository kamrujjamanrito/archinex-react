import { gsap } from "@/lib/gsap";

export function initAboutOverview(): () => void {
  if (typeof window === "undefined") {
    return () => {};
  }

  if (window.innerWidth < 1200) {
    return () => {};
  }

  const contexts: gsap.Context[] = [];

  document.querySelectorAll<HTMLElement>(".about").forEach((aboutSection) => {
    const thumb = document.querySelector<HTMLElement>(".about-overview__thumb");

    if (!thumb) return;

    if (thumb.dataset.aboutAnimation === "true") return;

    thumb.dataset.aboutAnimation = "true";

    const ctx = gsap.context(() => {
      gsap.set(thumb, {
        scale: 0.16,
        y: "-87%",
        x: "-3.2%",
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: aboutSection,
            start: "center+=100 center",
            end: "+=100%",
            scrub: true,
          },
        })
        .to(thumb, {
          scale: 1,
          y: "0%",
          x: "0%",
          duration: 3,
        });
    });

    contexts.push(ctx);
  });

  document
    .querySelectorAll<HTMLElement>(".about-overview")
    .forEach((section) => {
      if (section.dataset.counterAnimation === "true") return;

      section.dataset.counterAnimation = "true";

      const items = Array.from(
        section.querySelectorAll<HTMLElement>(".about-counter__single"),
      );

      if (!items.length) return;

      const button = section.querySelector<HTMLElement>(".about-counter__cta");

      const offset = window.innerWidth >= 1600 ? -100 : -60;

      const ctx = gsap.context(() => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=200%",
            scrub: true,
            pin: true,
          },
        });

        items.forEach((item, index) => {
          timeline.to(
            item,
            {
              y: index === 0 ? 0 : offset * index,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
            },
            index * 0.5,
          );
        });

        if (button) {
          timeline.fromTo(
            button,
            {
              opacity: 0,
              y: 50,
            },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
            },
            items.length * 0.5,
          );
        }
      }, section);

      contexts.push(ctx);
    });

  return () => {
    contexts.forEach((ctx) => ctx.revert());

    document
      .querySelectorAll<HTMLElement>(".about-overview__thumb")
      .forEach((element) => {
        delete element.dataset.aboutAnimation;
      });

    document
      .querySelectorAll<HTMLElement>(".about-overview")
      .forEach((element) => {
        delete element.dataset.counterAnimation;
      });
  };
}
