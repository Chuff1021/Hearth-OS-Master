import { seoMetadata } from "@/lib/seo-metadata";
import Link from "next/link";

export const metadata = seoMetadata({
  title: 'Fireplace Showroom in Tilton, IL',
  description: "Visit The Depot Fireplace and Stove Center in Tilton, IL for fireplace displays, hearth product guidance, replacement parts support, and local showroom help.",
  path: "/showrooms",
});

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f6efe5]">
      <section className="relative overflow-hidden bg-[#111111] px-4 py-16 text-white md:px-6 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(253,228,40,0.24),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(255,179,107,0.12),transparent_24%)]" />
        <div className="relative mx-auto max-w-5xl">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#e8b900]">Tilton, Illinois</p>
          <h1 className="mt-5 text-[42px] font-black leading-[0.98] tracking-[-0.055em] md:text-[68px]">Visit Our Showroom</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#f7efd6]">Visit The Depot Fireplace and Stove Center in Tilton, Illinois to see fireplace options, discuss parts, and get help from a real hearth team.</p>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-4 py-12 md:px-6">
        <div className="border border-[#c8d8e8] bg-[#ffffff] p-6 shadow-[0_24px_80px_rgba(32,20,10,0.10)] md:p-8">
          <h2 className="text-3xl font-black tracking-[-0.04em] text-[#201914]">What to know</h2>
          <ul className="mt-6 grid gap-4">
            <li className="border border-[#c8d8e8] bg-[#f7efd6] px-5 py-4 text-[#5f5140]">Address: 611 E Harrison St, Tilton, IL 65738.</li>
            <li className="border border-[#c8d8e8] bg-[#f7efd6] px-5 py-4 text-[#5f5140]">Monday–Friday: 9:00 AM–5:00 PM. Saturday by appointment. Sunday closed.</li>
            <li className="border border-[#c8d8e8] bg-[#f7efd6] px-5 py-4 text-[#5f5140]">Call ahead for model availability or service-specific questions.</li>
          </ul>
          <Link href="tel:217-443-1060" className="mt-8 inline-flex bg-[#e8b900] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-black transition hover:bg-[#ffd94a]">Call The Depot Fireplace and Stove Center</Link>
        </div>
      </section>
    </main>
  );
}
