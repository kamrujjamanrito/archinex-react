import dynamic from "next/dynamic";
import type { Metadata } from "next";
import HeaderFour from "@/components/layout/header/HeaderFour";
import HeroSectionFour from "@/components/layout/banner/HeroSectionFour";
import AboutSectionFour from "@/components/containers/AboutSectionFour";
import ServiceSectionFour from "@/components/containers/ServiceSectionFour";
import Creative from "@/components/containers/Creative";
import CounterTwo from "@/components/containers/CounterTwo";
import Marquee from "@/components/containers/Marquee";
import NewsFour from "@/components/containers/NewsFour";
import FooterFour from "@/components/layout/footer/FooterFour";

const ProjectFour = dynamic(
  () => import("@/components/containers/ProjectFour"),
);
const OverviewThree = dynamic(
  () => import("@/components/containers/OverviewThree"),
);
const ClientWrapper = dynamic(() => import("@/components/ClientWrapper"));

export const generateMetadata = async (): Promise<Metadata> => ({
  title: "Home Four | Modern Architecture & Interior Design",
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
      <HeaderFour />
      <HeroSectionFour />
      <AboutSectionFour />
      <ServiceSectionFour />
      <ProjectFour />
      <Creative />
      <CounterTwo />
      <OverviewThree />
      <Marquee />
      <NewsFour />
      <FooterFour />
      <ClientWrapper />
    </div>
  );
};

export default page;
