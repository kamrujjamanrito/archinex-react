"use client";

import { gsap, ScrollTrigger } from "@/lib/gsap";

export function initProject(): () => void {
  if (typeof window === "undefined") {
    return () => {};
  }

  const ctx = gsap.context(() => {
    /*
    |--------------------------------------------------------------------------
    | Project Header Animation
    |--------------------------------------------------------------------------
    */

    const title = document.querySelector(".project-title");

    if (title) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".project",
          start: "top 70%",
          end: "top 10%",
          scrub: true,
        },
      });

      tl.to(
        ".project-title .o, .project-title .u",
        {
          x: 0,
          y: 0,
          ease: "power3.out",
        },
        0,
      )
        .to(
          ".project-title .our-wrapper",
          {
            right: 0,
            ease: "power3.out",
          },
          0,
        )
        .to(
          ".project-title .r",
          {
            scale: 1,
            y: 0,
            marginLeft: 0,
            marginRight: 0,
            ease: "power3.out",
          },
          0,
        )
        .to(
          ".project-title sup",
          {
            top: "-1.3em",
            left: 0,
            ease: "power3.out",
          },
          0,
        );
    }

    /*
    |--------------------------------------------------------------------------
    | Desktop Only
    |--------------------------------------------------------------------------
    */

    const mm = gsap.matchMedia();

    mm.add("(min-width:992px)", () => {
      const sections =
        gsap.utils.toArray<HTMLElement>(".project__single");

      const refreshHeights = () => {
        sections.forEach((section) => {
          const intro =
            section.querySelector<HTMLElement>(
              ".project__single-intro",
            );

          const thumb =
            section.querySelector<HTMLElement>(
              ".project__single-thumb",
            );

          if (!intro || !thumb) return;

          const thumbHeight =
            window.innerHeight - (intro.offsetHeight + 20);

          thumb.style.height = `${thumbHeight}px`;

          gsap.set(
            section.querySelectorAll(".char.odd"),
            {
              y: thumbHeight / 2,
            },
          );
        });

        ScrollTrigger.refresh();
      };

      /*
      |--------------------------------------------------------------------------
      | Split Overlay Title
      |--------------------------------------------------------------------------
      */

      sections.forEach((section) => {
        const heading =
          section.querySelector<HTMLElement>(
            ".project__single-content .title-xl",
          );

        if (!heading) return;

        const text = heading.textContent ?? "";

        heading.innerHTML = "";

        [...text].forEach((letter, index) => {
          const span = document.createElement("span");

          span.className = `char ${
            index % 2 === 0 ? "even" : "odd"
          }`;

          span.textContent = letter;

          heading.appendChild(span);
        });
      });

      /*
      |--------------------------------------------------------------------------
      | Pin Sections
      |--------------------------------------------------------------------------
      */

      sections.forEach((section) => {
        const intro =
          section.querySelector<HTMLElement>(
            ".project__single-intro",
          );

        const thumb =
          section.querySelector<HTMLElement>(
            ".project__single-thumb",
          );

        const image =
          thumb?.querySelector<HTMLImageElement>("img");

        const charsOdd =
          section.querySelectorAll(".char.odd");

        const charsEven =
          section.querySelectorAll(".char.even");

        if (!intro || !thumb || !image) return;

        const thumbHeight =
          window.innerHeight - (intro.offsetHeight + 20);

        thumb.style.height = `${thumbHeight}px`;

        gsap.set(charsEven, {
          y: 0,
        });

        gsap.set(charsOdd, {
          y: thumbHeight / 2,
        });

        gsap.set(image, {
          scaleX: 1,
          scaleY: 1,
        });

        gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=90%",
            scrub: true,
            pin: true,
            pinSpacing: true,
          },
        })
          .to(
            charsOdd,
            {
              y: 0,
              ease: "power3.out",
            },
            0,
          )
          .to(
            image,
            {
              scaleX: 1.05,
              scaleY: 1.02,
              ease: "power1.out",
            },
            0,
          );
      });

      refreshHeights();

      window.addEventListener(
        "resize",
        refreshHeights,
      );

      return () => {
        window.removeEventListener(
          "resize",
          refreshHeights,
        );
      };
    });
  });

  return () => {
    ctx.revert();
  };
}