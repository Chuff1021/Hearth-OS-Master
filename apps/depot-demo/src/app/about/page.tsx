import type { Metadata } from "next";
import Link from "next/link";
import { defaultStoreConfig } from "@/lib/store-config";

export const metadata: Metadata = {
  title: "About The Depot Fireplace and Stove Center",
  description: "Learn about The Depot Fireplace and Stove Center, Illiana's fireplace, stove, grill, service, and installation retailer in Tilton, Illinois.",
};

const brands = ["Fireplace Xtrordinair", "Lopi", "Majestic", "Dimplex", "DaVinci Fireplaces", "Green Mountain Grills", "MHP Grills", "Hargrove Gas Logs", "Stoll Industries", "Ironhaus"];

export default function AboutPage() {
  return (
    <main className="bg-[#f7efd6] text-[#111111]">
      <section className="bg-[#111111] px-4 py-16 text-white md:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#e8b900]">Est. 1981 · Sales · Service · Installation</p>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-6xl">Illiana's fireplace, stove, grill, and installation center.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#f7efd6]">The Depot Fireplace and Stove Center has served the Illiana area for over 30 years from its Tilton showroom, helping customers plan fireplaces, inserts, stoves, grills, stone, parts, service, and installation.</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-12 md:grid-cols-3 md:px-6">
        <div className="border border-[#d9c48d] bg-white p-6"><p className="text-3xl font-black text-[#b91806]">1981</p><p className="mt-2 text-sm font-semibold text-[#5f5140]">Founded as a local hearth business.</p></div>
        <div className="border border-[#d9c48d] bg-white p-6"><p className="text-3xl font-black text-[#b91806]">2,400 sq. ft.</p><p className="mt-2 text-sm font-semibold text-[#5f5140]">Tilton showroom with burning displays.</p></div>
        <div className="border border-[#d9c48d] bg-white p-6"><p className="text-3xl font-black text-[#b91806]">14 counties</p><p className="mt-2 text-sm font-semibold text-[#5f5140]">Install and service coverage across Illiana.</p></div>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-14 md:px-6">
        <div className="border border-[#d9c48d] bg-white p-6">
          <h2 className="text-2xl font-black">Showroom and service</h2>
          <p className="mt-3 leading-7 text-[#5f5140]">Visit {defaultStoreConfig.address.street}, {defaultStoreConfig.address.city}, {defaultStoreConfig.address.state} {defaultStoreConfig.address.zip}, call {defaultStoreConfig.phone}, or email {defaultStoreConfig.email}. Hours are Monday-Friday 8:30 AM-4:00 PM and Saturday 9:00 AM-Noon.</p>
          <div className="mt-6 flex flex-wrap gap-2">{brands.map((brand) => <span key={brand} className="border border-[#d9c48d] bg-[#f7efd6] px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#111111]">{brand}</span>)}</div>
          <Link href="/contact" className="mt-6 inline-flex bg-[#b91806] px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-white">Contact The Depot</Link>
        </div>
      </section>
    </main>
  );
}
