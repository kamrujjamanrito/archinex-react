import dynamic from "next/dynamic";
import type { Metadata } from "next";
import Header from "@/components/layout/header/Header";
import NewsDetailsBanner from "@/components/layout/banner/NewsDetailsBanner";
import Vision from "@/components/containers/Vision";
import Footer from "@/components/layout/footer/Footer";
import NewsDetails from "@/components/containers/NewsDetails";

const ClientWrapper = dynamic(() => import("@/components/ClientWrapper"));

export const generateMetadata = async (): Promise<Metadata> => ({
  title: "News Details | Modern Architecture & Interior Design",
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
      <Header />
      <NewsDetailsBanner />
      <NewsDetails />
      <Vision />
      <Footer />
      <ClientWrapper />
    </div>
  );
};

export default page;
