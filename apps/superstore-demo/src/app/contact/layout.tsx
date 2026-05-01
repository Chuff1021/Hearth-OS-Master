import type { Metadata } from "next";

import { seoMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = seoMetadata({
  title: "Contact The Depot Fireplace and Stove Center",
  description: "Contact The Depot Fireplace and Stove Center for fireplace selection, replacement parts, installation planning, service questions, and showroom support in Tilton, IL.",
  path: "/contact",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
