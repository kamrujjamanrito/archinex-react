import type { StaticImageData } from "next/image";
import avatarOne from "@/public/images/avatar/one.webp";
import avatarTwo from "@/public/images/avatar/two.webp";
import avatarThree from "@/public/images/avatar/three.webp";

export interface CommentReply {
  id: number;
}

export interface CommentItem {
  id: number;

  author: string;

  avatar: StaticImageData;

  avatarAlt: string;

  date: string;

  time: string;

  content: string;

  isReply?: boolean;

  reply?: CommentReply;
}

export const commentsData: CommentItem[] = [
  {
    id: 1,

    author: "Oliver Williams",

    avatar: avatarOne,

    avatarAlt: "Oliver Williams",

    date: "September 13, 2025",

    time: "10:14 AM",

    content:
      "Vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non.",

    reply: {
      id: 1,
    },
  },

  {
    id: 2,

    author: "David Parker",

    avatar: avatarTwo,

    avatarAlt: "David Parker",

    date: "September 13, 2025",

    time: "10:14 AM",

    content:
      "Vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non dignissimos ducimus qui blanditiis praesentium.",

    isReply: true,

    reply: {
      id: 2,
    },
  },

  {
    id: 3,

    author: "Claire Olson",

    avatar: avatarThree,

    avatarAlt: "Claire Olson",

    date: "September 13, 2025",

    time: "10:14 AM",

    content:
      "Vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non.",

    reply: {
      id: 3,
    },
  },
];
