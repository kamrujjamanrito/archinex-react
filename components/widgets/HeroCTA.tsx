"use client";

import Image from "next/image";
import Link from "next/link";

import { heroTwoData } from "@/public/data/hero-two-data";

const HeroCTA = () => {
  const { cta } = heroTwoData;

  return (
    <div className="hero-two__cta">
      <Link href={cta.href}>
        <span>{cta.label}</span>

        <Image
          src={cta.icon.src}
          alt={cta.icon.alt}
          priority
        />
      </Link>
    </div>
  );
};

export default HeroCTA;