import six from "@/public/images/projects/six.webp";
import seven from "@/public/images/projects/seven.webp";
import eight from "@/public/images/projects/eight.webp";
import nine from "@/public/images/projects/nine.webp";
import ten from "@/public/images/projects/ten.webp";
import { ProjectDetailsData } from "@/types/project-details.types";

export const projectDetailsData: ProjectDetailsData = {
  mapLink: "https://share.google/VXsdMDrd6Z5UvhC7E",

  intro:
    "We worked with Frame to design a clean, focused interior that showcases their visual-first collaboration tool. The interface emphasizes clarity, speed, and a modular layout to reflect the platform's creative flexibility.",

  info: [
    {
      label: "Client",
      value: "Edgeway Council",
    },
    {
      label: "Contributors",
      value: "Manor Torres, Julian Park, Aisha Rahman",
    },
    {
      label: "Category",
      value: "Interior Design",
    },
    {
      label: "Duration",
      value: "4 Month",
    },
  ],

  gallery: [
    {
      image: six,
      title:
        "Harmonious blend of traditional Balinese aesthetics and modern sustainability practices.",
    },
    {
      image: seven,
      description: [
        "Frame Index approached us with a vision to create a digital sanctuary—a place where sound, space, and wellness meet. Our task was to translate their immersive in-studio experience into a calming, intuitive web platform that resonates with their brand philosophy.",
        "We focused on creating spacious layouts, ambient transitions, and minimal interfaces to maintain a sense of stillness. The final site invites visitors to pause, explore, and reflect—just like the experience in a physical Frame Index.",
      ],
    },
    {
      image: eight,
    },
    {
      image: nine,
      title: "Designed for peaceful retreats and intimate getaways.",
    },
    {
      image: ten,
      description: [
        "Surrounded by lush greenery and mirror waters, this charming estate offers a perfect balance of comfort and natures beauty. The villa features warm, inviting interiors with rustic charm, including a snug living area with a fireplace, thoughtfully curated decor, and large windows.",
      ],
    },
  ],

  counters: [
    {
      title: "Digital Solutions Delivered",
      value: 100,
      suffix: "+",
    },
    {
      title: "Happy Clients",
      value: 30,
      suffix: "k",
    },
    {
      title: "Number of Awards",
      value: 99,
      suffix: "+",
    },
  ],
};
