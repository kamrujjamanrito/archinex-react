import type { StaticImageData } from "next/image";
import buildingImage from "@/public/images/building.webp";
import seven from "@/public/images/news/seven.webp";
import eight from "@/public/images/news/eight.webp";
import nine from "@/public/images/news/nine.webp";
import ten from "@/public/images/news/ten.webp";
import eleven from "@/public/images/news/eleven.webp";
import twelve from "@/public/images/news/twelve.webp";
import thirteen from "@/public/images/news/thirteen.webp";
import fourteen from "@/public/images/news/fourteen.webp";
import fifteen from "@/public/images/news/fifteen.webp";

export type NewsCategory = "company" | "social-p" | "uncategorized";

export interface BreadcrumbItem {
  id: number;
  title: string;
  href?: string;
}

export interface NewsBanner {
  title: string;
  breadcrumb: BreadcrumbItem[];
  image: StaticImageData;
  imageAlt: string;
}

export interface NewsFilter {
  id: number;
  title: string;
  filter: "*" | NewsCategory;
}

export interface NewsTag {
  id: number;
  title: string;
  href: string;
}

export interface NewsItem {
  id: number;

  title: string;

  href: string;

  image: StaticImageData;

  imageAlt: string;

  author: string;

  category: NewsCategory;

  tags: NewsTag[];
}

export const newsBanner: NewsBanner = {
  title: "Blog Grid",

  breadcrumb: [
    {
      id: 1,
      title: "Home",
      href: "/",
    },
    {
      id: 2,
      title: "Latest News",
    },
  ],

  image: buildingImage,

  imageAlt: "Building",
};

export const newsFilters: NewsFilter[] = [
  {
    id: 1,
    title: "All Posts",
    filter: "*",
  },
  {
    id: 2,
    title: "Company",
    filter: "company",
  },
  {
    id: 3,
    title: "Social Media",
    filter: "social-p",
  },
  {
    id: 4,
    title: "Uncategorized",
    filter: "uncategorized",
  },
];

export const newsData: NewsItem[] = [
  {
    id: 1,
    title: "How to handle the architecture in Euros for best reality",
    href: "/news-details",
    image: seven,
    imageAlt: "Architecture",
    author: "Jennifer Afrose",
    category: "uncategorized",
    tags: [
      {
        id: 1,
        title: "Insight",
        href: "/news",
      },
      {
        id: 2,
        title: "Press",
        href: "/news",
      },
    ],
  },

  {
    id: 2,
    title: "Top 10 Wooden Architecture Building 2025",
    href: "/news-details",
    image: eight,
    imageAlt: "Wooden Architecture",
    author: "Jennifer Afrose",
    category: "company",
    tags: [
      {
        id: 1,
        title: "Insight",
        href: "/news",
      },
    ],
  },

  {
    id: 3,
    title: "The Impact of Interior Design on Well-being",
    href: "/news-details",
    image: nine,
    imageAlt: "Interior Design",
    author: "Jennifer Afrose",
    category: "social-p",
    tags: [
      {
        id: 1,
        title: "Insight",
        href: "/news",
      },
    ],
  },

  {
    id: 4,
    title: "Design That Speaks How Interiors Shape Emotion",
    href: "/news-details",
    image: ten,
    imageAlt: "Interior Emotion",
    author: "Jennifer Afrose",
    category: "uncategorized",
    tags: [
      {
        id: 1,
        title: "Press",
        href: "/news",
      },
    ],
  },

  {
    id: 5,
    title: "How Minimalism Shapes Modern Interior Design",
    href: "/news-details",
    image: eleven,
    imageAlt: "Minimal Interior",
    author: "Jennifer Afrose",
    category: "company",
    tags: [
      {
        id: 1,
        title: "Insight",
        href: "/news",
      },
    ],
  },

  {
    id: 6,
    title: "How to Choose the Right Interior Design Agency",
    href: "/news-details",
    image: twelve,
    imageAlt: "Interior Agency",
    author: "Jennifer Afrose",
    category: "social-p",
    tags: [
      {
        id: 1,
        title: "Insight",
        href: "/news",
      },
      {
        id: 2,
        title: "Press",
        href: "/news",
      },
    ],
  },

  {
    id: 7,
    title: "From Blueprint to Breathtaking The Home Reveal",
    href: "/news-details",
    image: thirteen,
    imageAlt: "Blueprint",
    author: "Jennifer Afrose",
    category: "company",
    tags: [
      {
        id: 1,
        title: "Insight",
        href: "/news",
      },
    ],
  },

  {
    id: 8,
    title: "Behind the Scenes of a Full-Home Makeover",
    href: "/news-details",
    image: fourteen,
    imageAlt: "Home Makeover",
    author: "Jennifer Afrose",
    category: "social-p",
    tags: [
      {
        id: 1,
        title: "Press",
        href: "/news",
      },
    ],
  },

  {
    id: 9,
    title: "Small Space Design Tips That Actually Work",
    href: "/news-details",
    image: fifteen,
    imageAlt: "Small Space",
    author: "Jennifer Afrose",
    category: "uncategorized",
    tags: [
      {
        id: 1,
        title: "Insight",
        href: "/news",
      },
    ],
  },
];
