import dynamic from "next/dynamic";
import type { Metadata } from "next";
import HeaderLight from "@/components/layout/header/HeaderLight";
import Footer from "@/components/layout/footer/Footer";
import Vision from "@/components/containers/Vision";
import AboutBanner from "@/components/layout/banner/AboutBanner";
import AboutSection from "@/components/containers/AboutSection";
import AboutOverview from "@/components/containers/AboutOverview";
import ServiceSection from "@/components/containers/ServiceSection";
import OverviewTwo from "@/components/containers/OverviewTwo";
import Partner from "@/components/containers/Partner";
import TeamTwo from "@/components/containers/TeamTwo";

const Testimonial = dynamic(
  () => import("@/components/containers/Testimonial"),
);
const ClientWrapper = dynamic(() => import("@/components/ClientWrapper"));

export const generateMetadata = async (): Promise<Metadata> => ({
  title: "About Us | Modern Architecture & Interior Design",
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
      <HeaderLight />
      <AboutBanner />
      <AboutSection />
      <AboutOverview />
      <ServiceSection alternate />
      <OverviewTwo />
      <Partner />
      <TeamTwo />
      <Testimonial />
      <Vision />
      <Footer />
      <ClientWrapper />
    </div>
  );
};

export default page;
