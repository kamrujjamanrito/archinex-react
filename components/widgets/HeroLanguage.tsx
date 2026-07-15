"use client";

import { heroTwoData } from "@/public/data/hero-two-data";

const HeroLanguage = () => {
  const { language } = heroTwoData;

  return (
    <div className="hero-two__lang">
      <button type="button">
        {language.primary}
      </button>

      <span className="divider-c">/</span>

      <button type="button">
        {language.secondary}
      </button>
    </div>
  );
};

export default HeroLanguage;