import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, MapPin, Phone, Truck } from "lucide-react";

import { StructuredData } from "@/components/seo/StructuredData";
import { breadcrumbJsonLd, collectionPageJsonLd } from "@/lib/site-jsonld";
import { absoluteUrl, SITE_URL } from "@/lib/site-url";
import { defaultStoreConfig } from "@/lib/store-config";
import { getLocalLandingPage, localLandingPages } from "@/lib/local-seo";

type RouteParams = { slug: string };
type RouteContext = { params: Promise<RouteParams> };

export function generateStaticParams(): RouteParams[] {
  return localLandingPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: RouteContext): Promise<Metadata> {
  const { slug } = await params;
  const page = getLocalLandingPage(slug);

  if (!page) {
    return {
      title: "Local Fireplace Page Not Found",
      description: "The local fireplace page you requested is not available.",
      robots: { index: false, follow: true },
    };
  }

  const url = absoluteUrl(`/local/${page.slug}`);

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      title: `${page.title} | ${defaultStoreConfig.storeName}`,
      description: page.description,
      url,
      siteName: defaultStoreConfig.storeName,
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
      title: `${page.title} | ${defaultStoreConfig.storeName}`,
      description: page.description,
      images: ["/depot-logo.png"],
    },
  };
}

export default async function LocalLandingPage({ params }: RouteContext) {
  const { slug } = await params;
  const page = getLocalLandingPage(slug);

  if (!page) notFound();

  const pageUrl = `/local/${page.slug}`;

  return (
    <main className="min-h-screen bg-[#f6efe5]">
      <StructuredData
        id="local-collection-jsonld"
        data={collectionPageJsonLd({
          name: `${page.h1} | ${defaultStoreConfig.storeName}`,
          description: page.description,
          url: pageUrl,
          numberOfItems: page.nearbyCategories.length,
        })}
      />
      <StructuredData
        id="local-breadcrumb-jsonld"
        data={breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Local Fireplace Service Areas", url: "/showrooms" },
          { name: page.city, url: pageUrl },
        ])}
      />
      <StructuredData
        id="local-service-jsonld"
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${absoluteUrl(pageUrl)}#service`,
          name: page.title,
          description: page.description,
          provider: { "@id": `${SITE_URL}/#localbusiness` },
          areaServed: {
            "@type": "City",
            name: page.city,
            addressRegion: page.state,
            addressCountry: "US",
          },
          serviceType: "Fireplace sales, fireplace parts support, and hearth product guidance",
          url: absoluteUrl(pageUrl),
        }}
      />

      <div className="border-b border-[#e6dccb] bg-[#ffffff]">
        <div className="mx-auto max-w-7xl px-4 py-3 md:px-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-[#5f5140]">
            <Link href="/" className="hover:text-[#b91806]">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/showrooms" className="hover:text-[#b91806]">Showrooms</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="font-semibold text-[#111111]">{page.city}</span>
          </nav>
        </div>
      </div>

      <section className="relative overflow-hidden bg-[#111111] px-4 py-16 text-white md:px-6 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(253,228,40,0.24),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(255,179,107,0.12),transparent_24%)]" />
        <div className="relative mx-auto max-w-7xl">
          <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.28em] text-[#e8b900]">
            <MapPin className="h-4 w-4" /> {page.city}, {page.state}
          </p>
          <h1 className="mt-5 max-w-4xl text-[42px] font-black leading-[0.98] tracking-[-0.055em] md:text-[68px]">
            {page.h1}
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#f7efd6]">{page.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${defaultStoreConfig.phone}`} className="inline-flex items-center gap-2 bg-[#e8b900] px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-black hover:bg-[#ffd94a]">
              <Phone className="h-4 w-4" /> Call {defaultStoreConfig.phone}
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 border border-[#f7efd6]/40 px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-[#f8ead8] hover:border-[#e8b900]">
              Request help
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-[1.1fr_0.9fr] md:px-6">
        <div className="border border-[#c8d8e8] bg-[#ffffff] p-6 shadow-[0_24px_80px_rgba(32,20,10,0.10)] md:p-8">
          <h2 className="text-3xl font-black tracking-[-0.04em] text-[#201914]">Fireplace help near {page.city}</h2>
          <ul className="mt-6 grid gap-4">
            {page.services.map((service) => (
              <li key={service} className="border border-[#c8d8e8] bg-[#f7efd6] px-5 py-4 text-[#5f5145]">
                {service}
              </li>
            ))}
          </ul>
        </div>

        <aside className="border border-[#c8d8e8] bg-white p-6 md:p-8">
          <div className="flex items-center gap-3 text-[#b91806]">
            <Truck className="h-5 w-5" />
            <p className="text-xs font-black uppercase tracking-[0.18em]">Shop online, backed locally</p>
          </div>
          <h2 className="mt-4 text-2xl font-black tracking-[-0.04em] text-[#201914]">Popular hearth categories</h2>
          <div className="mt-5 grid gap-3">
            {page.nearbyCategories.map((category) => (
              <Link key={category.href} href={category.href} className="border border-[#c8d8e8] px-4 py-3 font-bold text-[#2a211b] hover:border-[#b91806] hover:text-[#b91806]">
                {category.label}
              </Link>
            ))}
          </div>
        </aside>
      </section>
    </main>
  );
}
