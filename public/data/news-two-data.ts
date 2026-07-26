import newsOne from "@/public/images/news/one.webp";
import newsTwo from "@/public/images/news/two.webp";
import newsThree from "@/public/images/news/three.webp";

export const newsData = {
  intro: "/ Blogs",

  title: "Insights & Inspirations",

  button: {
    label: "Discover All",
    href: "/news",
  },

  items: [
    {
      id: 1,
      image: newsOne,
      alt: "The Power of Natural Light in Architectural Design",
      date: "MARCH 12, 2025",
      category: "Improvement",
      title: "The Power of Natural Light in Architectural Design",
      detailsHref: "/news-details",
    },

    {
      id: 2,
      image: newsTwo,
      alt: "Your Guide to Finding a Dream Home",
      date: "MARCH 12, 2025",
      category: "Improvement",
      title: "Your Guide to Finding a Dream Home",
      detailsHref: "/news-details",
    },

    {
      id: 3,
      image: newsThree,
      alt: "Current State of the Real Estate Market",
      date: "MARCH 12, 2025",
      category: "Improvement",
      title: "Current State of the Real Estate Market",
      detailsHref: "/news-details",
    },
  ],
};
