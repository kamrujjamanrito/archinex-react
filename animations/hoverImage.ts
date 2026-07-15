import HoverEffect from "hover-effect";

export function initHoverImage(): () => void {
  if (typeof window === "undefined") {
    return () => {};
  }

  const listeners: Array<() => void> = [];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const container = entry.target as HTMLElement;

        if (container.dataset.hoverInitialized === "true") return;

        initEffect(container);
      });
    },
    {
      root: null,
      rootMargin: "100px",
      threshold: 0.1,
    },
  );

  const containers = document.querySelectorAll<HTMLElement>(".hover-image");

  containers.forEach((container) => observer.observe(container));

  function initEffect(container: HTMLElement) {
    const item = container.closest<HTMLElement>(".hover-item") ?? container;

    const image = Array.from(
      container.querySelectorAll<HTMLImageElement>("img"),
    ).find((img) => !img.closest(".arrow"));

    if (!image) return;

    const setup = () => {
      const ratio = image.naturalHeight / image.naturalWidth || 1;

      const instance = new HoverEffect({
        parent: container,

        image1: image.src,

        image2: image.src,

        displacementImage: container.dataset.displacement ?? "",

        intensity: Number(container.dataset.intensity ?? 0.2),

        speedIn: Number(container.dataset.speedin ?? 1),

        speedOut: Number(container.dataset.speedout ?? 1),

        easing: container.dataset.easing ?? "Expo.easeOut",

        imagesRatio: ratio,

        hover: false,
      });

      container.dataset.hoverInitialized = "true";

      const handleMouseEnter = () => {
        image.style.opacity = "0";
        instance.next();
      };

      const handleMouseLeave = () => {
        instance.previous();

        window.setTimeout(() => {
          image.style.opacity = "1";
        }, 600);
      };

      item.addEventListener("mouseenter", handleMouseEnter);

      item.addEventListener("mouseleave", handleMouseLeave);

      listeners.push(() => {
        item.removeEventListener("mouseenter", handleMouseEnter);

        item.removeEventListener("mouseleave", handleMouseLeave);
      });
    };

    if (image.complete) {
      setup();
    } else {
      image.addEventListener("load", setup, {
        once: true,
      });
    }
  }

  return () => {
    observer.disconnect();

    listeners.forEach((cleanup) => cleanup());

    containers.forEach((container) => {
      delete container.dataset.hoverInitialized;
    });
  };
}
