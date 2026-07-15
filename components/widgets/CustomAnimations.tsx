"use client";

import { useEffect } from "react";
import { initAnimations } from "@/animations";

export default function CustomAnimations() {
  useEffect(() => {
    const cleanup = initAnimations();

    return () => cleanup?.();
  }, []);

  return null;
}
