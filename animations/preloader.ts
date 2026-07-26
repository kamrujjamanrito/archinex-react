import { gsap } from "@/lib/gsap";

interface PreloaderOptions {
  onComplete?: () => void;
}

export function initPreloader({ onComplete }: PreloaderOptions = {}) {
  const progressBar = document.querySelector(
    ".preloader-progress",
  ) as HTMLDivElement | null;

  const counter = document.querySelector(
    ".preloader-count",
  ) as HTMLDivElement | null;

  if (!progressBar || !counter) {
    onComplete?.();

    requestAnimationFrame(() => {
      window.dispatchEvent(new Event("resize"));
    });

    return;
  }

  const loader = {
    value: 0,
  };

  gsap.to(loader, {
    value: 100,

    duration: 2,

    ease: "power2.out",

    onUpdate() {
      const value = Math.floor(loader.value);

      progressBar.style.width = `${value}%`;

      counter.textContent = `${value}%`;
    },

    onComplete() {
      gsap.to(".preloader", {
        yPercent: -100,

        duration: 1,

        ease: "power4.inOut",

        onComplete() {
          onComplete?.();

          requestAnimationFrame(() => {
            window.dispatchEvent(new Event("resize"));
          });
        },
      });
    },
  });
}
