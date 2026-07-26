"use client";

import { gsap } from "@/lib/gsap";

export function initField(): () => void {
  if (typeof window === "undefined") {
    return () => {};
  }

  const ctx = gsap.context(() => {
    if (window.innerWidth <= 576) {
      return;
    }

    const items = gsap.utils.toArray<HTMLElement>(".field__single");

    if (!items.length) return;

    const cleanups: Array<() => void> = [];

    items.forEach((item) => {
      const thumb = item.querySelector<HTMLElement>(".field-thumb");

      if (!thumb) return;

      let targetX = 0;
      let targetY = 0;

      let currentX = 0;
      let currentY = 0;

      let animationFrame = 0;

      const setX = gsap.quickSetter(thumb, "x", "px");
      const setY = gsap.quickSetter(thumb, "y", "px");

      const animate = () => {
        currentX += (targetX - currentX) * 0.1;
        currentY += (targetY - currentY) * 0.1;

        setX(currentX);
        setY(currentY);

        animationFrame = requestAnimationFrame(animate);
      };

      animate();

      const handleMouseMove = (event: MouseEvent) => {
        const rect = item.getBoundingClientRect();

        targetX = event.clientX - rect.left;
        targetY = event.clientY - rect.top;
      };

      item.addEventListener("mousemove", handleMouseMove);

      cleanups.push(() => {
        cancelAnimationFrame(animationFrame);
        item.removeEventListener("mousemove", handleMouseMove);
      });
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  });

  return () => {
    ctx.revert();
  };
}
