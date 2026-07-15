"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const innerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const inner = innerRef.current;
    const outer = outerRef.current;

    if (!inner || !outer) return;

    const moveCursor = (e: MouseEvent) => {
      outer.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      inner.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    const resetClasses = () => {
      inner.classList.remove(
        "cursor-big",
        "drag-cursor",
        "view-cursor",
        "play-cursor",
        "not-cursor-outer",
      );

      outer.classList.remove(
        "cursor-big",
        "drag-cursor",
        "view-cursor",
        "play-cursor",
        "not-cursor-outer",
      );
    };

    const applyClass = (cls: string, remove: string[] = []) => {
      resetClasses();

      const tokens = cls.split(" ").filter(Boolean);

      inner.classList.add(...tokens);
      outer.classList.add(...tokens);

      remove.forEach((r) => {
        inner.classList.remove(r);
        outer.classList.remove(r);
      });
    };

    const handleHover = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      if (target.closest(".drag-cursor")) {
        applyClass("cursor-big drag-cursor", ["view-cursor", "play-cursor"]);
        return;
      }

      if (target.closest(".view-cursor")) {
        applyClass("cursor-big view-cursor", ["drag-cursor", "play-cursor"]);
        return;
      }

      if (target.closest(".play-cursor")) {
        applyClass("cursor-big play-cursor", ["drag-cursor", "view-cursor"]);
        return;
      }

      if (target.closest(".not-cursor")) {
        resetClasses();
        inner.classList.add("not-cursor-outer");
        outer.classList.add("not-cursor-outer");
        return;
      }

      resetClasses();
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("pointermove", handleHover);

    inner.style.visibility = "visible";
    outer.style.visibility = "visible";

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("pointermove", handleHover);
    };
  }, []);

  return (
    <>
      <div ref={outerRef} className="mouseCursor cursor-outer" />
      <div ref={innerRef} className="mouseCursor cursor-inner">
        <span className="drag">drag</span>
        <span className="view">view</span>
        <span className="play">play</span>
      </div>
    </>
  );
}
