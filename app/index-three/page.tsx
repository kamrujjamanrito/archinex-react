import dynamic from "next/dynamic";
import type { Metadata } from "next";
import HeaderThree from "@/components/layout/header/HeaderThree";
import AboutSectionThree from "@/components/containers/AboutSectionThree";
import PartnerTwo from "@/components/containers/PartnerTwo";
import Newsletter from "@/components/containers/Newsletter";
import FooterThree from "@/components/layout/footer/FooterThree";

const HeroSectionThree = dynamic(
  () => import("@/components/layout/banner/HeroSectionThree"),
);
const ServiceThree = dynamic(
  () => import("@/components/containers/ServiceThree"),
);
const Project = dynamic(() => import("@/components/containers/Project"));
const WorkTwo = dynamic(() => import("@/components/containers/WorkTwo"));
const ProjectSlider = dynamic(
  () => import("@/components/containers/ProjectSlider"),
);
const TeamThree = dynamic(() => import("@/components/containers/TeamThree"));
const TestimonialTwo = dynamic(
  () => import("@/components/containers/TestimonialTwo"),
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
