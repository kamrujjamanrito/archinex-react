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
    const image = thumb?.querySelector<HTMLImageElement>("video");

    if (!thumb || !image) {
      return;
    }

    section.dataset.aboutAnimation = "true";

    const ctx = gsap.context(() => {
      gsap.set(image, {
        borderRadius: "800px",
      });

      gsap.set(thumb, {
        scale: 0.03,
        y: "-862px",
        x: "21.8%",
        overflow: "hidden",
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: heroSection,
            start: "center-=200 center",
            end: "+=100%",
            scrub: true,
            pin: false,
          },
        })
        .to(
          image,
          {
            borderRadius: "20px",
            duration: 3,
            ease: "power1.inOut",
          },
          "<",
        )
        .to(
          thumb,
          {
            scale: 1,
            y: "0%",
            x: "0%",
            duration: 3,
            ease: "power1.inOut",
          },
          "<",
        );
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
