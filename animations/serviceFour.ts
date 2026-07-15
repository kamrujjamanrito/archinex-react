import { gsap } from "@/lib/gsap";

export function initServiceFour(): () => void {
  if (typeof window === "undefined") {
    return () => {};
  }

  const contexts: gsap.Context[] = [];

  document.querySelectorAll<HTMLElement>(".service-four").forEach((section) => {
    if (section.dataset.serviceFourAnimation === "true") {
      return;
    }

    section.dataset.serviceFourAnimation = "true";

    const wrappers = Array.from(
      section.querySelectorAll<HTMLElement>(".service-four__single-wrapper"),
    );

    if (!wrappers.length) {
      return;
    }

    const ctx = gsap.context(() => {
      wrappers.forEach((wrapper) => {
        const handleMouseEnter = () => {
          wrappers.forEach((item) => item.classList.remove("active"));
          wrapper.classList.add("active");
        };

        const handleMouseMove = (event: MouseEvent) => {
          const thumb = wrapper.querySelector<HTMLElement>(
            ".service-four-thumb",
          );

          if (!thumb) return;

          const rect = wrapper.getBoundingClientRect();

          const dx = rect.right - event.clientX;
          const dy = event.clientY - rect.top;

          gsap.set(thumb, {
            x: -dx,
            y: dy,
            rotation: 10,
            xPercent: 50,
            yPercent: -50,
          });
        };

        wrapper.addEventListener("mouseenter", handleMouseEnter);
        wrapper.addEventListener("mousemove", handleMouseMove);

        gsap.set(wrapper, {
          clearProps: "all",
        });

        return () => {
          wrapper.removeEventListener("mouseenter", handleMouseEnter);
          wrapper.removeEventListener("mousemove", handleMouseMove);
        };
      });
    }, section);

    contexts.push(ctx);
  });

  return () => {
    contexts.forEach((ctx) => ctx.revert());

    document
      .querySelectorAll<HTMLElement>(".service-four")
      .forEach((section) => {
        delete section.dataset.serviceFourAnimation;
      });
  };
}
