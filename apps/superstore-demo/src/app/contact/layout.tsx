import type { Metadata } from "next";

import { seoMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = seoMetadata({
  title: "Contact A Cozy Fireplace",
  description: "Contact A Cozy Fireplace for fireplace selection, replacement parts, installation planning, service questions, and showroom support in Naperville, IL.",
  path: "/contact",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
