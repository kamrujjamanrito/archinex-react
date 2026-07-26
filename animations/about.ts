import { gsap } from "@/lib/gsap";

export function initAbout(): () => void {
  if (typeof window === "undefined") {
    return () => {};
  }

  if (window.innerWidth < 1200) {
    return () => {};
  }

  const contexts: gsap.Context[] = [];

  document.querySelectorAll<HTMLElement>(".about-four").forEach((section) => {
    if (section.dataset.aboutAnimation === "true") {
      return;
    }

    const heroSection = section.previousElementSibling as HTMLElement | null;

    if (!heroSection?.classList.contains("hero-four")) {
      return;
    }

    const thumb = section.querySelector<HTMLElement>(".about-four__thumb");
    const image = thumb?.querySelector<HTMLImageElement>("img");

    if (!thumb || !image) {
      return;
    }

    section.dataset.aboutAnimation = "true";

    const ctx = gsap.context(() => {
      const vw = window.innerWidth;

      let startScale = 0.11;
      let startY = -610;
      let startX = "20.4%";

      if (vw >= 1400) {
        startScale = 0.11;
        startY = -610;
        startX = "20.4%";
      } else {
        startScale = 0.11;
        startY = -605;
        startX = "22%";
      }

      gsap.set(image, {
        borderRadius: 4000,
      });

      gsap.set(thumb, {
        scale: startScale,
        y: startY,
        x: startX,
        overflow: "hidden",
        transformOrigin: "center center",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroSection,
          start: "center-=400 center",
          end: "+=100%",
          scrub: 1,
          pin: false,
        },
      });

      tl.to(image, {
        borderRadius: 0,
        duration: 2,
        ease: "power1.inOut",
      });

      tl.to(thumb, {
        scale: 1,
        y: 0,
        x: 0,
        duration: 2,
        ease: "power1.inOut",
      });
    }, section);

    contexts.push(ctx);
  });

  return () => {
    contexts.forEach((ctx) => ctx.revert());

    document.querySelectorAll<HTMLElement>(".about-four").forEach((section) => {
      delete section.dataset.aboutAnimation;
    });
  };
}
