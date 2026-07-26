import serviceThumbTwo from "@/public/images/services/service-thumb-two.webp";
import serviceThumbThree from "@/public/images/services/service-thumb-three.webp";
import serviceThumbFour from "@/public/images/services/service-thumb-four.webp";
import serviceThumbFive from "@/public/images/services/service-thumb-five.webp";
import serviceThumbSix from "@/public/images/services/service-thumb-six.webp";
import serviceThumbSeven from "@/public/images/services/service-thumb-seven.webp";
import type { ServiceTwoData } from "@/types/service-two";

export const serviceTwoData: ServiceTwoData = {
  sectionTitle:
    "From blends design vision with purpose, creating vibrant spaces.",

  items: [
    {
      id: 1,
      subtitle: "(01)",
      title: "Interior design expertise",
      description:
        "Architectural design services provide for a variety of projects, from residential homes and commercial buildings to public spaces and infrastructure.",
      href: "/service-details",
      image: {
        src: serviceThumbTwo,
        alt: "Interior Design Expertise",
      },
    },

    {
      id: 2,
      subtitle: "(02)",
      title: "Architectural design solutions",
      description:
        "Interior design services enhance spaces with creative solutions, from modern apartments and offices to retail stores and hospitality environments.",
      href: "/service-details",
      image: {
        src: serviceThumbThree,
        alt: "Architectural Design Solutions",
      },
    },

    {
      id: 3,
      subtitle: "(03)",
      title: "Sustainable design insight",
      description:
        "Engineering consulting services support diverse developments, from structural planning and urban systems to transportation networks and industrial facilities.",
      href: "/service-details",
      image: {
        src: serviceThumbFour,
        alt: "Sustainable Design Insight",
      },
    },

    {
      id: 4,
      subtitle: "(04)",
      title: "Landscape renovation",
      description:
        "Construction management services oversee projects efficiently, from small renovations and housing units to large-scale commercial and infrastructure works.",
      href: "/service-details",
      image: {
        src: serviceThumbFive,
        alt: "Landscape Renovation",
      },
    },

    {
      id: 5,
      subtitle: "(05)",
      title: "Projects management",
      description:
        "Landscape design services transform outdoor environments, from private gardens and parks to public plazas and sustainable green spaces.",
      href: "/service-details",
      image: {
        src: serviceThumbSix,
        alt: "Projects Management",
      },
    },

    {
      id: 6,
      subtitle: "(06)",
      title: "Urban housing solutions",
      description:
        "Urban planning services guide city development strategically, from neighborhood layouts and zoning plans to smart cities and large infrastructure projects.",
      href: "/service-details",
      image: {
        src: serviceThumbSeven,
        alt: "Urban Housing Solutions",
      },
    },
  ],
};
