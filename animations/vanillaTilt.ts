import VanillaTilt, { TiltOptions, TiltInstance } from "vanilla-tilt";

type TiltElement = HTMLElement & {
  vanillaTilt?: TiltInstance;
};

export function initVanillaTilt(): () => void {
  if (typeof window === "undefined") {
    return () => {};
  }

  const initializedElements: TiltElement[] = [];

  const initGroup = (selector: string, options: TiltOptions): void => {
    const elements = document.querySelectorAll<TiltElement>(selector);

    elements.forEach((element) => {
      if (element.dataset.tiltInitialized === "true") {
        return;
      }

      element.dataset.tiltInitialized = "true";

      VanillaTilt.init(element, options);

      initializedElements.push(element);
    });
  };

  initGroup(".btn-anim", {
    max: 25,
    speed: 3000,
    perspective: 200,
  });

  initGroup(".van-tilt", {
    max: 10,
    speed: 3000,
  });

  return () => {
    initializedElements.forEach((element) => {
      element.vanillaTilt?.destroy();

      delete element.dataset.tiltInitialized;
    });
  };
}
