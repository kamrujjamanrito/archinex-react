import type { HeroThreeData } from "@/types/hero-three";
import bgOne from "@/public/images/bg-one.webp";
import bgTwo from "@/public/images/bg-two.webp";
import bgThree from "@/public/images/bg-three.webp";

export const heroThreeData: HeroThreeData = {
  slides: [
    {
      id: 1,
      title: "Architectural",
      subtitle: "and visualisation bureau.",
      description:
        "Turning design into stunning visually realities renders, animations - virtual and others walkthroughs. Here concept becomes true with innovation.",
      buttonText: "View Properties",
      buttonLink: "/our-services",
      background: bgTwo,
    },
    {
      id: 2,
      title: "Urban",
      subtitle: "and planning consultancy.",
      description:
        "Transforming spaces into functional, aesthetic urban environments. We deliver design solutions that combine creativity, sustainability.",
      buttonText: "View Properties",
      buttonLink: "/our-services",
      background: bgOne,
    },
    {
      id: 3,
      title: "Interior",
      subtitle: "and bespoke styling services.",
      description:
        "Crafting interiors that blend style with comfort. Our team creates immersive living and working spaces through innovative design and attention to detail.",
      buttonText: "View Properties",
      buttonLink: "/our-services",
      background: bgThree,
    },
  ],

  socials: [
    {
      id: 1,
      icon: "ti ti-brand-facebook",
      href: "https://www.facebook.com/",
      label: "Facebook",
    },
    {
      id: 2,
      icon: "ti ti-brand-twitch",
      href: "https://www.twitch.tv/",
      label: "Twitch",
    },
    {
      id: 3,
      icon: "ti ti-brand-twitter",
      href: "https://x.com/",
      label: "Twitter",
    },
    {
      id: 4,
      icon: "ti ti-brand-pinterest",
      href: "https://www.pinterest.com/",
      label: "Pinterest",
    },
  ],
};
