"use client";

import { gsap, ScrollTrigger } from "@/lib/gsap";

const DURATION = 10000;

export function initWorkTwo(
  setActiveIndex: (index: number) => void,
): () => void {
  if (typeof window === "undefined") {
    return () => {};
  }

  const ctx = gsap.context(() => {
    const tabs = gsap.utils.toArray<HTMLElement>(".work-two__lists li");
    const thumbs = gsap.utils.toArray<HTMLElement>(".work-two__thumb-single");
    const texts = gsap.utils.toArray<HTMLElement>(".work-two__text-single");

    if (!tabs.length) return;

    let current = 0;

    let timer = -1;

    const handlers = new Map<HTMLElement, EventListener>();

    gsap.set(thumbs, {
      opacity: 0,
      y: 30,
      scale: 0.8,
      zIndex: 1,
    });

    gsap.set(texts, {
      opacity: 0,
      y: 20,
    });

    const activateTab = (index: number) => {
      current = index;
      setActiveIndex(index);

      tabs.forEach((tab, i) => {
        tab.classList.toggle("active", i === index);
      });

      thumbs.forEach((thumb, i) => {
        gsap.to(thumb, {
          opacity: i === index ? 1 : 0,
          y: i === index ? 0 : 30,
          scale: i === index ? 1 : 0.8,
          zIndex: i === index ? 2 : 1,
          duration: 1,
          ease: "power3.out",
        });
      });

      texts.forEach((text, i) => {
        gsap.to(text, {
          opacity: i === index ? 1 : 0,
          y: i === index ? 0 : 20,
          duration: 1,
          ease: "power3.out",
        });
      });
    };

    const nextTab = () => {
      activateTab((current + 1) % tabs.length);
    };

    const stopTimer = () => {
      if (timer !== -1) {
        window.clearInterval(timer);
        timer = -1;
      }
    };

    const startTimer = () => {
      stopTimer();
      timer = window.setInterval(nextTab, DURATION) as unknown as number;
    };

    const resetTimer = () => {
      stopTimer();
      startTimer();
    };

    tabs.forEach((tab, index) => {
      const handleMouseEnter: EventListener = () => {
        activateTab(index);
        resetTimer();
      };

      handlers.set(tab, handleMouseEnter);
      tab.addEventListener("mouseenter", handleMouseEnter);
    });

    activateTab(0);
    startTimer();

    const mm = gsap.matchMedia();

    mm.add("(min-width:1200px)", () => {
      const trigger = ScrollTrigger.create({
        trigger: ".work-two",
        start: "top+=200 center",
        end: "bottom+=300 bottom",
        scrub: true,

        onEnter: stopTimer,
        onLeave: startTimer,
        onEnterBack: stopTimer,
        onLeaveBack: startTimer,
      });

      return () => {
        trigger.kill();
      };
    });

    return () => {
      stopTimer();

      handlers.forEach((handler, element) => {
        element.removeEventListener("mouseenter", handler);
      });

      handlers.clear();
      mm.revert();
    };
  });

  return () => {
    ctx.revert();
  };
}
