"use client";
import { useEffect } from "react";

const urls = [
  "https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css",
  "https://unpkg.com/@phosphor-icons/web@2.1.1/src/thin/style.css",
  "https://unpkg.com/@phosphor-icons/web@2.1.1/src/light/style.css",
  "https://unpkg.com/@phosphor-icons/web@2.1.1/src/fill/style.css",
];

export default function PhosphorLoader() {
  useEffect(() => {
    const links: HTMLLinkElement[] = [];

    urls.forEach((href) => {
      let link = document.querySelector(
        `link[href="${href}"]`,
      ) as HTMLLinkElement | null;

      if (!link) {
        link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;

        document.head.appendChild(link);
        links.push(link);
      }
    });

    return () => {
      links.forEach((link) => link.remove());
    };
  }, []);

  return null;
}
