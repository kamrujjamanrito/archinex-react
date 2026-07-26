import dynamic from "next/dynamic";
import type { Metadata } from "next";
import HeaderTwo from "@/components/layout/header/HeaderTwo";
import PartnerThree from "@/components/containers/PartnerThree";
import CounterThree from "@/components/containers/CounterThree";
import Transform from "@/components/containers/Transform";
import FooterTwo from "@/components/layout/footer/FooterTwo";

const HeroSectionTwo = dynamic(
  () => import("@/components/layout/banner/HeroSectionTwo"),
);
const AboutSectionTwo = dynamic(
  () => import("@/components/containers/AboutSectionTwo"),
);
const ServiceSectionTwo = dynamic(
  () => import("@/components/containers/ServiceSectionTwo"),
);
const Field = dynamic(() => import("@/components/containers/Field"));
const Team = dynamic(() => import("@/components/containers/Team"));
const Concept = dynamic(() => import("@/components/containers/Concept"));
const NewsSectionTwo = dynamic(
  () => import("@/components/containers/NewsSectionTwo"),
);
const InstagramFeed = dynamic(
  () => import("@/components/containers/InstagramFeed"),
);
const ClientWrapper = dynamic(() => import("@/components/ClientWrapper"));

export const generateMetadata = async (): Promise<Metadata> => ({
  title: "Home Two | Modern Architecture & Interior Design",
  description:
    "Discover Archinex, a modern React template for architecture and interior design websites.",
  keywords: ["architecture", "interior", "creative", "modern", "luxury"],
  openGraph: {
    url: "https://archinex.netlify.app/",
    siteName: "Archinex",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Archinex - Modern Architecture & Interior Design Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Archinex - Modern Architecture & Interior Design",
    description:
      "Modern React template for architecture, interior design, and creative portfolios.",
    images: ["/images/og-image.png"],
  },
});

const page = () => {
  return (
    <div className="page-wrapper">
      <HeaderTwo />
      <HeroSectionTwo />
      <AboutSectionTwo />
      <PartnerThree />
      <ServiceSectionTwo />
      <Field />
      <CounterThree />
      <Concept />
      <Team />
      <Transform />
      <NewsSectionTwo />
      <InstagramFeed />
      <FooterTwo />
      <ClientWrapper />
    </div>
  );
};

export default page;
