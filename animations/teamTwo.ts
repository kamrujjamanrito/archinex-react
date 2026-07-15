"use client";

import { gsap, ScrollTrigger } from "@/lib/gsap";

const DURATION = 10000;

export function initTeamTwo(): () => void {
  if (typeof window === "undefined") {
    return () => {};
  }

  const ctx = gsap.context(() => {
    const tabs = gsap.utils.toArray<HTMLElement>(".team-two__lists li");
    const thumbs = gsap.utils.toArray<HTMLElement>(".team-two-thumb");

    if (!tabs.length || !thumbs.length) return;

    let current = 0;
    let timer: number | null = null;

    const handlers = new Map<HTMLElement, EventListener>();

    /*
    |--------------------------------------------------------------------------
    | Initial State
    |--------------------------------------------------------------------------
    */

    gsap.set(thumbs, {
      opacity: 0,
      y: 30,
      scale: 0.8,
      zIndex: 1,
    });

    gsap.set(thumbs[0], {
      opacity: 1,
      y: 0,
      scale: 1,
      zIndex: 2,
    });

    tabs[0]?.classList.add("active");

    /*
    |--------------------------------------------------------------------------
    | Activate Member
    |--------------------------------------------------------------------------
    */

    const activateTab = (index: number) => {
      current = index;

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
    };

    /*
    |--------------------------------------------------------------------------
    | Auto Play
    |--------------------------------------------------------------------------
    */

    const nextTab = () => {
      activateTab((current + 1) % tabs.length);
    };

    const stopTimer = () => {
      if (timer !== null) {
        clearInterval(timer);
        timer = null;
      }
    };

    const startTimer = () => {
      stopTimer();
      timer = window.setInterval(nextTab, DURATION);
    };

    const resetTimer = () => {
      stopTimer();
      startTimer();
    };

    /*
    |--------------------------------------------------------------------------
    | Hover Events
    |--------------------------------------------------------------------------
    */

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

    /*
    |--------------------------------------------------------------------------
    | Pause While Section Is Visible
    |--------------------------------------------------------------------------
    */

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1200px)", () => {
      const trigger = ScrollTrigger.create({
        trigger: ".team-two",
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

    /*
    |--------------------------------------------------------------------------
    | Cleanup
    |--------------------------------------------------------------------------
    */

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