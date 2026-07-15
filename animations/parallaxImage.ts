import { gsap } from "@/lib/gsap";

export function initParallaxImage(): () => void {
  if (typeof window === "undefined") {
    return () => {};
  }

  const contexts: gsap.Context[] = [];

  const images = document.querySelectorAll<HTMLImageElement>(".parallax-image");

  if (!images.length) {
    return () => {};
  }

  images.forEach((image) => {
    if (image.dataset.parallaxInitialized === "true") return;

    image.dataset.parallaxInitialized = "true";

    const wrap = document.createElement("div");
    wrap.className = "parallax-image-wrap";

    const inner = document.createElement("div");
    inner.className = "parallax-image-inner";

    const parent = image.parentElement;

    if (!parent) return;

    parent.insertBefore(wrap, image);

    wrap.appendChild(inner);

    inner.appendChild(image);

    const ctx = gsap.context(() => {
      gsap.set(image, {
        width: "100%",
        height: "120%",
        objectFit: "cover",
      });

      const tlParallax = gsap.timeline({
        scrollTrigger: {
          trigger: wrap,

          start: "top bottom",

          end: "bottom top",

          scrub: 1,

          invalidateOnRefresh: true,
        },
      });

      tlParallax.fromTo(
        image,
        {
          yPercent: -20,
        },
        {
          yPercent: 20,

          ease: "none",
        },
      );

      gsap.from(inner, {
        duration: 1.5,

        autoAlpha: 0,

        scale: 1.2,

        ease: "power2.out",

        clearProps: "all",

        scrollTrigger: {
          trigger: wrap,

          start: "top 99%",

          once: true,
        },
      });
    }, wrap);

    contexts.push(ctx);
  });

  return () => {
    contexts.forEach((ctx) => ctx.revert());

    images.forEach((image) => {
      delete image.dataset.parallaxInitialized;

      const inner = image.parentElement;

      if (!inner) return;

      const wrap = inner.parentElement;

      if (
        inner.classList.contains("parallax-image-inner") &&
        wrap?.classList.contains("parallax-image-wrap")
      ) {
        wrap.parentElement?.insertBefore(image, wrap);

        wrap.remove();
      }
    });
  };
}
