import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard — The Depot Fireplace and Stove Center",
  robots: "noindex, nofollow",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
