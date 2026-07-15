import homeOne from "@/public/images/home-one.webp";
import homeTwo from "@/public/images/home-two.webp";
import homeThree from "@/public/images/home-three.webp";
import homeFour from "@/public/images/home-four.webp";

const NavbarData = [
  {
    title: "Home",
    path: "/",
    megabar: [
      {
        title: "Architecture Solution",
        path: "/",
        image: homeOne,
      },
      {
        title: "Architecture Studio",
        path: "index-two",
        image: homeTwo,
      },
      {
        title: "Architecture Bureau",
        path: "index-three",
        image: homeThree,
      },
      {
        title: "Interior Studio",
        path: "index-four",
        image: homeFour,
      },
    ],
  },
  {
    title: "Home",
    path: "/",
    submenu: [
      {
        title: "Architecture Solution",
        path: "/",
      },
      {
        title: "Architecture Studio",
        path: "index-two",
      },
      {
        title: "Architecture Bureau",
        path: "index-three",
      },
      {
        title: "Interior Studio",
        path: "index-four",
      },
    ],
  },
  {
    title: "About",
    path: "about-us",
  },
  {
    title: "Services",
    path: "our-services",
    submenu: [
      {
        title: "Services",
        path: "our-services",
      },
      {
        title: "Service Details",
        path: "service-details",
      },
    ],
  },
  {
    title: "Projects",
    path: "our-projects",
    submenu: [
      {
        title: "Portfolio",
        path: "our-projects",
      },
      {
        title: "Portfolio Details",
        path: "project-details",
      },
    ],
  },
  {
    title: "Pages",
    path: "about-us",
    submenu: [
      {
        title: "About",
        path: "about-us",
      },
      {
        title: "Contact Us",
        path: "contact-us",
      },
      {
        title: "Our Team",
        path: "our-team",
      },
      {
        title: "Coming Soon",
        path: "coming-soon",
      },
      {
        title: "Error",
        path: "error",
      },
    ],
  },

  {
    title: "News",
    path: "news",
    submenu: [
      {
        title: "News",
        path: "news",
      },
      {
        title: "News List",
        path: "news-list",
      },
      {
        title: "News Details",
        path: "news-details",
      },
    ],
  },
];

export default NavbarData;
