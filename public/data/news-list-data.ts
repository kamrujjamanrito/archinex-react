import type { StaticImageData } from "next/image";
import seven from "@/public/images/news/seven.webp";
import eight from "@/public/images/news/eight.webp";
import nine from "@/public/images/news/nine.webp";
import phOne from "@/public/images/news/ph-one.webp";
import phTwo from "@/public/images/news/ph-two.webp";
import phThree from "@/public/images/news/ph-three.webp";

export interface NewsTag {
  id: number;
  title: string;
  href: string;
}

export interface NewsListItem {
  id: number;

  title: string;

  excerpt: string;

  href: string;

  image: StaticImageData;

  imageAlt: string;

  author: string;

  date: string;

  tags: NewsTag[];
}

export interface SidebarCategory {
  id: number;

  title: string;

  href: string;
}

export interface RecentPost {
  id: number;

  title: string;

  date: string;

  href: string;

  image: StaticImageData;

  imageAlt: string;
}

export interface PopularTag {
  id: number;

  title: string;

  href: string;
}

export const newsListData: NewsListItem[] = [
  {
    id: 1,
    title: "How to handle the architecture in Euros for best reality",
    excerpt:
      "Are you tired of feeling cramped in your bathroom? It's easy for this essential space to become cluttered and difficult to navigate, especially in smaller homes or apartments...",
    href: "/news-details",
    image: seven,
    imageAlt: "Architecture",
    author: "Jennifer Afrose",
    date: "Dec 5, 2024",
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
    excerpt:
      "Are you tired of feeling cramped in your bathroom? It's easy for this essential space to become cluttered and difficult to navigate, especially in smaller homes or apartments...",
    href: "/news-details",
    image: eight,
    imageAlt: "Wooden Architecture",
    author: "Jennifer Afrose",
    date: "Dec 5, 2024",
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
    id: 3,
    title: "The Impact of Interior Design on Well-being",
    excerpt:
      "Are you tired of feeling cramped in your bathroom? It's easy for this essential space to become cluttered and difficult to navigate, especially in smaller homes or apartments...",
    href: "/news-details",
    image: nine,
    imageAlt: "Interior Design",
    author: "Jennifer Afrose",
    date: "Dec 5, 2024",
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
];

export const sidebarCategories: SidebarCategory[] = [
  {
    id: 1,
    title: "Residential Development",
    href: "/news-details",
  },
  {
    id: 2,
    title: "Urban Planning",
    href: "/news-details",
  },
  {
    id: 3,
    title: "Commercial Building",
    href: "/news-details",
  },
  {
    id: 4,
    title: "Hospitality Plan",
    href: "/news-details",
  },
  {
    id: 5,
    title: "Construction Projects",
    href: "/news-details",
  },
  {
    id: 6,
    title: "Multipurpose Ventures",
    href: "/news-details",
  },
];

export const recentPosts: RecentPost[] = [
  {
    id: 1,
    title: "Top digital marketing trends for 2025 business.",
    date: "13 Jan 2026",
    href: "/news-details",
    image: phOne,
    imageAlt: "Digital Marketing",
  },
  {
    id: 2,
    title: "Planning tips for every entrepreneur should know.",
    date: "12 Aug 2026",
    href: "/news-details",
    image: phTwo,
    imageAlt: "Planning",
  },
  {
    id: 3,
    title: "How strategic consulting drives business growth.",
    date: "24 Apr 2026",
    href: "/news-details",
    image: phThree,
    imageAlt: "Consulting",
  },
];

export const popularTags: PopularTag[] = [
  {
    id: 1,
    title: "SEO marketing",
    href: "/news-details",
  },
  {
    id: 2,
    title: "Design",
    href: "/news-details",
  },
  {
    id: 3,
    title: "UI/UX",
    href: "/news-details",
  },
  {
    id: 4,
    title: "Branding",
    href: "/news-details",
  },
  {
    id: 5,
    title: "Development",
    href: "/news-details",
  },
];
