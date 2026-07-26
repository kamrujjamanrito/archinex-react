"use client";
import Image from "next/image";
import { useTheme } from "@/hooks/useTheme";
import logo from "@/public/images/logo.svg";
import logoDark from "@/public/images/logo-light.svg";

export default function Logo() {
  const { theme } = useTheme();

  return <Image src={theme === "dark" ? logoDark : logo} alt="Logo" priority />;
}
