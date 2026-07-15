import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/public/icons/css/all.min.css";
import "@/public/icons/css/tabler-icons.min.css";
import "@/public/scss/app.scss";

const fraunces = Fraunces({
  variable: "--fraunces",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://archinex.netlify.app"),

  title: {
    default: "Archinex | Modern Architecture & Interior Design",
    template: "%s | Archinex",
  },

  description:
    "Discover Archinex, a modern React template for architecture and interior design websites.",
  keywords: ["architecture", "interior", "creative", "modern", "luxury"],

  authors: [
    {
      name: "theme_sonic",
      url: "https://themeforest.net/user/theme_sonic",
    },
  ],

  icons: { icon: "/favicon.ico" },

  alternates: { canonical: "https://archinex.netlify.app/" },

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
