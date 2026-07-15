"use client";
import { useTheme } from "@/hooks/useTheme";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-switcher">
      <button
        type="button"
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        <i className={theme === "dark" ? "ti ti-sun" : "ti ti-moon"} />
      </button>
    </div>
  );
}
