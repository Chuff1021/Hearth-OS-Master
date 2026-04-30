import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Montserrat } from "next/font/google";
import "./globals.css";

// Forge & Flame uses Montserrat for everything (their --font-body-family +
// --font-heading-family). Match exactly so the dashboard feels cut from
// the same cloth as forgenflame.com.
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sans",
});

export const dynamic = "force-dynamic";

const clerkConfigured = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);

export const metadata: Metadata = {
  title: "Travis Industries powered by Hearth-OS",
  description:
    "Existing HearthOS dashboard branded for Travis Industries with fake employees, customers, jobs, invoices, dispatch, and dealer workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const document = (
    <html lang="en" className={montserrat.variable}>
      <body className={montserrat.className}>{children}</body>
    </html>
  );

  if (!clerkConfigured) return document;

  return <ClerkProvider>{document}</ClerkProvider>;
}
