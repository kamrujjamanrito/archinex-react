"use client";

import { useCallback, useSyncExternalStore } from "react";

export type Theme = "light" | "dark";

let theme: Theme = "light";
let initialized = false;

const subscribers = new Set<() => void>();

const notify = () => {
  subscribers.forEach((callback) => callback());
};

const getSnapshot = () => theme;

const getServerSnapshot = (): Theme => "light";

const subscribe = (callback: () => void) => {
  subscribers.add(callback);

  return () => {
    subscribers.delete(callback);
  };
};

const applyTheme = (value: Theme) => {
  theme = value;

  document.body.classList.toggle("dark-mode", value === "dark");

  localStorage.setItem("theme", value);

  notify();
};

const initialize = () => {
  if (initialized || typeof window === "undefined") {
    return;
  }

  initialized = true;

  theme = localStorage.getItem("theme") === "dark" ? "dark" : "light";

  document.body.classList.toggle("dark-mode", theme === "dark");

  window.addEventListener("storage", (event) => {
    if (event.key !== "theme") return;

    applyTheme(event.newValue === "dark" ? "dark" : "light");
  });
};

export function useTheme() {
  initialize();

  const currentTheme = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const toggleTheme = useCallback(() => {
    applyTheme(getSnapshot() === "dark" ? "light" : "dark");
  }, []);

  return {
    theme: currentTheme,
    toggleTheme,
  };
}
