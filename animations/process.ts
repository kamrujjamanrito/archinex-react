import { gsap } from "@/lib/gsap";

export function initProcess(): () => void {
  if (typeof window === "undefined") {
    return () => {};
  }

  const ctx = gsap.context(() => {
    const section = document.querySelector<HTMLElement>(".process");

    if (!section) return;

    const tabs = Array.from(
      section.querySelectorAll<HTMLElement>(".process-tab-btn"),
    );

    const contents = Array.from(
      section.querySelectorAll<HTMLElement>(".proces__inner-left-tab"),
    );

    const thumbs = Array.from(
      section.querySelectorAll<HTMLElement>(
        ".process__inner-right-thumb-single",
      ),
    );

    if (!tabs.length || !contents.length || !thumbs.length) {
      return;
    }

    let currentIndex = 0;
    let progressTimer: number | undefined;

    const duration = 10000;

    gsap.set(contents, {
      opacity: 0,
      y: 50,
      scale: 0.95,
    });

    gsap.set(thumbs, {
      opacity: 0,
      y: 50,
      scale: 0.9,
    });

    gsap.set(contents[0], {
      opacity: 1,
      y: 0,
      scale: 1,
    });

    gsap.set(thumbs[0], {
      opacity: 1,
      y: 0,
      scale: 1,
    });

    const startProgress = () => {
      if (progressTimer !== undefined) {
        window.clearTimeout(progressTimer);
      }

      const activeTab = tabs[currentIndex];
      const line = activeTab.querySelector<HTMLElement>(".line");

      if (line) {
        line.style.animation = "none";

        void line.offsetHeight;

        line.style.animation = "";
      }

      progressTimer = window.setTimeout(() => {
        const nextIndex = (currentIndex + 1) % tabs.length;
        activateTab(nextIndex);
      }, duration);
    };

    const activateTab = (index: number) => {
      currentIndex = index;

      tabs.forEach((tab) => tab.classList.remove("active"));
      contents.forEach((content) => content.classList.remove("active"));
      thumbs.forEach((thumb) => thumb.classList.remove("active"));

      tabs[index].classList.add("active");

      contents.forEach((content, i) => {
        gsap.to(content, {
          opacity: i === index ? 1 : 0,
          y: i === index ? 0 : 80,
          scale: i === index ? 1 : 0.95,
          duration: 0.6,
          ease: "power3.out",
        });
      });

      thumbs.forEach((thumb, i) => {
        gsap.to(thumb, {
          opacity: i === index ? 1 : 0,
          y: i === index ? 0 : 150,
          scale: i === index ? 1 : 0.85,
          zIndex: i === index ? 2 : 1,
          duration: 0.8,
          ease: "power3.out",
        });
      });

      startProgress();
    };

    // Store handlers so they can be removed later
    const handlers = tabs.map((tab, index) => {
      const handler = () => activateTab(index);
      tab.addEventListener("mouseenter", handler);
      return { tab, handler };
    });

    activateTab(0);

    return () => {
      if (progressTimer !== undefined) {
        window.clearTimeout(progressTimer);
      }

      handlers.forEach(({ tab, handler }) => {
        tab.removeEventListener("mouseenter", handler);
      });
    };
  });

  return () => {
    ctx.revert();
  };
}
