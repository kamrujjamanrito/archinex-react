"use client";
import Image from "next/image";
import { useTheme } from "@/hooks/useTheme";

import logo from "@/public/images/logo-sm.svg";
import logoDark from "@/public/images/logo-sm-light.svg";

export default function LogoSm() {
  const { theme } = useTheme();

  return <Image src={theme === "dark" ? logoDark : logo} alt="Logo" priority />;
}
