import { ScrollTrigger } from "gsap/ScrollTrigger";

import { gsap } from "@/lib/gsap";

export const initService = () => {
  const wrapper = document.querySelector<HTMLElement>(".service__wrapper");

  if (!wrapper) {
    return () => {};
  }

  const ctx = gsap.context(() => {
    const services = gsap.utils.toArray<HTMLElement>(".service__list-single");
    const thumbs = gsap.utils.toArray<HTMLElement>(".service__thumb-single");

    const serviceInner = wrapper.querySelector<HTMLElement>(".service__inner");
    const serviceThumb = wrapper.querySelector<HTMLElement>(".service__thumb");

    if (!services.length || !thumbs.length || !serviceInner || !serviceThumb) {
      return;
    }

    let current = 0;
    const duration = 10000;
    let timer: number | null = null;

    const restartLineAnimation = (line: HTMLElement) => {
      line.style.animation = "none";
      void line.offsetWidth;
      line.style.animation = "";
    };

    const activateService = (index: number) => {
      services.forEach((service) => {
        service.classList.remove("active");
      });

      services[index]?.classList.add("active");

      thumbs.forEach((thumb, thumbIndex) => {
        const isActive = thumbIndex === index;

        gsap.to(thumb, {
          opacity: isActive ? 1 : 0,
          y: isActive ? 0 : 30,
          scale: isActive ? 1 : 0.8,
          zIndex: isActive ? 2 : 1,
          duration: 1,
          ease: "power3.out",
          overwrite: "auto",
        });
      });

      const line = services[index]?.querySelector<HTMLElement>(".line");

      if (line) {
        restartLineAnimation(line);
      }
    };

    const nextService = () => {
      current = (current + 1) % services.length;
      activateService(current);
    };

    const stopTimer = () => {
      if (timer !== null) {
        window.clearInterval(timer);
        timer = null;
      }
    };

    const startTimer = () => {
      timer = window.setInterval(nextService, duration);
    };

    const resetTimer = () => {
      stopTimer();
      startTimer();
    };

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

    activateService(current);
    startTimer();

    const listeners = services.map((service, index) => {
      const handleMouseEnter = () => {
        current = index;
        activateService(current);
        resetTimer();
      };

      service.addEventListener("mouseenter", handleMouseEnter);

      return {
        service,
        handleMouseEnter,
      };
    });

    let trigger: ScrollTrigger | null = null;

    if (window.innerWidth >= 1200) {
      trigger = ScrollTrigger.create({
        trigger: serviceInner,
        start: "top+=200 center",
        end: "bottom+=300 bottom",
        pin: serviceThumb,
        pinSpacing: false,
        scrub: true,
        invalidateOnRefresh: true,
        onEnter: stopTimer,
        onLeave: startTimer,
        onEnterBack: stopTimer,
        onLeaveBack: startTimer,
      });

      const refresh = () => ScrollTrigger.refresh(true);

      if (document.readyState === "complete") {
        refresh();
      } else {
        window.addEventListener("load", refresh, { once: true });
      }
    }

    return () => {
      stopTimer();

      listeners.forEach(({ service, handleMouseEnter }) => {
        service.removeEventListener("mouseenter", handleMouseEnter);
      });

      trigger?.kill();
    };
  }, wrapper);

  return () => {
    ctx.revert();
  };
};
