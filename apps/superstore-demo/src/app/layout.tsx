import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { defaultStoreConfig } from "@/lib/store-config";
import { getLogoUrl, getLightLogoUrl } from "@/lib/logo-resolver";
import { SITE_URL } from "@/lib/site-url";
import { StructuredData } from "@/components/seo/StructuredData";
import {
  organizationJsonLd,
  localBusinessJsonLd,
  websiteJsonLd,
} from "@/lib/site-jsonld";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultStoreConfig.seo.metaTitle,
    template: `%s | ${defaultStoreConfig.storeName}`,
  },
  description: defaultStoreConfig.seo.metaDescription,
  keywords: defaultStoreConfig.seo.keywords.join(", "),
  applicationName: defaultStoreConfig.storeName,
  openGraph: {
    type: "website",
    siteName: defaultStoreConfig.storeName,
    title: defaultStoreConfig.seo.metaTitle,
    description: defaultStoreConfig.seo.metaDescription,
    url: SITE_URL,
    locale: "en_US",
    images: [
      {
        url: "/depot-logo.png",
        width: 1200,
        height: 630,
        alt: defaultStoreConfig.storeName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultStoreConfig.seo.metaTitle,
    description: defaultStoreConfig.seo.metaDescription,
    images: ["/depot-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.png?v=depot-20260501", type: "image/png", sizes: "512x512" },
      { url: "/favicon.ico?v=depot-20260501", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png?v=depot-20260501", sizes: "180x180" }],
    shortcut: [{ url: "/icon.png?v=depot-20260501", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const logoUrl = getLogoUrl();
  const lightLogoUrl = getLightLogoUrl();

  return (
    <html lang="en">
      <head>
        <title>The Depot Fireplace and Stove Center</title>
        <link rel="icon" href="/icon.png?v=depot-20260501" type="image/png" sizes="512x512" />
        <link rel="shortcut icon" href="/icon.png?v=depot-20260501" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=depot-20260501" sizes="180x180" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <StructuredData id="ld-organization" data={organizationJsonLd()} />
        <StructuredData id="ld-localbusiness" data={localBusinessJsonLd()} />
        <StructuredData id="ld-website" data={websiteJsonLd()} />
        <Header logoUrl={logoUrl} />
        <main className="min-h-screen">{children}</main>
        <Footer lightLogoUrl={lightLogoUrl} />
      </body>
    </html>
  );
}
