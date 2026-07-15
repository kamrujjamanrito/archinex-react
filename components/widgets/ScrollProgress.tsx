"use client";
import { useEffect, useRef } from "react";

const OFFSET = 50;
const DURATION = 1500;

export default function ScrollProgress() {
  const progressWrapRef = useRef<HTMLButtonElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const progressWrap = progressWrapRef.current;
    const progressPath = pathRef.current;

    if (!progressWrap || !progressPath) return;

    const pathLength = progressPath.getTotalLength();

    progressPath.style.transition = "none";
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = `${pathLength}`;

    progressPath.getBoundingClientRect();

    progressPath.style.transition = "stroke-dashoffset 10ms linear";

    const update = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;

      const progress = pathLength - (scrollTop * pathLength) / height;

      progressPath.style.strokeDashoffset = `${progress}`;

      const isMobile = window.matchMedia("(max-width: 991px)").matches;

      if (!isMobile) {
        progressWrap.classList.toggle("active-progress", scrollTop > OFFSET);
      } else {
        const scrollingUp = scrollTop < lastScrollTop.current;

        progressWrap.classList.toggle(
          "active-progress",
          scrollingUp && scrollTop > OFFSET,
        );

        lastScrollTop.current = Math.max(scrollTop, 0);
      }
    };

    update();

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();

    document.documentElement.style.scrollBehavior = "auto";

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    window.setTimeout(() => {
      document.documentElement.style.scrollBehavior = "smooth";
    }, DURATION);
  };

  return (
    <button
      ref={progressWrapRef}
      className="progress-wrap back-to-top"
      aria-label="Back to top"
      title="Back to top"
      onClick={scrollToTop}
    >
      <span />
      <svg
        className="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path ref={pathRef} d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </button>
  );
}
