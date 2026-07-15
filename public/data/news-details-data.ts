import type { StaticImageData } from "next/image";

import posterSmall from "@/public/images/news/poster-sm.webp";
import thumbLeft from "@/public/images/news/thumb-left.webp";
import thumbRight from "@/public/images/news/thumb-right.webp";
import quoteIcon from "@/public/images/news/quote.webp";

export interface NewsContentSection {
  id: number;

  title: string;

  paragraphs: string[];

  list?: {
    title: string;

    description: string;
  }[];

  image?: StaticImageData;

  imageAlt?: string;

  imageClass?: string;
}

export interface NewsQuote {
  quote: string;

  author: string;

  icon: StaticImageData;

  iconAlt: string;
}

export interface NewsMeta {
  author: string;

  date: string;

  tags: {
    id: number;

    title: string;

    href: string;
  }[];
}

export interface NewsDetails {
  title: string;

  sections: NewsContentSection[];

  gallery: {
    left: StaticImageData;

    leftAlt: string;

    right: StaticImageData;

    rightAlt: string;
  };

  quote: NewsQuote;

  meta: NewsMeta;
}

export const newsDetails: NewsDetails = {
  title: "Sustainable Architecture",

  sections: [
    {
      id: 1,

      title: "Sustainable Architecture",

      paragraphs: [
        "In a world where climate change environmental concerns are becoming more pressing, sustainable architecture has transitioned from a trend to necessity. Architects, engineers, and urban planners are embracing eco-friendly solutions to design buildings that are not only functional and beautiful but also energy-efficient and environmentally responsible.",

        "Sustainable architecture focuses on reducing environmental impact, maximizing energy efficiency, and enhancing occupant well-being. The key principles that guide modern sustainable design.",
      ],
    },

    {
      id: 2,

      title: "The Principles of Architecture",

      paragraphs: [
        "Sustainable architecture focuses on reducing environmental impact, maximizing energy efficiency, and enhancing occupant well-being. The key principles that guide modern sustainable design.",
      ],

      list: [
        {
          title: "Energy Efficiency",

          description:
            "Using passive design strategies, solar panels, smart energy systems, sustainable building materials, and advanced insulation technologies to minimize energy consumption.",
        },

        {
          title: "Eco-Friendly Materials",

          description:
            "Incorporating recycled, biodegradable, and locally sourced materials to reduce the carbon footprint of construction while promoting circular economy principles and long-term environmental.",
        },

        {
          title: "Water Conservation",

          description:
            "Implementing rainwater harvesting, greywater recycling, and water-efficient fixtures to reduce water wastage, lower costs, and conserve resources.",
        },

        {
          title: "Green Spaces & Biophilic Design",

          description:
            "Integrating plants, green walls, and open spaces to improve air quality and enhance human well-being, productivity, comfort, and overall environmental.",
        },
      ],

      image: posterSmall,

      imageAlt: "Architecture Poster",

      imageClass: "poster-sm",
    },

    {
      id: 3,

      title: "The Future of Architecture",

      paragraphs: [
        "Our project has had a remarkable impacts on both its residents and the surrounding community. The integration of lush green spaces and sustainable designs has improved the air quality in the area, reducing the urban heat island effect and fostering a more comfortable living environment. The presence of biodiversity-enhancing elements, such as native plants and wildlife-friendly features, has created a space that celebrates nature while supporting local ecosystems.",
      ],
    },

    {
      id: 4,

      title: "Final Thoughts",

      paragraphs: [
        "Our project has had a remarkable impacts on both its residents and the surrounding community. The integration of lush green spaces and sustainable designs has improved the air quality in the area, reducing the urban heat island effect and fostering a more comfortable living environment. The presence of biodiversity-enhancing elements, such as native plants and wildlife-friendly features, has created a space that celebrates nature while supporting local ecosystems.",

        "Would you like any modifications or additional details?",
      ],
    },
  ],

  gallery: {
    left: thumbLeft,

    leftAlt: "Architecture",

    right: thumbRight,

    rightAlt: "Building",
  },

  quote: {
    quote:
      "Success is the result of perfection, hardwork, learning from failure, loyalty, and persistence",

    author: "Robert Martinez",

    icon: quoteIcon,

    iconAlt: "Quote",
  },

  meta: {
    author: "Martin Luthar",

    date: "March 6, 2026",

    tags: [
      {
        id: 1,

        title: "Residential",

        href: "/news",
      },

      {
        id: 2,

        title: "Design",

        href: "/news",
      },

      {
        id: 3,

        title: "Architecture",

        href: "/news",
      },
    ],
  },
};
