import dynamic from "next/dynamic";
import type { Metadata } from "next";
import HeaderThree from "@/components/layout/header/HeaderThree";
import FooterThree from "@/components/layout/footer/FooterThree";
import HeroSectionThree from "@/components/layout/banner/HeroSectionThree";
import AboutSectionThree from "@/components/containers/AboutSectionThree";
import ServiceThree from "@/components/containers/ServiceThree";
import Project from "@/components/containers/Project";
import WorkTwo from "@/components/containers/WorkTwo";
import TeamThree from "@/components/containers/TeamThree";
import TestimonialTwo from "@/components/containers/TestimonialTwo";
import PartnerTwo from "@/components/containers/PartnerTwo";
import Newsletter from "@/components/containers/Newsletter";

const ProjectSlider = dynamic(
  () => import("@/components/containers/ProjectSlider"),
);
const ClientWrapper = dynamic(() => import("@/components/ClientWrapper"));

export const generateMetadata = async (): Promise<Metadata> => ({
  title: "Home Three | Modern Architecture & Interior Design",
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
      <HeaderThree />
      <HeroSectionThree />
      <AboutSectionThree />
      <ServiceThree />
      <Project />
      <WorkTwo />
      <ProjectSlider />
      <TeamThree />
      <TestimonialTwo />
      <PartnerTwo />
      <Newsletter />
      <FooterThree />
      <ClientWrapper />
    </div>
  );
};

export default page;
