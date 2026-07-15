import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function initSmoothScroll(): () => void {
  if (typeof window === "undefined") {
    return () => {};
  }

  const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
    touchMultiplier: 2,
    infinite: false,
  });

  lenis.on("scroll", ScrollTrigger.update);

  const update = (time: number) => {
    lenis.raf(time * 1000);
  };

  gsap.ticker.add(update);

  gsap.ticker.lagSmoothing(0);

  return () => {
    gsap.ticker.remove(update);

    lenis.destroy();

    ScrollTrigger.killAll();
  };
}
