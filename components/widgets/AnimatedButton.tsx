"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AnimatedButton() {
  const pathname = usePathname();

  useEffect(() => {
    const buttons =
      document.querySelectorAll<HTMLElement>(".btn-animated-text");

    buttons.forEach((button) => {
      if (button.dataset.animated === "true") return;

      const text = button.dataset.text?.trim() || button.textContent?.trim();

      if (!text) return;

      button.dataset.animated = "true";

      const fragment = document.createDocumentFragment();

      for (const char of text) {
        const span = document.createElement("span");

        const value = char === " " ? "\u00A0" : char;

        span.dataset.text = value;
        span.textContent = value;

        fragment.appendChild(span);
      }

      button.replaceChildren(fragment);
    });
  }, [pathname]);

  return null;
}
