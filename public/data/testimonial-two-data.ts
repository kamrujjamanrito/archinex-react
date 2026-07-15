import avatarFour from "@/public/images/avatar/four.webp";
import avatarFive from "@/public/images/avatar/five.webp";
import avatarSix from "@/public/images/avatar/six.webp";
import avatarSeven from "@/public/images/avatar/seven.webp";

import type { TestimonialTwoData } from "@/types/testimonial-two";

export const testimonialTwoData: TestimonialTwoData = {
  subtitle: "(Our Testimonial)",

  title: "Clients Feedbacks",

  testimonials: [
    {
      id: 1,

      quote:
        "My pleasure that my first home has been decorated totally free. They explained every step clearly and were always available for questions. So I highly recommend!",

      author: {
        name: "Michael Reynolds",
        designation: "Software Engineer",
        image: avatarFour,
        alt: "Michael Reynolds",
      },
    },

    {
      id: 2,

      quote:
        "My pleasure that my first home has been decorated totally free. They explained every step clearly and were always available for questions. So I highly recommend!",

      author: {
        name: "Liam Carter",
        designation: "Urban Design Architect",
        image: avatarFive,
        alt: "Liam Carter",
      },
    },

    {
      id: 3,

      quote:
        "My pleasure that my first home has been decorated totally free. They explained every step clearly and were always available for questions. So I highly recommend!",

      author: {
        name: "Noah Bennett",
        designation: "Construction Planner",
        image: avatarSix,
        alt: "Noah Bennett",
      },
    },

    {
      id: 4,

      quote:
        "My pleasure that my first home has been decorated totally free. They explained every step clearly and were always available for questions. So I highly recommend!",

      author: {
        name: "Lucas Hayes",
        designation: "Infrastructure Specialist",
        image: avatarSeven,
        alt: "Lucas Hayes",
      },
    },
  ],
};