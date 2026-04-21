import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import SchemaOrg from "@/components/seo/SchemaOrg";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://primepathtucking.com"),
  title: {
    default: "Prime Path Trucking | Dedicated Truck Dispatching Service USA",
    template: "%s | Prime Path Trucking",
  },
  description:
    "Prime Path Trucking offers 24/7 dedicated truck dispatching for owner-operators and fleets across the USA. Higher RPM, no forced dispatch, no sign-up fees.",
  keywords: [
    "truck dispatcher USA",
    "owner operator dispatching service",
    "dry van dispatch",
    "flatbed truck dispatcher",
    "reefer dispatch service",
    "hotshot dispatch",
    "truck dispatching company",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Prime Path Trucking",
    title: "Prime Path Trucking | Dedicated Truck Dispatching Service USA",
    description:
      "24/7 dedicated truck dispatching for owner-operators and fleets. Higher RPM, no forced dispatch.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prime Path Trucking | Dedicated Truck Dispatching Service USA",
    description:
      "24/7 dedicated truck dispatching for owner-operators and fleets. Higher RPM, no forced dispatch.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <SchemaOrg />
      </head>
      <body className="min-h-screen overflow-x-hidden flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16 md:pt-18">
          {children}
        </main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
